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
        }}
        styles={{
          modal: styles,
        }}
        animationDuration={500}
      >
        {children}
      </Modal>
    </>
  );
}
