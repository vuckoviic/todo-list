import { projects, newProjectButton, addItem, informationalP } from "./index.js";
import { clearContent } from "./clearContent.js";
import { displayedItems, showingItems, showItem } from "./showingItems.js";

const inbox = document.getElementById("inbox");
export let inboxArray = [];

let allProjects = [];
allProjects.push(inbox);

let allProjectArrays = [];
allProjectArrays.push(inboxArray);
export let activeArray;

activeArray = inboxArray;

inbox.classList.add("active-project");
inbox.addEventListener("click", ()=> {
                
    clearContent();

    addItem.disabled = true;
    addItem.style.backgroundColor = "grey";
    
    for (let i = 0; i < allProjects.length; i++) {
        allProjects[i].classList.remove("active-project");
        allProjects[i].displayed = false;
        displayedItems = 0;
    }

    inbox.classList.add("active-project");

    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].classList.contains("active-project")) {
            activeArray = allProjectArrays[i];
        }
    }

    for (let i = 0; i < inboxArray.length; i++) {
        for (let j = 0; j < inboxArray[i].length; j++) {
            inboxArray[i][j].displayed = false;
            console.log(inboxArray[i][j]);
            
        }
        console.log("displayedItems: " + displayedItems);
        displayedItems = 0;
        showingItems(inboxArray[i]);
    }
    
    content.appendChild(informationalP);
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
            inboxArray.push(name);
    
            project.addEventListener("click", ()=> {
                
                clearContent();
                
                addItem.disabled = false;
                addItem.style.backgroundColor = "navy";

                for (let i = 0; i < allProjects.length; i++) {
                    allProjects[i].classList.remove("active-project");
                    allProjects[i].displayed = false;
                    displayedItems = 0;
                }

                project.classList.add("active-project");

                for (let i = 0; i < allProjects.length; i++) {
                    if (allProjects[i].classList.contains("active-project")) {
                        activeArray = allProjectArrays[i];
                    }
                }

                showingItems(activeArray);
            
            });

            // const deleteProject = document.createElement("button");
            // deleteProject.innerText = "Delete Project";

            // project.style.display = "flex";
            // project.style.flexDirection = "column";
            // project.style.justifyContent = "center";
            // project.style.alignItems = "center";

            // deleteProject.style.backgroundColor = "white";
            // deleteProject.style.maxHeight = "15px";
            // deleteProject.style.maxWidth = "15px";
            // deleteProject.style.fontSize = "1em";
            // deleteProject.style.color = "navy";
            // deleteProject.style.marginTop = "5px";

            // deleteProject.addEventListener("click", (e) => {
            //     projects.removeChild(project);
            //     allProjectArrays.pop(name);
            //     inboxArray.pop(name);
            //     console.log(allProjects);
            //     console.log(allProjectArrays);
            // })
            
            // project.appendChild(deleteProject);
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