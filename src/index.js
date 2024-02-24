import { showingItems } from "./showingItems.js";
import { createTodoItemFunc } from  "./createTodoItem.js";

const dialog = document.getElementsByTagName("dialog")[0];
export { dialog };
const addItem = document.getElementById("addItem");
const closeDialog = document.getElementById("closeDialog");

addItem.addEventListener('click', ()=> {
    dialog.showModal();
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
