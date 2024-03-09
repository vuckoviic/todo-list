import { showingItems } from "./showingItems.js";
import { createTodoItemFunc } from  "./createTodoItem.js";
import { clearContent } from "./clearContent.js";
import { createNewProject } from "./projects.js";

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

export const newProjectButton = document.getElementById("newProject");
export const projects = document.getElementById("projects");

newProjectButton.addEventListener("click", createNewProject)