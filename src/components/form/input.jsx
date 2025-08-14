import "../../styles/FormInput.css";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  ID,
  name,
  error = false,
}) {
  return (
    <input
      id={ID}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`input-custom ${error ? " error" : ""}`}
    />
  );
}
