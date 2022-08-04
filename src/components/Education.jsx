import { useState, useId, useEffect } from "react";
import styles from "../styles/Components.css";

function Education({ setEducation, education, useId }) {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [since, setSince] = useState("");
  const [until, setUntil] = useState("");
  const id = useId;
  console.log(id)

  const handleSchool = (event) => {
    setSchool(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleSince = (event) => {
    setSince(event.target.value);
  };
  const handleUntil = (event) => {
    setUntil(event.target.value);
  };

  useEffect(() => {
    const newEducation = education.map((obj) => {
      if (obj.id === id) {
        return {
          school: school,
          title: title,
          since: since,
          until: until,
          id: id,
        };
      }
      return obj;
    });

    if (education.some((obj) => obj.id === id)) {
      setEducation(newEducation);
    } else {
      setEducation(
        education.concat({
          school: school,
          title: title,
          since: since,
          until: until,
          id: id,
        })
      );
    }
  }, [school, title, since, until]);

  return (
    <section className="section">
      <div>
        <input
          type="text"
          onChange={handleSchool}
          value={school}
          placeholder="School Name"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleTitle}
          value={title}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleSince}
          value={since}
          placeholder="Since"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleUntil}
          value={until}
          placeholder="Until"
        />
      </div>
    </section>
  );
}

function Button({ onClick }) {
  return (
    <button className="button" id="delete-ed" type="button" onClick={onClick}>
      Delete
    </button>
  );
}

function EducationSection({ setEducation, education }) {
  const [deleted, setDeleted] = useState(false);
  const id = useId();
  const deleteSection = () => setDeleted(true);

  useEffect(() => {
    if (deleted) {
      setEducation(
        education.filter((obj) => {
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
              <Education
                setEducation={setEducation}
                education={education}
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

export default EducationSection;
