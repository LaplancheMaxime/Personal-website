import React from "react";
import PropTypes from "prop-types";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
          {props.endDate === 'Invalid Date' &&
            <p className="heading">{props.date} - now </p>
          }
          {props.endDate !== 'Invalid Date' &&
          <p className="heading">{props.date} - {props.endDate}  </p>
          }

        <h1 className="title is-4">{props.company}</h1>
        <p style={{marginTop: "-25px", marginBottom: "20px"}}>
          {props.position}<br/> {props.website !== "" &&
            <span><br /><a href={props.website} >{props.website} </a></span>
          }
          </p>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
    endDate: PropTypes.string,
    date: PropTypes.string,
    company: PropTypes.string,
    position: PropTypes.string,
    summary: PropTypes.string,
    website: PropTypes.string,
};

export default TimelineItem;
