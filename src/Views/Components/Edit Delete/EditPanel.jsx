import React from "react";
import "./EditPanel.css";

export default (props) => {
    return(
        <div className="edit-panel">
            <button onClick={props.editClicked}>Edit</button>
            <button onClick={props.deleteClicked}>Delete</button>
        </div>
    );
}