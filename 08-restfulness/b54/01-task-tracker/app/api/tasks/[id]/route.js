import { NextResponse } from "next/server";
import * as tasks from "@/repo/tasks";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const task = tasks.get(id);

    if (!task) {
      return NextResponse.json({ message: "Not Found" }, { status: 404 });
    }
    return NextResponse.json(await tasks.get(id));
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    return NextResponse.json(await tasks.update(id, body));
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    let task;
    try {
      task = await tasks.remove(id);
    } catch (e) {
      return NextResponse.json({ message: "Not found." }, { status: 404 });
    }
    return NextResponse.json(task);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
