import "../styles/General.css";

export default function General({ inputs }) {
  return (
    <div className="section-container">
      <h2 className="section-title">General</h2>
      <div className="inputs">{inputs}</div>
    </div>
  );
}
