import "./styles/sharedStyles.css";
import General from "./components/section/General";
import Education from "./components/section/Education";
import Experience from "./components/section/Experience";
import Settings from "./components/settings/Settings";

function App() {
  return (
    <div className="page-container">
      <Settings />
      <div className="resume-container">
        <General />
        <Education />
        <Experience />
      </div>
    </div>
  );
}

export default App;
