import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import "../styles/Input.css";
import "../styles/Education.css";

function Item({
  id,
  number,
  school,
  title,
  degree,
  start,
  end,
  onEdit,
  onDelete,
}) {
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
      <div className="item-button-group">
        <button
          className={"btn edit-button"}
          onClick={() => onEdit(id)}
        ></button>
        <button
          className="btn edit-button delete-button"
          onClick={() => onDelete(id)}
          style={{
            backgroundImage: "url(src/assets/delete.svg)",
          }}
        ></button>
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
        <Input
          label={"School / University"}
          type={"text"}
          name={"school"}
          onChange={onChange}
          value={obj.school}
        />
        <Input
          label={"Title of Study"}
          type={"text"}
          name={"title"}
          onChange={onChange}
          value={obj.title}
        />
        <Input
          label={"Degree"}
          type={"text"}
          name={"degree"}
          onChange={onChange}
          value={obj.degree}
        />
        <Input
          label={"Start Date"}
          type={"date"}
          name={"start"}
          onChange={onChange}
          value={obj.start}
        />
        <Input
          label={"End Date"}
          type={"date"}
          name={"end"}
          onChange={onChange}
          value={obj.end}
        />
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
    id: "",
  });
  const [educationArray, setEducationArray] = useState([]);
  const [inputMode, setInputMode] = useState("add");
  const [selectedId, setSelectedId] = useState("");
  const formRef = useRef(null);

  const clearItem = () => {
    setSelectedItem({
      school: "",
      title: "",
      degree: "",
      start: "",
      end: "",
      id: "",
    });
  };

  function handleOpenClose(isSave) {
    if (formRef.current.open) {
      if (isSave) {
        if (inputMode === "edit") {
          const arr = educationArray.map((item) => {
            if (item.id === selectedId) {
              console.log(selectedItem);
              return { ...selectedItem, id: item.id };
            } else {
              return item;
            }
          });
          setEducationArray(arr);
        } else {
          const newItem = { ...selectedItem, id: uuidv4() };
          console.log(newItem);
          setEducationArray([...educationArray, newItem]);
        }
      } else {
        console.log("Cancel operation");
      }
      clearItem();
      formRef.current.close();
    } else {
      formRef.current.showModal();
    }
    setInputMode("add");
  }

  function handleEdit(id) {
    setInputMode("edit");
    setSelectedId(id);
    setSelectedItem(educationArray.find((item) => item.id === selectedId));
    formRef.current.showModal();
  }

  function handleDelete(id) {
    console.log(id);
    const arr = educationArray.filter((item) => item.id !== id);
    console.log("Filtered array : ");
    console.log(arr);
    setEducationArray(arr);
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
        {educationArray.map((item, index) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              number={index + 1}
              school={item.school}
              title={item.title}
              degree={item.degree}
              start={item.start}
              end={item.end}
              onEdit={handleEdit}
              onDelete={handleDelete}
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
