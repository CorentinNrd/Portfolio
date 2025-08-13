import "../../styles/FormTextarea.css";

export default function Textarea({ type, placeholder, value, onChange }) {
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="textarea-custom"
    />
  );
}
