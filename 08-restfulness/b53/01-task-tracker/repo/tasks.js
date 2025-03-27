import { nanoid } from "nanoid";
import { promises as fs } from "fs";

async function load() {
  return JSON.parse(await fs.readFile("repo/data/tasks.json"));
}

async function save(tasks) {
  await fs.writeFile("repo/data/tasks.json", JSON.stringify(tasks));
}

export async function read(id) {
  const tasks = await load();
  if (id) {
    return tasks.find((task) => task.id === id);
  }
  return tasks;
}

export async function create(obj) {
  const tasks = await load();

  if (tasks.find((t) => t.title === obj.title)) {
    throw new Error("Conflict");
  }

  const task = { ...obj, id: nanoid() };
  tasks.push(task);

  await save(tasks);
  return task;
}

export async function update(id, obj) {
  const tasks = await load();

  const index = tasks.findIndex((task) => task.id === id);
  tasks[index] = { ...tasks[index], ...obj };
  // Object.assign(tasks[index], obj);

  await save(tasks);
  return tasks[index];
}

export async function remove(id) {
  const tasks = await load();

  const index = tasks.findIndex((task) => task.id === id);
  const task = tasks.splice(index, 1);

  await save(tasks);
  return task;
}
