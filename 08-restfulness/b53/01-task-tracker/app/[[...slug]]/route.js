import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;
  return NextResponse.json(
    { message: `Hello ${slug ? slug.join("/") : "/"}!` },
    { status: 200 }
  );

  // return new NextResponse(JSON.stringify({ message: "Hello world!" }), {
  //   headers: { "Content-Type": "application/json" },
  // });

  // return new NextResponse(`<html><body><p>Hello, world!</p></body></html>`, {
  //   headers: { "Content-Type": "text/html" },
  // });
}
