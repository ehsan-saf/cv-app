import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import "../styles/Experience.css";
import SectionTop from "./SectionTop";

function Item({
  id,
  number,
  company,
  title,
  responsibility,
  start,
  end,
  onEdit,
  onDelete,
}) {
  return (
    <div className="job-item">
      <div className="job-number">{number}</div>
      <div className="job-info">
        <h3 className="job-company">{company}</h3>
        <p>{title}</p>
        <p>{responsibility}</p>
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
          label={"Company"}
          type={"text"}
          name={"company"}
          onChange={onChange}
          value={obj.company}
        />
        <Input
          label={"Title"}
          type={"text"}
          name={"title"}
          onChange={onChange}
          value={obj.title}
        />
        <label className="form-label">
          Main responsibilites
          <textarea
            name="responsibility"
            className="job-textarea"
            onChange={onChange}
            value={obj.responsibility}
          ></textarea>
        </label>
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

export default function Experience() {
  const [selectedItem, setSelectedItem] = useState({
    company: "",
    title: "",
    responsibility: "",
    start: "",
    end: "",
    id: "",
  });
  const [jobArray, setJobArray] = useState([]);
  const [inputMode, setInputMode] = useState("add");
  const [selectedId, setSelectedId] = useState("");
  const formRef = useRef(null);

  const clearItem = () => {
    setSelectedItem({
      company: "",
      title: "",
      responsibility: "",
      start: "",
      end: "",
      id: "",
    });
  };

  function handleOpenClose(isSave) {
    if (formRef.current.open) {
      if (isSave) {
        if (inputMode === "edit") {
          const arr = jobArray.map((item) => {
            if (item.id === selectedId) {
              return { ...selectedItem, id: item.id };
            } else {
              return item;
            }
          });
          setJobArray(arr);
        } else {
          const newItem = { ...selectedItem, id: uuidv4() };
          setJobArray([...jobArray, newItem]);
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
    setSelectedItem(jobArray.find((item) => item.id === id));
    formRef.current.showModal();
  }

  function handleDelete(id) {
    const arr = jobArray.filter((item) => item.id !== id);
    setJobArray(arr);
  }

  function handleChange(e) {
    setSelectedItem({ ...selectedItem, [e.target.name]: e.target.value });
  }

  return (
    <>
      <SectionTop title="Experience" onClick={handleOpenClose} />
      <div className="job-container">
        {jobArray.map((item, index) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              number={index + 1}
              company={item.company}
              title={item.title}
              responsibility={item.responsibility}
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
