import TodoList from "~/components/TodoList";

export default function Home() {
  return (
    <main class="max-w-4xl mx-auto mt-4">
      <div class="text-center my-5 flex flex-col gap-4">
        <h1 class="text-2xl font-bold">Todo List App</h1>
      </div>
      <TodoList />
    </main>
  );
}
