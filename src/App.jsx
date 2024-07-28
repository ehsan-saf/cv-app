import { useState } from "react";
import "./styles/App.css";
import General from "./components/General";
import Education from "./components/Education";

function App() {
  return (
    <div className="page-container">
      <General />
      <Education />
    </div>
  );
}

export default App;
