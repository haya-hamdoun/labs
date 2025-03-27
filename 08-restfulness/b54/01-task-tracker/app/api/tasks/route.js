import { NextResponse } from "next/server";
import * as tasks from "@/repo/tasks";

export async function GET(request, { params }) {
  // return NextResponse.json({ message: "Hello world!" });

  // return new NextResponse(`<html><body><p>Tasks</p></body></html>`, {
  //   headers: { "Content-Type": "text/html" },
  // });

  try {
    return NextResponse.json(await tasks.get());
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// await fetch("/api/tasks", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ title: "Task 2", completed: true }),
// });

export async function POST(request, { params }) {
  try {
    const body = await request.json();
    let task;
    try {
      task = await tasks.add(body);
    } catch (e) {
      return NextResponse.json({ message: "Bad request." }, { status: 400 });
    }
    return NextResponse.json(task, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
