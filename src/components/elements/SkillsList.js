import React from "react";
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";
import Resume from "../../resume";

function SkillsList(props) {
  const skills = props.skills;
  return <ul className="skill-list">{buildSkills(skills)}</ul>;
}

function buildSkills(skills) {
  let progressBars = [];
  let counter = 0;
  Object.entries(skills).forEach(([key, value]) => {
    progressBars.push(
      <li key={counter}>
        <ProgressBar key={counter} text={key} level={value} />
      </li>
    );
    counter++;
  });
  return progressBars;
}

SkillsList.propTypes = {
  skills: PropTypes.objectOf(Resume.skills)
};

export default SkillsList;
