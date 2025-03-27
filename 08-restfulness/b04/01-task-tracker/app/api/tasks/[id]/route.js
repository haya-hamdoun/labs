import { NextResponse } from "next/server";
import * as tasks from "@/repo/tasks.js";

export async function GET(request, { params }) {
  const { id } = await params;
  // const id = (await params).id;
  const task = await tasks.get(id);

  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const task = await tasks.update(id, body);
  return NextResponse.json(task);
}

// await fetch("/api/tasks/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ title: "New Title" }),
// });

// await fetch("/api/tasks/2", {
//   method: "DELETE",
// });

export async function DELETE(request, { params }) {
  const { id } = await params;
  const task = await tasks.remove(id);
  return NextResponse.json(task);
}

// const response = await fetch(location);
// if (response.ok) {
//   const data = await response.json();
//   console.log(data);
// }
