import NextAuth from "next-auth"
import { authOptions, UserData } from "@/config/authentication";
import {NextResponse} from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

const { auth } = NextAuth(authOptions);

export default auth( async (req) => {
    const { nextUrl } = req;
    const isAuthenticated = !!req.auth;
    const pathName = nextUrl.pathname

    if (!isAuthenticated && pathName === "/"){
        return NextResponse.redirect(new URL(`api/auth/signin?callbackUrl=${encodeURIComponent(BASE_URL)}`,BASE_URL));
    }

    if (!isAuthenticated){
        return NextResponse.redirect(BASE_URL)
    }

    const sessionAuth = req.auth

    let session:UserData = {
        id:"",
        name: "",
        email: "",
        role:"",
        menus: [],
        permission: [],
        token:""
    }

    if (sessionAuth){
        session = sessionAuth?.user as UserData
    }

    if(pathName === "/"){
        const pathParentMenu = session.menus[0].route
        return NextResponse.redirect(new URL(pathParentMenu, BASE_URL));
    }

    let allMenuRoute:string[] = [] 
    session.menus.map(m => {
        allMenuRoute.push(m.route)
        if (m.submenu.length) {
            m.submenu.map((sm: { route: string; }) => {
                allMenuRoute.push(sm.route)
            })
        }
    })

    // if (!allMenuRoute.includes(pathName.substring(1))) {
    //     return NextResponse.redirect(new URL(`api/auth/signin?callbackUrl=${encodeURIComponent(BASE_URL)}`,BASE_URL));
    // }

    return NextResponse.next()

});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};