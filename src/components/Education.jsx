import { useState } from "react";
import "../styles/Education.css";

function Item({ number, school, title, degree, start, end }) {
  return (
    <div className="education-item">
      <div className="education-number">{number}</div>
      <div className="education-info">
        <h3 className="education-school">{school}</h3>
        <p>
          {title} (<span>{degree}</span>)
        </p>
        <p>
          <span>From </span>
          {`${start}`}
          <span> Until </span>
          {`${end === false ? "Now" : end}`}
        </p>
      </div>
    </div>
  );
}

function Form({ onClose }) {
  return (
    <dialog className="form-dialog">
      <form className="form">
        <label>
          School / University
          <input type="text" />
        </label>
        <label>
          Title of study
          <input type="text" />
        </label>
        <label>
          Degree
          <input type="text" />
        </label>
        <label>
          Start Date
          <input type="date" />
        </label>
        <label>
          End Date
          <input type="date" />
        </label>
        <div className="form-buttons">
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
          <button className="open-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default function Education() {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [items, setItems] = useState([]);

  function handleOpenClose() {
    const dialog = document.querySelector(".form-dialog");
    if (dialog.open) {
      dialog.close();
    } else {
      dialog.showModal();
    }
  }

  return (
    <>
      <div className="section-top">
        <h2>Education</h2>
        <button className="add-button" onClick={handleOpenClose}>
          Add <span>+</span>
        </button>
      </div>
      <div className="education-container">
        <Item
          number={1}
          school={"Farhangia"}
          title={"Elementary education"}
          degree={"Bachelor"}
          start={"2021/10/05"}
          end={false}
        />
        <Form onClose={handleOpenClose} />
      </div>
    </>
  );
}
