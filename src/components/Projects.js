import React from "react";
import "./Projects.scss";
import ProjectsGit from "./ProjectsGit";
import ProjectsLink from "./ProjectsLink";

export default function Projects() {
  return (
    <section className="pf-projects-wrp" id="projects">
      <h4 className="section-heading">
        <span>Projects</span>
      </h4>
      <div className="pf-projects">
        <div className="pj-card">
          <div className="pj-content-wrp">
            <h6>Web App - REACT</h6>
            <h4>The Untamed Haven</h4>
            <p>
              🏨 Custom-Built Hotel Management System for a boutique hotel with
              8 luxurious wooden cabins. 🏡✨
            </p>
            <p>
              📅 Seamlessly manage bookings, 🛎️ check in guests, and streamline
              hotel operations – all in one place.
            </p>
            <p>
              🛠️ Built from the ground up, this internal application efficiently
              handles reservations, guest details, and cabin availability for a
              smooth hotel experience.
            </p>
            <div className="pj-links-wrp">
              <a
                href="https://the-untamed-haven.netlify.app/"
                target="_blank"
                className="pj-redirection pj-link"
                rel="noopener noreferrer"
              >
                <ProjectsLink />
              </a>
              <a
                href="https://github.com/dikshitak/the-untamed-haven"
                target="_blank"
                className="pj-git pj-link"
                rel="noreferrer"
              >
                <ProjectsGit />
              </a>
            </div>
          </div>
        </div>
        <div className="pj-card">
          <div className="pj-content-wrp">
            <h6>Web App - NextJS</h6>
            <h4>The Untamed Haven - Customer Website</h4>
            <p>
              🔍 Explore the boutique hotel, browse available cabins, and make
              seamless reservations with ease.
            </p>
            <p>
              🛎️ Guests can manage their profiles while enjoying a real-time
              booking experience thanks to seamless integration with the hotel's
              internal system.
            </p>
            <p>
              🔄 Automatic updates ensure real-time accuracy by syncing data
              across the management app and website via a shared database & API.
            </p>
            <div className="pj-links-wrp">
              <a
                href="https://the-untamed-haven-app.netlify.app/"
                target="_blank"
                className="pj-redirection pj-link"
                rel="noopener noreferrer"
              >
                <ProjectsLink />
              </a>
              <a
                href="https://github.com/dikshitak/the-untamed-haven-website"
                target="_blank"
                className="pj-git pj-link"
                rel="noreferrer"
              >
                <ProjectsGit />
              </a>
            </div>
          </div>
        </div>
        <div className="pj-card">
          <div className="pj-content-wrp">
            <h6>Web App - REACT</h6>
            <h4>Wordle Clone</h4>
            <p>
              🚀 A recreation of the popular word game by The New York Times—now
              with unlimited gameplay and no daily word limits!
            </p>
            <p>💡 Use hints to crack tricky words effortlessly.</p>
            <p>
              📖 Expand your vocabulary with built-in word definitions after
              each puzzle.
            </p>
            <p>
              🎯 Perfect for word game enthusiasts looking to sharpen their
              skills and have fun!
            </p>
            <div className="pj-links-wrp">
              <a
                href="https://dikshitak.github.io/wordle-clone/"
                target="_blank"
                className="pj-redirection pj-link"
                rel="noopener noreferrer"
              >
                <ProjectsLink />
              </a>
              <a
                href="https://github.com/dikshitak/wordle-clone"
                target="_blank"
                className="pj-git pj-link"
                rel="noreferrer"
              >
                <ProjectsGit />
              </a>
            </div>
          </div>
        </div>
        <div className="pj-card">
          <div className="pj-content-wrp">
            <h6>Web App - REACT</h6>
            <h4>Photo Editor</h4>
            <p>
              🚀 A user-friendly tool designed to make image creation seamless
              and fun!
            </p>
            <p>
              📌 Choose from premade templates or upload your own images/logos.
            </p>
            <p>✏️ Edit text and customize designs to match your vision.</p>
            <p>
              📥 Download in multiple sizes—perfect for social media, marketing,
              or personal projects!
            </p>
            <div className="pj-links-wrp">
              <a
                href="https://dikshitak.github.io/photo-editor-web-app/"
                target="_blank"
                className="pj-redirection pj-link"
                rel="noreferrer"
              >
                <ProjectsLink />
              </a>
              <a
                href="https://github.com/dikshitak/photo-editor-web-app"
                target="_blank"
                className="pj-git pj-link"
                rel="noreferrer"
              >
                <ProjectsGit />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
