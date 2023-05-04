import { ITask } from "types/tasks";

const baseURL = "http://localhost:4001"

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURL}/tasks`);
  const todos = await res.json();
  return todos;
}

export const addTask = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/tasks/${task.id}`, {
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(task)
  })
  const newTask = await res.json();
  return newTask;
}

export const editTask = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(task)
  })
  const newTask = await res.json();
  return newTask;
}

export const deleteTask = async (task: ITask): Promise<void> => {
  await fetch(`${baseURL}/tasks/${task.id}`, {method: 'DELETE'})
}