import { auth, UserData } from "@/config/authentication";
import {instanceApi} from "@/config/apiClient";
import {NextResponse} from "next/server";

export async function streamToArrayBuffer(stream: any): Promise<Uint8Array> {
    return new Uint8Array(await new Response(stream).arrayBuffer());
}
export const POST = auth(async (req) => {

    const stream = await streamToArrayBuffer(req.body)
    const data = JSON.parse(Buffer.from(stream).toString('utf8'));
    console.log(data)

    const session = req.auth?.user as UserData
    if (session === undefined) {
        throw new TypeError("please try again later");
    }

    const api = instanceApi(session.token)

    const posts = await api.post("exsum/penerimaManfaat/show", data).then(res => res.data);

    console.log(posts)
    return NextResponse.json(posts);
});