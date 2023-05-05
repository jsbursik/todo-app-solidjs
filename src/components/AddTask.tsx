import { createSignal } from "solid-js";
import { addTask } from "~/api";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";

interface AddTaskProps {
  updateTasks: () => Promise<void>;
}

export default function AddTask({ updateTasks }: AddTaskProps) {
  const [modalOpen, setModalOpen] = createSignal(false);
  const [taskValue, setTaskValue] = createSignal("");

  const handleAddTask = async () => {
    setModalOpen(false);
    await addTask({
      id: uuidv4(),
      text: taskValue(),
    });
    updateTasks();
    setTaskValue("");
  };

  return (
    <div class="text-center mt-10">
      <button class="btn btn-primary w-1/2" onClick={() => setModalOpen(true)}>
        Add Task
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h3 class="font-bold text-lg">Add new task</h3>
          <div class="flex gap-2 mt-4">
            <input value={taskValue()} onChange={(e) => setTaskValue(e.target.value)} type="text" class="input input-bordered w-full" />
            <button class="btn btn-primary" onClick={() => handleAddTask()}>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
