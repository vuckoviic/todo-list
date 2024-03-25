import { activeArray, allProjectArrays, allProjects } from "./projects";

export function getValues() {

    console.log("Reading values...");

    const savedActiveArray = localStorage.getItem("activeArray");
    const savedAllProjectArrays = localStorage.getItem("allProjectArrays");
    const savedAllProjects = localStorage.getItem("allProjects");

    if (savedActiveArray.length > 0 && savedAllProjectArrays.length > 1 && savedAllProjects > 1) {
        activeArray = JSON.parse(savedActiveArray);
        allProjectArrays = JSON.parse(savedAllProjectArrays);
        allProjects = JSON.parse(savedAllProjects);    
    }

    console.log(activeArray);
    console.log(allProjectArrays);
    console.log(allProjects);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~");
}

export function populateStorage() {

    console.log("Storage has been updated");

    let stringifiedActiveArray = JSON.stringify(activeArray);
    let stringifiedAllProjects = JSON.stringify(allProjects);
    let stringifiedAllProjectArrays = JSON.stringify(allProjectArrays);

    console.log(stringifiedActiveArray);
    console.log(stringifiedAllProjects);
    console.log(stringifiedAllProjectArrays);

    localStorage.setItem("activeArray", stringifiedActiveArray);
    localStorage.setItem("allProjects", stringifiedAllProjects);
    localStorage.setItem("allProjectArrays", stringifiedAllProjectArrays);
}
