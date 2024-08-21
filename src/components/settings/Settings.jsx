import "../../styles/section/settings.css";

export default function Settings() {
  return (
    <div className="settings-container">
      <button className="setting-btn download-btn">
        <span>Download</span>
        <span>
          <svg
            className="btn-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#5f6368"
          >
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
