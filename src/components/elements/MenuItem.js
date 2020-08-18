import React from "react";
import PropTypes from "prop-types";
function MenuItem(props) {
  return (
    <a href={props.href} className="navbar-item is-unselectable">
      {props.text}
    </a>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
};

export default MenuItem;
