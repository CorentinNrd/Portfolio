import "../../styles/Formtextarea.css";

export default function Textarea({ type, placeholder, value, onChange, name, error = false }) {
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`textarea-custom ${error ? " error" : ""}`}
    />
  );
}
