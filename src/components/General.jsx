import "../styles/General.css";
import Info from "./Info";

export default function General() {
  return (
    <div className="section-container">
      <h2 className="section-title">General</h2>
      <div className="inputs">
        <Info infoName={"Name"} type={"text"} key={0} />
        <Info infoName={"Email"} type={"email"} key={1} />
        <Info infoName={"Phone Number"} type={"tel"} key={2} />
      </div>
    </div>
  );
}
