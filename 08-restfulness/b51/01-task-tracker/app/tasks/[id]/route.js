import { NextResponse } from "next/server";
import * as repo from "@/repo/tasks.js";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    // console.log(id);

    try {
      const task = await repo.read(id);
      return NextResponse.json(task, { status: 200 });
    } catch (e) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  return NextResponse.json({}, { status: 201 });
}

export async function DELETE(request, { params }) {
  return NextResponse.json(null, { status: 204 });
}
