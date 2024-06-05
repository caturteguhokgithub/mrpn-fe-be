import { auth, UserData } from "@/config/authentication";
import { NextResponse } from "next/server";
import { instanceApi } from '@/config/apiClient'

export type RkpResponseType = {
    id: number;
    code: string;
    value: string;
    pp: Array<{
        id: number;
        code: string;
        value: string;
        kp: Array<{
            id: number;
            code: string;
            value: string;
        }>
    }>
}

export const POST = auth(async ({ auth }) => {
    const session = auth?.user as UserData
    if (session === undefined) {
        return NextResponse.json({}, { status: 401 });
    }

    const api = instanceApi(session.token)

    const posts = await api.get("misc/rkp/list").then(res => res.data);

    return NextResponse.json(posts);
});