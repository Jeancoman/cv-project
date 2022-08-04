import styles from "../styles/Components.css";
import { useState, useEffect, useId } from "react";

function General({ setGeneral, general }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
    sessionStorage.setItem("firstName", event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
    sessionStorage.setItem("lastName", event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
    sessionStorage.setItem("title", event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    sessionStorage.setItem("email", event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
    sessionStorage.setItem("phone", event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
    sessionStorage.setItem("description", event.target.value);
  };

  useEffect(() => {
    setGeneral({
      name: `${firstName != null ? firstName : ""} ${lastName != null ? lastName : ""}`,
      title: title != null ? title : "",
      email: email,
      phone: phone,
      description: description != null ? description : "",
    });
  }, [firstName, lastName, title, email, phone, description]);

  useEffect(() => {
    setFirstName(sessionStorage.getItem("firstName"));
    setLastName(sessionStorage.getItem("lastName"));
    setTitle(sessionStorage.getItem("title"));
    setEmail(sessionStorage.getItem("email"));
    setPhone(sessionStorage.getItem("phone"));
    setDescription(sessionStorage.getItem("description"));
  });

  return (
    <>
      <div className="section-title">General Information</div>
      <section className="section">
        <div>
          <input
            type="text"
            onChange={handleFirstName}
            value={firstName}
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={handleLastName}
            value={lastName}
            placeholder="Last Name"
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
            type="email"
            onChange={handleEmail}
            value={email}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="tel"
            onChange={handlePhone}
            value={phone}
            placeholder="Phone Number"
          />
        </div>
        <div>
          <textarea
            onChange={handleDescription}
            value={description}
            placeholder="Description"
          />
        </div>
      </section>
    </>
  );
}

export default General;
