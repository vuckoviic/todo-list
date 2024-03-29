import { activeArray } from "./projects.js";
import { settingPriority } from "./settingPriority";
import { showItem } from "./showingItems";
import { content } from "./showingItems";
import { priority } from "./createTodoItem";


export function editShowItem(showItem) {

    showItem.setAttribute("data-editing", "true");
    console.log("Div IS being edited right now");

    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("textarea");
    const inputDueDate = document.createElement("input");
    const inputPriority = document.createElement("select");

    const optionLow = document.createElement("option");
    const optionNormal = document.createElement("option");
    const optionHigh = document.createElement("option");

    optionLow.innerText = "Low";
    optionNormal.innerText = "Normal";
    optionHigh.innerText = "High";

    optionLow.setAttribute("value", "low"); 
    optionNormal.setAttribute("value", "normal");
    optionHigh.setAttribute("value", "high");


    const children = showItem.children;
    const checkbox = children.item(0);
    const originalTitle = children.item(1).innerText;
    const originalDescription = children.item(2).innerText;
    const originalDueDate = children.item(3).innerText;
    const originalPriority = showItem.getAttribute("data-priority");

    checkbox.disabled = true;

    inputTitle.value = originalTitle;
    inputDescription.innerText = originalDescription;
    inputDueDate.value = originalDueDate;
    inputPriority.innerText = originalPriority;

    inputPriority.appendChild(optionLow);
    inputPriority.appendChild(optionNormal);
    inputPriority.appendChild(optionHigh);
    
    if (originalPriority == "low") {
        optionLow.selected = true;
    }
    
    else if (originalPriority == "normal") {
        optionNormal.selected = true;
    }
    
    else if (originalPriority == "high") {
        optionHigh.selected = true;
    }

    inputDueDate.type = "date";
    
    showItem.appendChild(inputTitle);
    showItem.appendChild(inputDescription);
    showItem.appendChild(inputDueDate);
    showItem.appendChild(inputPriority);


    showItem.removeChild(children.item(1));
    showItem.removeChild(children.item(1));
    showItem.removeChild(children.item(1));

    const saveButton = document.createElement("button");
    const closeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    saveButton.classList.add("editButton", "saveEditButton");
    closeButton.classList.add("editButton", "closeEditButton");
    deleteButton.classList.add("editButton", "deleteEditButton");

    saveButton.innerText = "Save";
    closeButton.innerText = "Close";
    deleteButton.innerText = "Delete";

    showItem.appendChild(deleteButton);
    showItem.appendChild(closeButton);
    showItem.appendChild(saveButton);

    deleteButton.addEventListener("click", () => {
        content.removeChild(showItem);
        const index = parseInt(showItem.getAttribute("data-index"));
        activeArray.pop(activeArray[index]);
        showItem.setAttribute("data-editing", "false");
        console.log("Div IS NOT being edited right now.");
    });

    closeButton.addEventListener("click", () => {
        const newTitle = document.createElement("h3");
        const newDescription = document.createElement("p");
        const newDueDate = document.createElement("p");
        const newPriority = showItem.setAttribute("data-priority", originalPriority);

        newTitle.innerText = originalTitle;
        newDescription.innerText = originalDescription;
        newDescription.style.fontStyle = "italic";
        newDueDate.innerText = originalDueDate;

        showItem.appendChild(newTitle);
        showItem.appendChild(newDescription);
        showItem.appendChild(newDueDate);

        showItem.removeChild(inputTitle);
        showItem.removeChild(inputDescription);
        showItem.removeChild(inputDueDate);
        showItem.removeChild(inputPriority);

        showItem.removeChild(saveButton);
        showItem.removeChild(closeButton);
        showItem.removeChild(deleteButton);

        checkbox.disabled = false;

        showItem.setAttribute("data-editing", "false");
        console.log("Div IS NOT being edited right now.");
    })

    saveButton.addEventListener("click", () => {
        const newTitle = document.createElement("h3");
        const newDescription = document.createElement("p");
        const newDueDate = document.createElement("p");

        newTitle.innerText = inputTitle.value;
        newDescription.innerText = inputDescription.value;
        newDescription.style.fontStyle = "italic";
        newDueDate.innerText = inputDueDate.value;

        const index = parseInt(showItem.getAttribute("data-index"));
        activeArray[index].title = inputTitle.value;
        activeArray[index].description = inputDescription.value;
        activeArray[index].dueDate= inputDueDate.value;
        activeArray[index].priority = inputPriority.value;

        priority = inputPriority.value;

        settingPriority(showItem);

        const newPriority = showItem.setAttribute("data-priority", inputPriority.value);

        console.log(activeArray[index]);
        console.log("Saved item's priority is: " + activeArray[index].priority);

        showItem.appendChild(newTitle);
        showItem.appendChild(newDescription);
        showItem.appendChild(newDueDate);

        showItem.removeChild(inputTitle);
        showItem.removeChild(inputDescription);
        showItem.removeChild(inputDueDate);
        showItem.removeChild(inputPriority);

        showItem.removeChild(saveButton);
        showItem.removeChild(closeButton);
        showItem.removeChild(deleteButton);

        checkbox.disabled = false;

        showItem.setAttribute("data-editing", "false");
        console.log("Div IS NOT being edited right now.");
    });

}