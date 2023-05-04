import { JSX } from "solid-js";

interface ModalProps {
  modalOpen: () => boolean; // Either do this or Accessor<boolean>
  setModalOpen: (open: boolean) => boolean | void;
  children: JSX.Element;
}

export default function Modal({ modalOpen, setModalOpen, children }: ModalProps) {
  return (
    <div class={`modal ${modalOpen() ? "modal-open" : ""}`}>
      <div class="modal-box relative">
        <label class="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setModalOpen(false)}>
          ✕
        </label>
        {children}
      </div>
    </div>
  );
}
