import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ error: "Not implemented" }, { status: 501 });
  // return new NextResponse(`<html><body>Hello!</body></html>`, {
  //   headers: {
  //     "Content-Type": "text/html",
  //   },
  // });
}
