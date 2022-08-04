import styles from "../styles/Other.css";

function Experience({ since, until, position, task, company, id }) {
  return (
    <div className="experience-container" key={id}>
      <p className="date">
        {since} - {until}
      </p>
      <p className="position">{position}</p>
      <p className="task">{task}</p>
      <p className="company">{company}</p>
    </div>
  );
}

function Experiences({ experiences }) {
  return (
    <>
      {experiences.map((experience) => {
        return (
          <Experience
            since={experience.since}
            until={experience.until}
            position={experience.position}
            task={experience.task}
            company={experience.company}
            id={experience.id}
          />
        );
      })}
    </>
  );
}

function Education({ school, title, since, until, id }) {
  return (
    <div className="education-container" key={id}>
      <p className="date">{since} - {until}</p>
      <p className="school">{school}</p>
      <p className="title">{title}</p>
    </div>
  );
}

function Educations({ educations }) {
  return (
    <>
      {educations.map((education) => {
        return (
          <Education
            school={education.school}
            title={education.title}
            since={education.since}
            until={education.until}
            id={education.id}
          />
        );
      })}
    </>
  );
}

function CVSection({ general, experience, education, setRender }) {
  const editClick = () => {
    setRender({ toRender: false });
  };
  
  return (
    <div id="cv-container">
      <div id="upper-content">
        <h1>{general.name}</h1>
        <h2>{general.title}</h2>
      </div>
      <div id="left-content">
        <section id="description">
          <h3>Description</h3>
          <hr />
          <p className="description">{general.description}</p>
        </section>
        <section id="education">
          <h3>Education</h3>
          <hr />
          <Educations educations={education} />
        </section>
        <section id="experience">
          <h3>Experience</h3>
          <hr />
          <Experiences experiences={experience} />
        </section>
      </div>
      <div id="right-content">
        <h3>Personal Details</h3>
        <hr />
        <div className="personal">
          <p className="phone-title">Phone Number</p>
          <p className="phone">{general.phone}</p>
          <p className="email-title">Email Address</p>
          <p className="email">{general.email}</p>
        </div>
      </div>
    </div>
  );
}

export default CVSection;
