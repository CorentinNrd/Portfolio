import "../../styles/Cards.css";

export default function cards({ children, className }) {
  return <div className={`cards ${className}`}>{children}</div>;
}
