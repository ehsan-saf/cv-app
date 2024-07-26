import "../styles/Section.css";

export default function Section({ title, inputs }) {
  return (
    <div className="section-container">
      <h2 className="section-title">{title}</h2>
      <div className="inputs">{inputs}</div>
    </div>
  );
}
