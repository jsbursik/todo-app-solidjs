import { For, createSignal } from "solid-js";
import { getAllTasks } from "~/api";
import Task from "./Task";
import AddTask from "./AddTask";

const fetchedTasks = await getAllTasks();

export default function TodoList() {
  const [tasks, setTasks] = createSignal(fetchedTasks);

  const updateTasks = async () => {
    setTasks(await getAllTasks());
  };

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th class="w-full">Task</th>
            <th class="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <For each={tasks()}>{(task) => <Task task={task} updateTasks={updateTasks} />}</For>
        </tbody>
      </table>
      <AddTask updateTasks={updateTasks} />
    </div>
  );
}
