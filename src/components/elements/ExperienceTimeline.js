import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function ExperienceTimeline() {
    let years = [];
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.work
        .map(item => {
          return new Date(item.startDate).getFullYear();
        })
        .map((year, i) => {
            let content = [];
            if (years.indexOf(year) === -1) {
                years.push(year);

                content.push(
                    <header key={i} className="timeline-header">
                        <span className="tag is-success">{year}</span>
                    </header>
                );
                content.push(
                    Resume.work
                        .filter(work => new Date(work.startDate).getFullYear() === year)
                        .map((item, j) => {
                            return (
                                <TimelineItem
                                    key={j}
                                    date={new Date(item.startDate).toLocaleString("en-UK", {
                                        month: "long",
                                        year: "numeric"
                                    })}
                                    endDate={new Date(item.endDate).toLocaleString("en-UK", {
                                        month: "long",
                                        year: "numeric"
                                    })}
                                    company={item.company}
                                    summary={item.summary}
                                    position={item.position}
                                    website={item.website}
                                />
                            );
                        })
                );
            }
            return content;
        })}
    </div>
  );
}

export default ExperienceTimeline;