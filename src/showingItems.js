import { checkCheckbox } from "./checkCheckbox.js";
import { priority } from "./createTodoItem.js";
import { todoItems } from "./index.js";
import { settingPriority } from "./settingPriority.js";

const content = document.getElementById("content");

export let showItem;

export function showingItems() {
    showItem = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    const showTitle = document.createElement("div");
    const showDescription = document.createElement("div");
    const showDueDate = document.createElement("div");
    showTitle.innerHTML ="<h3>" + todoItems[(todoItems.length-1)].title + "</h3>";
    showDescription.innerHTML ="<p>" + todoItems[(todoItems.length-1)].description + "</p>";
    showDueDate.innerHTML ="<p>" + todoItems[(todoItems.length-1)].dueDate + "</p>";

    settingPriority();

    showItem.appendChild(checkbox);
    showItem.appendChild(showTitle);
    showItem.appendChild(showDescription);
    showItem.appendChild(showDueDate);
    showItem.classList.add("showItemDiv");
    showDescription.classList.add("showDescription");

    content.appendChild(showItem);

    showItem.addEventListener('click', checkCheckbox);
}