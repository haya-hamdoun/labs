import { nanoid } from "nanoid";
import { promises as fs } from "fs";

const file = "./repo/data/tasks.json";

async function load() {
  return JSON.parse(await fs.readFile(file));
}

async function save(tasks) {
  await fs.writeFile(file, JSON.stringify(tasks));
}

export async function get(id) {
  const tasks = await load();

  if (id) {
    return tasks.find((task) => task.id === id);
  }
  return tasks;
}

export async function add(body) {
  const tasks = await load();

  if (!body?.title) {
    throw new Error("Title is required");
  }

  if (tasks.some((task) => task.title === body.title)) {
    throw new Error("Title must be unique");
  }

  const task = {
    id: nanoid(),
    // title: body?.title ?? "Untitled",
    title: body.title,
    completed: body?.completed ?? false,
  };
  tasks.push(task);

  await save(tasks);
  return task;
}

export async function update(id, body) {
  const tasks = await load();

  if (body?.title) {
    if (tasks.some((task) => task.title === body.title)) {
      throw new Error("Title must be unique");
    }
  }

  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.title = body?.title ?? task.title;
    task.completed = body?.completed ?? task.completed;

    await save(tasks);
    return task;
  }
  throw new Error("Task not found");
}

export async function remove(id) {
  const tasks = await load();

  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const task = tasks.splice(index, 1);
    await save(tasks);
    return task;
  }
  throw new Error("Task not found");
}
