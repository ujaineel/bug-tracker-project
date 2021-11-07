import React, {useState} from "react";
import "./BugView.css";
import bug from "../../../Models/bugModel";
import BugViewSection from "./Component/BugViewSection";
import bugModel from "../../../Models/bugModel";
import {useDispatch} from "react-redux";
import {markComplete} from "../../../Controllers/Redux/bugSlice";
import EditPanel from "../Edit Delete/EditPanel";
import EditBug from "../Bug Create/bugForm.jsx";

export default (props) => {
    const dispatch = useDispatch();

    const bug_info = new bugModel(props.bug);

    const [displayEdit, setDisplayEdit] = useState(false);

    function editClicked(){
        setDisplayEdit(!displayEdit);
    }

    function deleteClicked(){
        
    }

    return(
        <>
        <div className="bug-view">
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked} />
            <button onClick={props.clicked} className="close-btn">Close</button>
            <h1>{props.bug.name}</h1>
            <BugViewSection title="Details" info={bug_info.details} />
            <BugViewSection title="Steps" info={bug_info.steps} />
            <BugViewSection title="Priority" info={bug_info.priority} />
            <BugViewSection title="Creator" info={bug_info.creator} />
            <BugViewSection title="App Version" info={bug_info.version} />
            <BugViewSection title="Time Created" info={bug_info.time} />
            <BugViewSection title="Assigned To" info={bug_info.assigned} />
            <button onClick={() => {dispatch(markComplete())}}>Mark Complete</button>
        </div>  
        {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked} />}
        </>
    );
}