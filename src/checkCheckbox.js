import { settingPriority } from "./settingPriority";
import { showItem } from "./showingItems";
import { priority } from "./createTodoItem";
import { activeArray } from "./projects";

export function checkCheckbox(event) {
    priority = event.target.parentElement.getAttribute("data-priority");

    if (event.target.checked === true) {
        event.target.parentElement.style.backgroundColor = "green";
        console.log("Div is checked");
        event.target.parentElement.setAttribute("data-checked", "true");
        let index = event.target.parentElement.getAttribute("data-index");
        activeArray[index].checked = true;
        console.log(activeArray[index].checked);
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
        let index = event.target.parentElement.getAttribute("data-index");
        activeArray[index].checked = false;
        console.log(activeArray[index].checked);
    }
}