import React from "react";
import "./Contact.scss";
import EmailSvg from "./EmailSvg";
import GithubContactSvg from "./GithubContactSvg";
import LinkedInSvg from "./LinkedInSvg";
import { BrowserRouter, Link } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className="pf-contact-wrp" id="contact">
      <h4 className="section-heading">
        <span>Contact</span>
      </h4>
      <div>
        <ContactForm showForm={true}></ContactForm>
      </div>
      <div className="pf-contact-row">
        <BrowserRouter>
          <div className="pf-contact-col">
            <Link to="mailto:dikshitakasodariya26@gmail.com" target="_blank">
              <EmailSvg />
            </Link>
          </div>
          <div className="pf-contact-col">
            <Link to="https://github.com/dikshitak/" target="_blank">
              <GithubContactSvg />
            </Link>
          </div>
          <div className="pf-contact-col">
            <Link
              to="https://www.linkedin.com/in/dikshita-kashodriya/"
              target="_blank"
            >
              <LinkedInSvg />
            </Link>
          </div>
        </BrowserRouter>
      </div>
    </section>
  );
}
