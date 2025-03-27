import { NextResponse } from "next/server";
import * as tasks from "@/repo/tasks.js";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const task = await tasks.read(id);

    if (!task) {
      return NextResponse.json({ message: "Not found." }, { status: 404 });
    } else {
      return NextResponse.json(task, { status: 200 });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error." }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;
  return NextResponse.json(await tasks.update(id, body));
}

export async function DEL(request, { params }) {
  const { id } = await params;
  return NextResponse.json(await tasks.remove(id));
}
