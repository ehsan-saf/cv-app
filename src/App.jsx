import "./styles/sharedStyles.css";
import General from "./components/section/General";
import Education from "./components/section/Education";
import Experience from "./components/section/Experience";

function App() {
  return (
    <div className="page-container">
      <div className="resume-container">
        <General />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;
