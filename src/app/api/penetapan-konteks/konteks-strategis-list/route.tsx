import { auth, UserData } from "@/config/authentication";
import { NextResponse } from "next/server";
import { instanceApi } from '@/config/apiClient'

async function streamToArrayBuffer(stream: any): Promise<Uint8Array> {
    return new Uint8Array(await new Response(stream).arrayBuffer());
}
export const POST = auth(async ({ auth, body }) => {

    const stream = await streamToArrayBuffer(body)
    const params = JSON.parse(Buffer.from(stream).toString('utf8'));

    const session = auth?.user as UserData
    if (session === undefined) {
        throw new TypeError("please try again later");
    }

    const api = instanceApi(session.token)

    const posts = await api.post("konteksStrategis/list", params)
            .then(res => res.data);

    return NextResponse.json(posts);
});