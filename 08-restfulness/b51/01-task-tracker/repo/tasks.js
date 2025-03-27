import { nanoid } from "nanoid";
import { promises as fs } from "fs";

async function load() {
  try {
    const tasks = await fs.readFile("./repo/data/tasks.json");
    // console.log(tasks);
    return JSON.parse(tasks);
  } catch (e) {
    console.error(e);
  }
}

async function save(tasks) {
  try {
    await fs.writeFile("./repo/data/tasks.json", JSON.stringify(tasks));
  } catch (e) {
    console.error(e);
  }
}

export async function read(id) {
  const tasks = await load();

  if (id) {
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error("Not found");
    }
    return task;
  }
  return tasks;
}

export async function create(body) {
  const tasks = await load();
  // console.log(tasks);

  const duplicate = tasks.find((t) => t.title === body.title);

  if (duplicate) {
    throw new Error("Conflict");
  }

  const task = { id: nanoid(), ...body };
  tasks.push(task);

  await save(tasks);
  return task;
}

export async function update(id, task) {
  const tasks = await load();

  const index = tasks.findIndex((task) => task.id === id);
  tasks[index] = { ...tasks[index], ...task };

  await save(tasks);
}

export async function remove(id) {
  const tasks = await load();

  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);

  await save(tasks);
}
