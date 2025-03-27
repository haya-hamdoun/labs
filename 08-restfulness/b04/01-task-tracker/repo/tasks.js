import { nanoid } from "nanoid";
import { promises as fs } from "fs";

const file = "./repo/data/tasks.json";

async function load() {
  return JSON.parse(await fs.readFile(file)); // loading
}

async function save(tasks) {
  await fs.writeFile(file, JSON.stringify(tasks)); // saving
}

export async function add(body) {
  const tasks = await load();

  if (!body?.title) {
    throw new Error("Title is required");
  }

  if (tasks.some((task) => task.title === body.title)) {
    throw new Error("Title already exists");
  }

  const task = {
    id: nanoid(10),
    title: body.title,
    completed: body?.completed ?? false,
  };
  tasks.push(task);
  await save(tasks);
  return task;
} // create

export async function get(id) {
  const tasks = await load();

  if (id) {
    return tasks.find((task) => task.id === id);
  }
  return tasks;
} // read

export async function update(id, body) {
  const tasks = await load();
  // { title: "New Title", completed: true/false}

  if (body?.title && tasks.some((task) => task.title === body.title)) {
    throw new Error("Title already exists");
  }

  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = {
      ...tasks[index],
      title: body?.title ?? tasks[index].title,
      completed: body?.completed ?? tasks[index].completed,
    };
    await save(tasks);
    return tasks[index];
  }
  return null;
} // update

export async function remove(id) {
  const tasks = await load();
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const task = tasks.splice(index, 1);
    await save(tasks);
    return task;
  }
  return null;
} // delete
