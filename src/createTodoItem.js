import { Item, dialog } from "./index.js";
import { activeArray } from "./projects.js";
import { showingItems } from "./showingItems.js";

export let priority;

export function createTodoItemFunc (activeArray) {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    priority = document.getElementById("priority").value;

    if (title.length < 1) {
        alert("Please Insert a Title.")
    }

    else if (description.length < 1) {
        alert("Please Insert a Description.")
    }

    else if (dueDate === "") {
        alert("Please Choose Your Due Date.")
    }

    else {
        const item = new Item(title, description, dueDate, priority);
        console.log(item);
        console.log(activeArray);
        activeArray.push(item);
        showingItems(activeArray);
        dialog.close();
    }


}