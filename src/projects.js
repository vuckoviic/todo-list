import { projects, newProjectButton, addItem, informationalP } from "./index.js";
import { clearContent } from "./clearContent.js";
import { displayedItems, showingItems, showItem } from "./showingItems.js";
import { index } from "./editShowItem.js";
import { getValues, populateStorage } from "./localStorage.js";

export let inbox;
inbox = document.getElementById("inbox");
export let inboxArray = [];

export let allProjects = [];
allProjects.push(inbox);

export let allProjectArrays = [];
allProjectArrays.push(inboxArray);
export let activeArray;

activeArray = inboxArray;

const content = document.getElementById("content");

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
            populateStorage();
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

    console.log(content.children.length);

    for (const child of content.children) {
        child.firstChild.disabled = true;
    }

    // getValues();


});

export function createNewProject() {

    const projectDiv = document.createElement("div");
    const project = document.createElement("button");
    
    const projectNameInput = document.createElement("input");
    const projectSave = document.createElement("button");
    const projectExit = document.createElement("button");
    
    projectSave.innerText = "Save";
    projectExit.innerText = "Exit";

    project.style.padding = "9px";

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

    projectDiv.appendChild(project);
    
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
    
            project.addEventListener("click", (e)=> {
                
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

            const refreshProject = document.createElement("button");
            refreshProject.innerText = "↻";
            refreshProject.addEventListener('click', () => {
                projectDiv.innerHTML = "";
                projectDiv.appendChild(project);
                
                for (let i = 0; i < name.length; i++) {
                    const projectItem = document.createElement("p");
                    projectItem.innerText = `${name[i].title} | ${name[i].dueDate}`;
                    
                    if (content.firstChild.firstChild.checked == true) {
                        projectItem.style.backgroundColor = "green";
                    }

                    else {
                        if (name[i].priority == "low") {
                            projectItem.style.backgroundColor = "lightblue";
                        }
                
                        else if (name[i].priority == "normal") {
                            projectItem.style.backgroundColor = "rgb(51, 126, 245)";
                        }
                
                        else {
                            projectItem.style.backgroundColor = "red";
                        }
                    }

                    projectItem.style.padding = "2px";
                    projectItem.style.marginTop = "3px";

                    projectDiv.appendChild(projectItem);
                    
                }
            })

            refreshProject.setAttribute("id", "refresh-project");

            project.appendChild(refreshProject);

            project.classList.add("project");

            populateStorage();

        }

    });

    projectExit.addEventListener("click", () => {
        projectDiv.removeChild(project);
        projects.removeChild(projectDiv);
    })

    projects.removeChild(newProjectButton);
    projects.appendChild(projectDiv);
    projects.appendChild(newProjectButton);

    allProjects.push(project);

}