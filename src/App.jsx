import { useState } from "react";
import "./styles/App.css";
import Info from "./components/Info";
import General from "./components/General";
import Education from "./components/Education";

function App() {
  return (
    <div className="page-container">
      <General
        inputs={[
          <Info infoName={"Name"} type={"text"} key={0} />,
          <Info infoName={"Email"} type={"email"} key={1} />,
          <Info infoName={"Phone Number"} type={"tel"} key={2} />,
        ]}
      />
      <Education />
    </div>
  );
}

export default App;
