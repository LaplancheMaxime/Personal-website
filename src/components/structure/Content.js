import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from '../sections/Education';
import ScrollToTop from "../elements/ScrollToTop";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <ScrollToTop/>
    </main>
  );
}

export default Content;
