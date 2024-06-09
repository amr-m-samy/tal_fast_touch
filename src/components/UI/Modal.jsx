import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, modalSize }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" style={{
      '--modal-size': modalSize,
    }} ref={dialog} >
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
