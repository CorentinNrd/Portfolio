import "react-responsive-modal/styles.css";
import "../../styles/Modals.css";
import { Modal } from "react-responsive-modal";

export default function Modals({ children, isOpen, onClose, styles }) {
  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        center
        classNames={{
          modal: "customModal",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customExitModalAnimation",
        }}
        styles={{
          modal: styles,
        }}
        animationDuration={500}
        // Props spécifiques pour mobile
        showCloseIcon={true}
        closeOnOverlayClick={true}
        closeOnEsc={true}
      >
        {children}
      </Modal>
    </>
  );
}
