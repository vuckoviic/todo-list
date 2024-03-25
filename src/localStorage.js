import { activeArray, allProjectArrays, allProjects, inboxArray, inbox } from "./projects";
import { displayedItems } from "./showingItems";
import { showingItems } from "./showingItems";

export function getValues() {

    console.log("Reading values...");

    const savedInboxArray = localStorage.getItem("inboxArray");
    const savedAllProjectArrays = localStorage.getItem("allProjectArrays");
    const savedAllProjects = localStorage.getItem("allProjects");

    inboxArray = JSON.parse(savedInboxArray);
    allProjectArrays = JSON.parse(savedAllProjectArrays);
    allProjects = JSON.parse(savedAllProjects);    

    console.log(inboxArray);
    console.log(allProjectArrays);
    console.log(allProjects);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~");

    // here goes logic which turns this information into real DOM elements

    inbox.classList.add("active-project");

    // for (let i = 0; i < allProjects.length; i++) {
    //     console.log(allProjects[i]);
    //     if (allProjects[i].classList.contains("active-project")) {
    //         activeArray = allProjectArrays[i];
    //     }
    // }

    for (let i = 0; i < inboxArray.length; i++) {
        for (let j = 0; j < inboxArray[i].length; j++) {
            inboxArray[i][j].displayed = false;
            console.log(inboxArray[i][j]);
            
        }
        console.log("displayedItems: " + displayedItems);
        displayedItems = 0;
        showingItems(inboxArray[i]);
    }
}

export function populateStorage() {

    console.log("Storage has been updated");

    let stringifiedInboxArray = JSON.stringify(inboxArray);
    let stringifiedAllProjects = JSON.stringify(allProjects);
    let stringifiedAllProjectArrays = JSON.stringify(allProjectArrays);

    console.log(stringifiedInboxArray);
    console.log(stringifiedAllProjects);
    console.log(stringifiedAllProjectArrays);

    localStorage.setItem("inboxArray", stringifiedInboxArray);
    localStorage.setItem("allProjects", stringifiedAllProjects);
    localStorage.setItem("allProjectArrays", stringifiedAllProjectArrays);
}
