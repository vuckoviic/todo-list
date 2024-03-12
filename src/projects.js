import { projects, newProjectButton } from "./index.js";
import { clearContent } from "./clearContent.js";

const inbox = document.getElementById("inbox");
let inboxArray = [];

let allProjects = [];
allProjects.push(inbox);

let allProjectArrays = [];
allProjectArrays.push(inboxArray);
export let activeArray;

inbox.classList.add("active-project");
inbox.addEventListener("click", ()=> {
                
    clearContent();
    
    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].classList.remove("active-project");
    }

    inboxArray.push("JA SAM POPIO");

    inbox.classList.add("active-project");

    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].classList.contains("active-project")) {
            activeArray = allProjectArrays[i]; 
            console.log("Active array is: " + activeArray.length);
        }
    }

    // showingItems();

});


export function createNewProject() {

    const project = document.createElement("button");
    const projectNameInput = document.createElement("input");
    const projectSave = document.createElement("button");
    const projectExit = document.createElement("button");
    
    projectSave.innerText = "Save";
    projectExit.innerText = "Exit";

    project.style.padding = "3px";

    projectSave.style.backgroundColor = "white";
    projectSave.style.maxHeight = "15px";
    projectSave.style.maxWidth = "15px";
    projectSave.style.fontSize = "1em";
    projectSave.style.color = "navy";
    projectSave.style.marginTop = "5px";

    projectExit.style.backgroundColor = "white";
    projectExit.style.maxHeight = "15px";
    projectExit.style.maxWidth = "15px";
    projectExit.style.fontSize = "1em";
    projectExit.style.color = "navy";
    projectExit.style.marginTop = "5px";

    project.appendChild(projectNameInput);
    project.appendChild(projectExit);
    project.appendChild(projectSave);

    projectSave.addEventListener("click", () => {
        
        let name = projectNameInput.value;
        
        if (name.length < 1) {
            alert("Please Insert Name For Your Project.");
        }

        else {
            project.innerText = name;
            name = new Array();
            allProjectArrays.push(name);
    
            project.addEventListener("click", ()=> {
                
                clearContent();
                
                for (let i = 0; i < allProjects.length; i++) {
                    allProjects[i].classList.remove("active-project");
                }

                project.classList.add("active-project");

                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("active-project")) {
                        activeArray = allProjectArrays[i]; 
                        console.log("Active array is: " + activeArray.length);
                    }
                }

                // showingItems();
            
            });
        }

    });

    projectExit.addEventListener("click", () => {
        projects.removeChild(project);
    })

    projects.removeChild(newProjectButton);
    projects.appendChild(project);
    projects.appendChild(newProjectButton);

    allProjects.push(project);



}