import { useState } from "react";
import "./styles/App.css";
import Info from "./components/Info";
import Section from "./components/Section";

function App() {
  return (
    <div className="page-container">
      <Section
        title={"General Info"}
        inputs={[
          <Info infoName={"Name"} type={"text"} key={0} />,
          <Info infoName={"Email"} type={"email"} key={1} />,
          <Info infoName={"Phone Number"} type={"tel"} key={2} />,
        ]}
      />
      <Section title={"Education"} />
      <Section title={"Experience"} />
    </div>
  );
}

export default App;
