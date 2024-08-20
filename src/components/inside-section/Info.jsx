import { useState } from "react";
import "../../styles/inside-section/Info.css";

export function Info({ infoName, type, icon }) {
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
        {icon}
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

// About ME Textarea
export function Textarea({ infoName, icon }) {
  const [text, setText] = useState("");
  const [isEditing, SetIsEditing] = useState(false);
  const charLimit = 110;
  const charCapacity = `${text.length} / ${charLimit}`;

  function handleChange(e) {
    setText(e.target.value);
  }

  function toggleMode() {
    SetIsEditing(!isEditing);
  }

  return (
    <div className="info-container">
      {isEditing ? (
        <button
          className="btn confirm-button"
          onClick={toggleMode}
          style={{
            flex: "none",
          }}
        ></button>
      ) : (
        <button className="btn edit-button" onClick={toggleMode}></button>
      )}
      <label
        className="info-label"
        style={{
          flex: 1,
          marginTop: "7px",
        }}
      >
        {icon}
        {isEditing ? (
          <div
            style={{
              position: "relative",
            }}
          >
            <textarea
              className="textarea about-textarea"
              onChange={handleChange}
              value={text}
              style={{
                flex: 1,
              }}
              maxLength={charLimit}
              rows={7}
            ></textarea>
            <div className="text-limit">{charCapacity}</div>
            <button
              className="clear-text"
              onClick={() => {
                setText("");
              }}
            >
              clear
            </button>
          </div>
        ) : (
          <p
            className="about-info"
            style={{
              flex: 1,
            }}
          >
            {text.trim() === "" ? `Enter your ${infoName}` : text}
          </p>
        )}
      </label>
    </div>
  );
}
