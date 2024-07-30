import { useState } from "react";
import "../styles/Info.css";

export default function Info({ infoName, type }) {
  const [text, setText] = useState("");
  const [isEditing, SetIsEditing] = useState(false);

  function handleChange(e) {
    setText(e.target.value);
  }

  function toggleMode() {
    SetIsEditing(!isEditing);
  }

  return (
    <div className="info-container">
      {isEditing ? (
        <button className="btn confirm-button" onClick={toggleMode}></button>
      ) : (
        <button className="btn edit-button" onClick={toggleMode}></button>
      )}
      <label className="info-label">
        <p className="infoTitle">{infoName}</p>
        {isEditing ? (
          <>
            <input
              className="general_input"
              type={type}
              placeholder={`Enter your ${infoName}`}
              value={text}
              onChange={handleChange}
            />
          </>
        ) : (
          <p className="info">
            {text.trim() === "" ? `Enter your ${infoName}` : text}
          </p>
        )}
      </label>
    </div>
  );
}
