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
    showItem.appendChild(saveButton);
    showItem.appendChild(closeButton);

    deleteButton.addEventListener("click", () => {
        content.removeChild(showItem);
    });

}