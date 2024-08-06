export default function SectionTop({ title, onClick }) {
  return (
    <div className="section-top">
      <h2>{title}</h2>
      <button
        className="add-button bg-green-500 hover:bg-green-700"
        onClick={onClick}
      >
        Add{" "}
        <span>
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18M12 6V18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
