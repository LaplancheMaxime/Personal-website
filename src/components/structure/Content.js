import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from '../sections/Education';
import ContactMe from "../sections/ContactMe";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      {/*<Articles />*/}
      <ContactMe/>
    </main>
  );
}

export default Content;
