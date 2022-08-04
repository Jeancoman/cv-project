import { useEffect, useState } from "react";
import General from "./components/General";
import EducationSection from "./components/Education";
import ExperienceSection from "./components/Experience";

import styles from "./styles/App.css";
import CVSection from "./components/CvSection";

function App() {
  const [general, setGeneral] = useState({});
  const [education, setNewEducation] = useState([]);
  const [experience, setNewExperience] = useState([]);
  const [educationCount, setEducationCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);

  console.log(experienceCount);
  console.log(education);
  console.log(experience);

  return (
    <>
      <form className="container">
        <General setGeneral={setGeneral} general={general} />
        <div className="section-title">Education</div>
        {Array(educationCount).fill(
          <EducationSection
            setEducation={setNewEducation}
            education={education}
          />
        )}
        <button
          className="button"
          id="add-ed"
          type="button"
          onClick={() => {
            setEducationCount(educationCount + 1);
          }}
        >
          Add
        </button>
        <div className="section-title">Experience</div>
        {Array(experienceCount).fill(
          <ExperienceSection
            setExperience={setNewExperience}
            experience={experience}
          />
        )}
        <button
          className="button"
          id="add-ex"
          type="button"
          onClick={() => {
            setExperienceCount(experienceCount + 1);
          }}
        >
          Add
        </button>
      </form>
      <CVSection
        general={general}
        education={education}
        experience={experience}
      />
    </>
  );
}

export default App;
