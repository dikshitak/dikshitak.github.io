import React from "react";
import "./Skills.scss";
import HtmlSvg from "./HtmlSvg";
import CssSvg from "./CssSvg";
import NextSvg from "./NextSvg";
import ReactSvg from "./ReactSvg";
import TailwindSvg from "./TailwindSvg";
import JavaScriptSvg from "./JavaScriptSvg";
import MaterialUISvg from "./MaterialUISvg";
import GithubSvg from "./GithubSvg";
import TypeScriptSvg from "./TypeScriptSvg";
import ReduxSvg from "./ReduxSvg";

export default function Skills() {
  return (
    <section className="pf-skills-wrp" id="skills">
      <h4 className="section-heading">
        <span>Skills</span>
      </h4>
      <div className="pf-skills-row">
        <div className="pf-skills-col">
          <div className="card-front">
            <HtmlSvg />
          </div>
          <div className="card-back">
            <span>HTML</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <CssSvg />
          </div>
          <div className="card-back">
            <span>CSS</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <JavaScriptSvg />
          </div>
          <div className="card-back">
            <span>JavaScript</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <ReactSvg />
          </div>
          <div className="card-back">
            <span>React</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <ReduxSvg />
          </div>
          <div className="card-back">
            <span>Redux</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <TypeScriptSvg />
          </div>
          <div className="card-back">
            <span>TypeScript</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <NextSvg />
          </div>
          <div className="card-back">
            <span>NextJS</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <MaterialUISvg />
          </div>
          <div className="card-back">
            <span>MaterialUI</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <TailwindSvg />
          </div>
          <div className="card-back">
            <span>TailwindCss</span>
          </div>
        </div>
        <div className="pf-skills-col">
          <div className="card-front">
            <GithubSvg />
          </div>
          <div className="card-back">
            <span>Github</span>
          </div>
        </div>
      </div>
    </section>
  );
}
