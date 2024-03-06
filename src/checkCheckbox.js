import { settingPriority } from "./settingPriority";
import { showItem } from "./showingItems";
import { priority } from "./createTodoItem";

export function checkCheckbox(event) {
    priority = event.target.parentElement.getAttribute("data-priority");

    if (event.target.checked === true) {
        event.target.parentElement.style.backgroundColor = "green";
        console.log("Div is checked");
        event.target.parentElement.setAttribute("data-checked", "true");
    }

    else {
        if (priority === "low") {
            event.target.parentElement.style.backgroundColor = "lightblue";
            console.log("Div is not checked");
            event.target.parentElement.setAttribute("data-checked", "false");
        }
        
        else if (priority == "normal") {
            event.target.parentElement.style.backgroundColor = "rgb(51, 126, 245)";
            console.log("Div is not checked")
            event.target.parentElement.setAttribute("data-checked", "false");
        }
        
        else {
            event.target.parentElement.style.backgroundColor = "red";
            console.log("Div is not checked")
            event.target.parentElement.setAttribute("data-checked", "false");
        }
    }
}