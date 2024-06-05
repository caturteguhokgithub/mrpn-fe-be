import { auth, UserData } from "@/config/authentication";
import { NextResponse } from "next/server";
import { instanceApi } from '@/config/apiClient'

type Ref = {
    id:number;
    code: string;
    value: string;
}

export type TemaType = {
    id:number;
    code: string;
    value: string;
    ap:{
        id:number;
        ref:Ref
        pp:{
            id:number;
            ref:Ref;
            kp:{
                id:number;
                ref:Ref
            }[]
        }[]
    }[]
}

export const POST = auth(async ({ auth }) => {
    
    const session = auth?.user as UserData
    if (session === undefined) {
        throw new TypeError("please try again later");
    }

    const api = instanceApi(session.token)

    const posts = await api.get("tema/list").then(res => res.data);

    return NextResponse.json(posts);
});