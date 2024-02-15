import {
  ElementType,
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const anyFunction = (...args: any[]) => args as any;

type ModalContext = {
  openModal: (component: ElementType, props?: Record<string, any>) => void;
  closeModal: () => void;
};

type ModalState = {
  component: ElementType;
  props?: Record<string, any>;
};

const DEFAULT_MODAL_CONTEXT = {
  openModal: anyFunction,
  closeModal: anyFunction,
};

export const ModalContext = createContext<ModalContext>(DEFAULT_MODAL_CONTEXT);

const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [modalComponent, setModalComponent] = useState<ModalState | null>();

  useEffect(() => {
    if (modalComponent) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [modalComponent]);

  function openModal(component: ElementType, props?: Record<string, any>) {
    setModalComponent({ component, props });
  }

  function closeModal() {
    setModalComponent(null);
  }

  const modalComponentProviderValue = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalComponentProviderValue}>
      {createPortal(
        <dialog className={styles.modal} ref={dialogRef}>
          {modalComponent && (
            <modalComponent.component
              {...modalComponent.props}
            ></modalComponent.component>
          )}
        </dialog>,
        document.body
      )}
      {children}
    </ModalContext.Provider>
  );
};

export default Modal;
