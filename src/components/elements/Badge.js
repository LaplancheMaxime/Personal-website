import React from "react";
import PropTypes from "prop-types";


function Badge(props) {
  const faIcon = "fas fa-1x " + props.faIcon;
  return (
    <div className="control">
      <div className="tags has-addons">
        <span className="tag is-dark">{props.text}</span>
        <span className="tag is-success">
          <i className={faIcon}></i>
        </span>
      </div>
    </div>
  );
}

Badge.propTypes = {
    faIcon: PropTypes.string,
    text: PropTypes.string
};

export default Badge;
