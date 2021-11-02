import bugModel from "../Models/bugModel";

export function retrieveBugs(){
    let data = {};

    data.push(new bugModel({
        _id:34343234,
        name:"Crash on load",
        details: "Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0.1",
        assigned: "Jaineel Upadhyay",
        creator: "Joe Biden",
        priority: 1,
        time: "11:32"
    }));
    data.push(new bugModel({
        _id:34343234,
        name:"Crash on load",
        details: "Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0.1",
        assigned: "Jaineel Upadhyay",
        creator: "Joe Biden",
        priority: 1,
        time: "11:32"
    }));

    let sortedData = data.sort((a,b) => {
        return a.priority === b.priority
    });

    return sortedData;
}