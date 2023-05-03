import { ITask } from "types/tasks";
import { For } from "solid-js";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

export default function TodoList({ tasks }: TodoListProps) {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th class="w-full">Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <For each={tasks}>{(task) => <Task task={task} />}</For>
        </tbody>
      </table>
    </div>
  );
}
