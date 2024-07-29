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

export default function Education() {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [openForm, SetOpenForm] = useState(false);
  const [items, setItems] = useState([]);
  return (
    <>
      <div className="section-top">
        <h2>Education</h2>
        <button className="add-button">
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
      </div>
    </>
  );
}
