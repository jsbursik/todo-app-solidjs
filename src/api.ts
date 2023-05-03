import { ITask } from "types/tasks";

const baseURL = "http://localhost:4001"

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURL}/tasks`);
  const todos = await res.json();
  return todos;
}