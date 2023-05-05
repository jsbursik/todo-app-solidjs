import TodoList from "~/components/TodoList";
import AddTask from "~/components/AddTask";
import { createSignal } from "solid-js";
import { getAllTasks } from "~/api";

const fetchedTasks = await getAllTasks();

export default function Home() {
  const [tasks, setTasks] = createSignal(fetchedTasks);

  const updateTasks = async () => {
    setTasks(await getAllTasks());
  };

  return (
    <main class="max-w-4xl mx-auto mt-4">
      <div class="text-center my-5 flex flex-col gap-4">
        <h1 class="text-2xl font-bold">Todo List App</h1>
        <p></p>
      </div>
      <TodoList tasks={tasks} updateTasks={updateTasks} />
      <AddTask updateTasks={updateTasks} />
    </main>
  );
}
