import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
          {console.log(props.endDate)}
          {props.endDate === 'Invalid Date' &&
            <p className="heading">{props.date} - now </p>
          }
          {props.endDate !== 'Invalid Date' &&
          <p className="heading">{props.date} - {props.endDate}  </p>
          }

        <h1 className="title is-4">{props.company}</h1>
        <p style={{marginTop: "-25px", marginBottom: "20px"}}>{props.position}</p>
        <p style={{ maxWidth: "25em" }}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
