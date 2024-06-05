import NextAuth, {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {AdapterUser} from "@auth/core/adapters";
import {jwtVerify} from "jose";
import {JWT} from "@auth/core/jwt";

export const BASE_PATH = "/api/auth";
export const MAX_REFRESH_TOKEN = parseInt(process.env.REFRESH_TOKEN_BEFORE_EXP ?? "2")*100;

export type UserData = {
    id:string;
    name:string;
    email:string;
    role?:string;
    menus:Array<MenuConfigResType>;
    permission:string[];
    token:string;
}

export const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "admin@email.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                return loginFetch(credentials.email as string, credentials.password as string)
            },
        }),
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return await refreshFetch(token);
        },
        session: async ({ session, token }) => {
            const userPayload = await refreshFetch(token);
            session.user = userPayload?.user as AdapterUser
            return session
        }
    }
};

async function isValidCredentials(token:string) {
    const JWT_SECRET = process.env["JWT_SECRET"] ?? "";
    try {
        return await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    } catch {
        return null
    }
}

export type LoginResType = {
    data: {
        user: {
            id:string;
            name:string;
            email:string;
        },
        access_token: {
            token:string;
            expires_in:number;
        }
    }
}
async function loginFetch(email: string, password: string) {
    try {
        const res = await fetch(process.env.BACKEND_URL + "auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {"Content-Type": "application/json"},
        });

        if (!res.ok) {
            return null;
        }

        const login = await res.json() as LoginResType;
        const menus = await menuConfigFetch(login.data.access_token.token)
        const permission = await permissionFetch(login.data.access_token.token)

        const user:UserData = {
            id: login.data.user.id,
            name: login.data.user.name,
            email: login.data.user.email,
            token: login.data.access_token.token,
            menus: menus ?? [],
            permission: permission ?? []
        }

        return Promise.resolve(user);

    } catch (e) {
        return null
    }
}

export type MenuConfigResType = {
    id:number;
    type:string;
    name:string;
    short_name:string;
    route:string;
    icon:string;
    submenu:Array<MenuConfigResType>
    permission:Array<{ name:string;path:string }>
}
async function menuConfigFetch(token: string) {

    try {
        const res = await fetch(process.env.BACKEND_URL + "auth/menuConfig", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        });

        if (!res.ok) {
            return null;
        }

        const response = await res.json();
        return await response.data as Array<MenuConfigResType>

    } catch (e) {
        return null
    }

}

async function permissionFetch(token: string) {

    try {
        const res = await fetch(process.env.BACKEND_URL + "auth/permission", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        });

        if (!res.ok) {
            return null;
        }

        const response = await res.json();
        return await response.data as Array<string>

    } catch (e) {
        return null
    }

}

async function refreshFetch(token: JWT) {

    const userData = token.user as UserData
    const payloadToken = await isValidCredentials(userData.token)
    payloadToken && (token.exp = payloadToken?.payload.exp)

    if (payloadToken == null){
        return null
    }

    const exp = token.exp ? token.exp : 0;
    if (exp > 0 && !((exp - Date.now()/1000) < MAX_REFRESH_TOKEN)) {
        return token
    }

    try {
        const res = await fetch(process.env.BACKEND_URL + "auth/refresh", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + userData.token
            },
        });

        if (!res.ok) {
            return null;
        }

        const json = await res.json() as LoginResType;

        token.user = {
            ...userData,
            id: json.data.user.id,
            name: json.data.user.name,
            email: json.data.user.email,
            token: json.data.access_token.token
        }
        return token

    } catch (e) {
        return null
    }

}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);