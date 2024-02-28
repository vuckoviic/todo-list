import { showItem } from "./showingItems";

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
    const originalTitle = children.item(1);
    const originalDescription = children.item(2);
    const originalDate = children.item(3);
    const originalPriority = showItem.getAttribute("data-priority");
    console.log(originalTitle);
    console.log(originalDescription);
    console.log(originalDate);
    console.log(originalPriority);
    

    inputPriority.appendChild(optionLow);
    inputPriority.appendChild(optionNormal);
    inputPriority.appendChild(optionHigh);
    /*
        if (showItem.backgroundColor == "red") {
            priority.selected = "high";
        }

        or find current priority by data-priority attribute
    */

    inputDueDate.type = "date";
    
    showItem.appendChild(inputTitle);
    showItem.appendChild(inputDescription);
    showItem.appendChild(inputDueDate);
    showItem.appendChild(inputPriority);

}