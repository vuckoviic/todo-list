import { showingItems } from "./showingItems.js";
import { createTodoItemFunc } from  "./createTodoItem.js";

const dialog = document.getElementsByTagName("dialog")[0];
export { dialog };
const addItem = document.getElementById("addItem");
const closeDialog = document.getElementById("closeDialog");

const form = document.getElementsByTagName("form")[0];

addItem.addEventListener('click', ()=> {
    dialog.showModal();
    form.reset();
});

closeDialog.addEventListener('click', ()=> {
    dialog.close();
});

export class Item {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    };
}

export let todoItems = [];

const createTodoItem = document.getElementById("createTodoItem");

createTodoItem.addEventListener('click', createTodoItemFunc);

export function clearContent() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

const newProjectButton = document.getElementById("newProject");
const projects = document.getElementById("projects");

newProjectButton.addEventListener("click", () => {
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
        project.innerText = projectNameInput.value;
    });

    projectExit.addEventListener("click", () => {
        projects.removeChild(project);
    })

    projects.removeChild(newProjectButton);
    projects.appendChild(project);
    projects.appendChild(newProjectButton);
});