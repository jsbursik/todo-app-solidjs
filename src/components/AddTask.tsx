import { createSignal } from "solid-js";
import Modal from "./Modal";

export default function AddTask() {
  const [modalOpen, setModalOpen] = createSignal(false);
  const [taskValue, setTaskValue] = createSignal("");

  return (
    <div class="text-center mt-10">
      <button class="btn btn-primary w-1/2" onClick={() => setModalOpen(true)}>
        Add Task
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form>
          <h3 class="font-bold text-lg">Add new task</h3>
          <div class="flex gap-2 mt-4">
            <input value={taskValue()} onChange={(e) => setTaskValue(e.target.value)} type="text" class="input input-bordered w-full" />
            <button class="btn btn-primary">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
