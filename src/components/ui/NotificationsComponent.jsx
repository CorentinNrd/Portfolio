import "../../styles/Notifications.css";
import { useEffect, useState, useCallback } from "react";

export default function Notifications({
  children,
  isOpen,
  styles,
  type,
  onClose,
  delay = 3000, // Délai par défaut de 3 secondes
  autoClose = true,
}) {
  const [shouldRender, setShouldRender] = useState(false);
  // const [showAnimation, setShowAnimation] = useState(false);
  const [animationState, setAnimationState] = useState(""); // "", "show", "hide"

  const notificationStyles = {
    success: { backgroundColor: "#d4edda", color: "#155724" },
    error: { backgroundColor: "#f8d7da", color: "#721c24" },
    info: { backgroundColor: "#cce5ff", color: "#004085" },
  };

  const handleClose = useCallback(() => {
    setAnimationState("hide");
    setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, 300); // Correspond à la durée de l'animation de sortie
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Déclencher l'animation d'entrée après le rendu
      setTimeout(() => setAnimationState("show"), 10);

      if (autoClose && onClose) {
        const timer = setTimeout(() => {
          handleClose();
        }, delay);

        return () => clearTimeout(timer);
      }
    } else if (shouldRender) {
      handleClose();
    }
  }, [isOpen, autoClose, delay, handleClose, shouldRender, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`notification ${animationState}`} // Utilise l'état d'animation
      style={{ ...styles, ...notificationStyles[type] }}
      onClick={handleClose} // Utilise handleClose au lieu de onClose directement
    >
      {children}
    </div>
  );
}
