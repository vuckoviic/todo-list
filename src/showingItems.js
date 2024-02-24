import { todoItems } from "./index.js";

const content = document.getElementById("content");

export function showingItems() {
    const showItem = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const showTitle = document.createElement("div");
    const showDescription = document.createElement("div");
    const showDueDate = document.createElement("div");
    showTitle.innerHTML ="<h3>" + todoItems[(todoItems.length-1)].title + "</h3>";
    showDescription.innerHTML ="<p>" + todoItems[(todoItems.length-1)].description + "</p>";
    showDueDate.innerHTML ="<p>" + todoItems[(todoItems.length-1)].dueDate + "</p>";
    
    console.log(todoItems.length - 1);

    showItem.appendChild(checkbox);
    showItem.appendChild(showTitle);
    showItem.appendChild(showDescription);
    showItem.appendChild(showDueDate);
    showItem.classList.add("showItemDiv");
    showDescription.classList.add("showDescription");
    content.appendChild(showItem);
}