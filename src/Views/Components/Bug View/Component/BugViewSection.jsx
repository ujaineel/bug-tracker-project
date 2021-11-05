import React from "react";
import "./BugViewSection.css";

export default (props) => {
    return(
        <div className="view-section">
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    );
}