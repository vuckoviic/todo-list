import { checkCheckbox } from "./checkCheckbox.js";
import { priority } from "./createTodoItem.js";
import { editShowItem } from "./editShowItem.js";
import { activeArray } from "./index.js";
import { settingPriority } from "./settingPriority.js";

const content = document.getElementById("content");
export { content };
export let showItem;

export let displayedItems = 0;

export function showingItems(activeArray) {

    for (let i = displayedItems; i < activeArray.length; i++) {

        showItem = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        const showTitle = document.createElement("div");
        const showDescription = document.createElement("div");
        const showDueDate = document.createElement("div");
        showTitle.innerHTML ="<h3>" + activeArray[i].title + "</h3>";
        showDescription.innerHTML ="<p>" + activeArray[i].description + "</p>";
        showDueDate.innerHTML ="<p>" + activeArray[i].dueDate + "</p>";
    
        priority = activeArray[i].priority;

        settingPriority(showItem);
    
        showItem.setAttribute("data-priority", priority);
        showItem.setAttribute("data-index", i);
        showItem.setAttribute("data-checked", "false");
        showItem.setAttribute("data-editing", "false");
    
        showItem.appendChild(checkbox);
        showItem.appendChild(showTitle);
        showItem.appendChild(showDescription);
        showItem.appendChild(showDueDate);
        showItem.classList.add("showItemDiv");
        showDescription.classList.add("showDescription");
    
        content.appendChild(showItem);
    
        checkbox.addEventListener('click', checkCheckbox);
    
        showItem.addEventListener("click", (e) => {
            if (e.target == showItem) {
                if (showItem.getAttribute("data-checked") == "false" && showItem.getAttribute("data-editing") == "false") {
                    editShowItem(e.target);
                }
            }
        });

        activeArray[i].displayed = true;
        displayedItems++;
    
    }
    
}