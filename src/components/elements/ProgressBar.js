import React from "react";
import PropTypes from "prop-types";

var progress = {
  Advanced: 100,
  Intermediate: 66,
  Basic: 33
};

function ProgressBar(props) {
  return (
    <div>
      <span className="title is-5 is-spaced">{props.text}</span>
      <span className="subtitle is-6 skill-percentage">{props.level}</span>
      <progress
        className="progress is-success"
        value={progress[props.level]}
        max="100"
      >
        {progress[props.level]}%
      </progress>
    </div>
  );
}

ProgressBar.propTypes = {
    text: PropTypes.string,
    level: PropTypes.string,
};

export default ProgressBar;
