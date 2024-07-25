import { useState } from "react";
import "./styles/App.css";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Info infoName={"Name"} type={"text"} />
    </>
  );
}

export default App;
