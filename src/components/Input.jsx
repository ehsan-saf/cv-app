export default function Input({ label, type, name, onChange, value }) {
  return (
    <label className="form-label">
      {label}
      <input type={type} name={name} onChange={onChange} value={value} />
    </label>
  );
}
