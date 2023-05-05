import { ITask } from "types/tasks";
import { VsEdit, VsTrash } from "solid-icons/vs";
import { deleteTask, editTask } from "~/api";
import { createSignal } from "solid-js";
import Modal from "./Modal";

interface TaskProps {
  task: ITask;
  updateTasks: () => Promise<void>;
}

export default function Task({ task, updateTasks }: TaskProps) {
  const [openModalEdit, setOpenModalEdit] = createSignal(false);
  const [openModalDel, setOpenModalDel] = createSignal(false);
  const [taskValue, setTaskValue] = createSignal(task.text);

  const handleEdit = async () => {
    await editTask({
      id: task.id,
      text: taskValue(),
    });
    setOpenModalEdit(false);
    updateTasks();
  };

  const handleDelete = async () => {
    await deleteTask(task);
    setOpenModalDel(false);
    updateTasks();
  };

  return (
    <tr>
      <td>{task.text}</td>
      <td class="flex gap-5">
        {/* Edit Function */}
        <VsEdit cursor="pointer" size={25} onClick={() => setOpenModalEdit(true)} />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h3 class="font-bold text-lg">Edit task</h3>
            <div class="flex gap-2 mt-4">
              <input value={taskValue()} onChange={(e) => setTaskValue(e.target.value)} type="text" class="input input-bordered w-full" />
              <button class="btn btn-primary" onClick={() => handleEdit()}>
                Submit
              </button>
            </div>
          </form>
        </Modal>
        {/* Delete Function */}
        <VsTrash cursor="pointer" size={25} onClick={() => setOpenModalDel(true)} />
        <Modal modalOpen={openModalDel} setModalOpen={setOpenModalDel}>
          <h3 class="font-bold text-lg text-center">Delete Task?</h3>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <button class="btn btn-error" onClick={() => handleDelete()}>
              Yes
            </button>
            <button class="btn" onClick={() => setOpenModalDel(false)}>
              No!
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
}
