import { Item, todoItems, dialog } from "./index.js";
import { showingItems } from "./showingItems.js";

export function createTodoItemFunc (event) {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

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
        todoItems.push(item);
        console.log(todoItems);
        showingItems();
    }

    event.preventDefault();
    dialog.close();
}