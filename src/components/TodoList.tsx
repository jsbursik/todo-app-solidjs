import { ITask } from "types/tasks";
import { Accessor, For, Signal } from "solid-js";
import Task from "./Task";

interface TodoListProps {
  tasks: () => ITask[];
  updateTasks: () => Promise<void>;
}

export default function TodoList({ tasks, updateTasks }: TodoListProps) {
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
          <For each={tasks()}>{(task) => <Task task={task} updateTasks={updateTasks} />}</For>
        </tbody>
      </table>
    </div>
  );
}
