import "../../styles/Buttons.css";

export default function buttons({ onClick, label, bgColor = "#007bff" }) {
  return (
    <button
      onClick={onClick}
      className="custom-button"
      style={{ backgroundColor: bgColor }}
    >
      {label}
    </button>
  );
}
