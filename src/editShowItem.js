import { settingPriority } from "./settingPriority";
import { showItem } from "./showingItems";
import { content } from "./showingItems";

export function editShowItem(showItem) {
    // for (const child of showItem.children) {
    //     console.log(child);
    //   }

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
    const originalTitle = children.item(1).firstChild.innerText;
    const originalDescription = children.item(2).firstChild.innerText;
    const originalDueDate = children.item(3).firstChild.innerText;
    const originalPriority = showItem.getAttribute("data-priority");

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
    
    else {
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

    saveButton.innerText = "Save";
    closeButton.innerText = "Close";
    deleteButton.innerText = "Delete";

    showItem.appendChild(deleteButton);
    showItem.appendChild(closeButton);
    showItem.appendChild(saveButton);

    deleteButton.addEventListener("click", () => {
        content.removeChild(showItem);
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
    })

    saveButton.addEventListener("click", () => {
        const newTitle = document.createElement("h3");
        const newDescription = document.createElement("p");
        const newDueDate = document.createElement("p");
        const newPriority = showItem.setAttribute("data-priority", inputPriority);

        // settingPriority();

        newTitle.innerText = inputTitle.value;
        newDescription.innerText = inputDescription.value;
        newDescription.style.fontStyle = "italic";
        newDueDate.innerText = inputDueDate.value;

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
    });

}