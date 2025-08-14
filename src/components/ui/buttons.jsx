import "../../styles/Buttons.css";

export default function buttons({ onClick, label, bgColor = "#007bff", disabled = false }) {
  return (
    <button
      onClick={onClick}
      className="custom-button"
      style={{ backgroundColor: bgColor }}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
