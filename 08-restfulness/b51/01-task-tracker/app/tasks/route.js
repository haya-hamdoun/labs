import { NextResponse } from "next/server";
import * as repo from "@/repo/tasks.js";

export async function GET(request, { params }) {
  // console.log(repo.read());
  try {
    const tasks = await repo.read();
    return NextResponse.json(tasks, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }

  // return new NextResponse(JSON.stringify(tasks.read()), {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
}

export async function POST(request, { params }) {
  // client-side fetch
  // await fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify({ title, completed }),
  // });

  try {
    let task;
    try {
      task = await request.json();
    } catch (e) {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    if (!("title" in task)) {
      return NextResponse.json(
        { message: "Title is required" },
        { status: 400 }
      );
    }

    try {
      task = await repo.create(task);
    } catch (e) {
      return NextResponse.json({ message: "Conflict" }, { status: 409 });
    }
    return NextResponse.json(task, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
