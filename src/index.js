import { showingItems } from "./showingItems.js";
import { createTodoItemFunc } from  "./createTodoItem.js";
import { clearContent } from "./clearContent.js";
import { activeArray, createNewProject } from "./projects.js";

const dialog = document.getElementsByTagName("dialog")[0];
export { dialog };
export const addItem = document.getElementById("addItem");
addItem.disabled = true;

if (addItem.disabled == true) {
    addItem.style.backgroundColor = "grey";
}

else {
    addItem.style.backgroundColor = "navy";
}

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

const createTodoItem = document.getElementById("createTodoItem");

createTodoItem.addEventListener('click', () => {
    createTodoItemFunc(activeArray);
});

export const newProjectButton = document.getElementById("newProject");
export const projects = document.getElementById("projects");

newProjectButton.addEventListener("click", createNewProject);

const content = document.getElementById("content");

export const informationalP = document.createElement("p");
informationalP.innerHTML = "The inbox section is for <b>review only</b>. You can't create, edit or check todo items here, you need to create separate project for that.";
informationalP.style.fontStyle = "italic";
informationalP.style.position = "absolute";
informationalP.style.bottom = "5px";
content.style.position = "relative";
content.appendChild(informationalP);