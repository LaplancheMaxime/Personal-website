import React from "react";
import TimelineItem from "./TimelineItem";
import Resume from "../../resume.json";

function EducationTimeline() {
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
            {Resume.education
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
                            Resume.education
                                .filter(education => new Date(education.startDate).getFullYear() === year)
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
                                            company={item.institution}
                                            summary={item.summary}
                                            position={item.area + " - " + item.studyType}
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

export default EducationTimeline;