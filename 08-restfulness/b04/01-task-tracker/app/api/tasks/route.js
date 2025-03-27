import { NextResponse } from "next/server";
import * as tasks from "@/repo/tasks.js";

export async function GET(request, { params }) {
  return NextResponse.json(await tasks.get());
}

export async function POST(request, { params }) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
    }

    let task;
    try {
      task = await tasks.add(body);
    } catch (e) {
      console.error(e);
      return NextResponse.json({ message: "Conflict." }, { status: 409 });
    }

    return NextResponse.json(task, {
      status: 201,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Internal error." }, { status: 500 });
  }
}

// const response = await fetch(location);
// if (response.ok) {
//   const data = await response.json();
//   console.log(data);
// }
