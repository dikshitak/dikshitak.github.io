import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

export default function ContactForm({ showForm = false, closeContactForm }) {
  const [isForm, setForm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setShowResult(false);

    const formObject = {
      from_name: name,
      email,
      message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formObject,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then((response) => {
        !showForm && setForm(false);
        setShowResult(true);
        if (showForm) {
          setName("");
          setEmail("");
          setMessage("");
        }
      });
  };

  return (
    <div className="chat-message contact-form-wrp">
      {isForm && (
        <form onSubmit={sendEmail}>
          <label>Name*</label>
          <input
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email*</label>
          <input
            type="email"
            name="from_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      )}
      {showResult && (
        <React.Fragment>
          <h6>Your request is currently being processed</h6>
          <div className="thank-you">
            Thank you for your interest in my work. I'll contact you just in a
            few days. Stay tuned and see you soon.
          </div>
        </React.Fragment>
      )}
      {closeContactForm && <p onClick={closeContactForm}>Go back</p>}
    </div>
  );
}
