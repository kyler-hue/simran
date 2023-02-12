import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Reach Out To Me On </h2>
        <br>
        </br>
        <br>
        </br>
        <a href="https://www.instagram.com/simranzworld1/"><h2>Instagram</h2></a>
        <br>
        </br>
        <a href = "mailto: abc@example.com"><span type='email'><h2>Email</h2></span></a>
      </div>
    </div>
  );
}
