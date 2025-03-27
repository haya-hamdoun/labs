import { NextResponse } from "next/server";
import * as tasks from "@/repo/tasks.js";

export async function GET(request, { params }) {
  // return Response.json([], { status: 200 });
  return NextResponse.json(await tasks.read());
}

export async function POST(request, { params }) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json({ message: "Invalid JSON." }, { status: 401 });
    }

    // if (!body?.title) {
    if (!("title" in body)) {
      return NextResponse.json({ message: "Missing title." }, { status: 401 });
    }

    let task;
    try {
      task = await tasks.create(body);
    } catch (e) {
      return NextResponse.json({ message: "Conflict." }, { status: 409 });
    }

    return NextResponse.json(task, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error." }, { status: 500 });
  }
}
