import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

function Form({ formRef, onClose, onChange, obj }) {
  return (
    <dialog className={"form-dialog"} ref={formRef}>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          School / University
          <input
            type="text"
            name="school"
            onChange={onChange}
            value={obj.school}
          />
        </label>
        <label>
          Title of study
          <input
            type="text"
            name="title"
            onChange={onChange}
            value={obj.title}
          />
        </label>
        <label>
          Degree
          <input
            type="text"
            name="degree"
            onChange={onChange}
            value={obj.degree}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            name="start"
            onChange={onChange}
            value={obj.start}
          />
        </label>
        <label>
          End Date
          <input type="date" name="end" onChange={onChange} value={obj.end} />
        </label>
        <div className="form-buttons">
          <button className="close-btn" onClick={() => onClose(false)}>
            Close
          </button>
          <button
            className="open-btn"
            type="submit"
            onClick={() => onClose(true)}
          >
            Save
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default function Education() {
  const [selectedItem, setSelectedItem] = useState({
    school: "",
    title: "",
    degree: "",
    start: "",
    end: "",
  });
  const [educationArray, setEducationArray] = useState([]);
  const formRef = useRef(null);

  const clearItem = () => {
    setSelectedItem({
      school: "",
      title: "",
      degree: "",
      start: "",
      end: "",
    });
  };

  function handleOpenClose(isSave) {
    if (formRef.current.open) {
      if (isSave) {
        console.log("Save the data");
        const newItem = { key: uuidv4(), ...selectedItem };
        setEducationArray([...educationArray, newItem]);
      } else {
        console.log("Cancel operation");
      }
      clearItem();
      formRef.current.close();
    } else {
      formRef.current.showModal();
    }
  }

  function handleChange(e) {
    setSelectedItem({ ...selectedItem, [e.target.name]: e.target.value });
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
        {educationArray.map((item, index) => {
          return (
            <Item
              key={item.key}
              number={index + 1}
              school={item.school}
              title={item.title}
              degree={item.degree}
              start={item.start}
              end={item.end}
            />
          );
        })}
        <Form
          onClose={handleOpenClose}
          formRef={formRef}
          onChange={handleChange}
          obj={selectedItem}
        />
      </div>
    </>
  );
}
