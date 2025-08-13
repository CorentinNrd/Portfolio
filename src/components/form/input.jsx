import "../../styles/FormInput.css";

export default function Input({ type, placeholder, value, onChange, ID }) {
  return (
    <input
      id={ID}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-custom"
    />
  );
}
