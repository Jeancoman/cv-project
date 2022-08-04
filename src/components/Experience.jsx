import { useState, useId, useEffect } from "react";
import styles from "../styles/Components.css";

function Experience({ setExperience, experience, useId }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [task, setTask] = useState("");
  const [since, setSince] = useState("");
  const [until, setUntil] = useState("");
  const id = useId;
  console.log(id);

  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleTask = (event) => {
    setTask(event.target.value);
  };
  const handleSince = (event) => {
    setSince(event.target.value);
  };
  const handleUntil = (event) => {
    setUntil(event.target.value);
  };

  useEffect(() => {
    const newExperience = experience.map((obj) => {
      if (obj.id === id) {
        return {
          company: company,
          position: position,
          task: task,
          since: since,
          until: until,
          id: id,
        };
      }
      return obj;
    });

    if (experience.some((obj) => obj.id === id)) {
      setExperience(newExperience);
    } else {
      setExperience(
        experience.concat({
          company: company,
          position: position,
          task: task,
          since: since,
          until: until,
          id: id,
        })
      );
    }
  }, [company, position, task, since, until]);

  return (
    <section className="section">
      <div>
        <input placeholder="Company" onChange={handleCompany} value={company} />
      </div>
      <div>
        <input
          placeholder="Position"
          onChange={handlePosition}
          value={position}
        />
      </div>
      <div>
        <input placeholder="Main Task" onChange={handleTask} value={task} />
      </div>
      <div>
        <input
          placeholder="Worked since"
          onChange={handleSince}
          value={since}
        />
      </div>
      <div>
        <input
          placeholder="Worked until"
          onChange={handleUntil}
          value={until}
        />
      </div>
    </section>
  );
}

function Button({ onClick }) {
  return (
    <button className="button" id="delete-ex" type="button" onClick={onClick}>
      Delete
    </button>
  );
}

function ExperienceSection({ setExperience, experience }) {
  const [deleted, setDeleted] = useState(false);
  const id = useId();
  const deleteSection = () => setDeleted(true);

  useEffect(() => {
    if (deleted) {
      setExperience(
        experience.filter((obj) => {
          return obj.id !== id;
        })
      );
    }
  }, [deleted]);

  return (
    <>
      {(() => {
        if (deleted) {
          return null;
        } else {
          return (
            <>
              <Experience
                setExperience={setExperience}
                experience={experience}
                useId={id}
              />
              <Button onClick={deleteSection} />
            </>
          );
        }
      })()}
    </>
  );
}

export default ExperienceSection;
