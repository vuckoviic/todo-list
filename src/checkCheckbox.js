import { settingPriority } from "./settingPriority";
import { showItem } from "./showingItems";
import { priority } from "./createTodoItem";

export function checkCheckbox(event) {
    priority = event.target.parentElement.getAttribute("data-priority");

    if (event.target.checked === true) {
        event.target.parentElement.style.backgroundColor = "green";
    }
    else {
        if (priority === "low") {
            event.target.parentElement.style.backgroundColor = "lightblue";
            console.log("Priority is LOW")
        }
        
        else if (priority == "normal") {
            event.target.parentElement.style.backgroundColor = "rgb(51, 126, 245)";
            console.log("Priority is NORMAL")
        }
        
        else {
            event.target.parentElement.style.backgroundColor = "red";
            console.log("Priority is HIGH")
        }
    }
}
