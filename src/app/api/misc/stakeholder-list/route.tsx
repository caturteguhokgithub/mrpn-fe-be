import { auth, UserData } from "@/config/authentication";
import { NextResponse } from "next/server";
import { instanceApi } from '@/config/apiClient'

export const POST = auth(async ({ auth, body }) => {

    const session = auth?.user as UserData
    if (session === undefined) {
        return NextResponse.json({}, { status: 401 });
    }

    const api = instanceApi(session.token)

    const posts = await api.get("misc/stakeholder/list").then(res => res.data);

    return NextResponse.json(posts);
});