import { NextResponse } from "next/server";

export async function GET(
_req: Request,
{ params }: { params: { id: string } }
) {
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`, { cache: "no-store" });
if (!res.ok) return NextResponse.json({ error: true }, { status: res.status });
const data = await res.json();
return NextResponse.json(data);
}