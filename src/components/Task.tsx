import { ITask } from "types/tasks";
import { VsEdit, VsTrash } from "solid-icons/vs";

interface TaskProps {
  task: ITask;
}

export default function Task({ task }: TaskProps) {
  return (
    <tr>
      <td>{task.text}</td>
      <td class="flex gap-5">
        <VsEdit cursor="pointer" size={25} />
        <VsTrash cursor="pointer" size={25} />
      </td>
    </tr>
  );
}
