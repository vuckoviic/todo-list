import { priority } from "./createTodoItem.js";
import { showItem, showingItems } from "./showingItems.js";

export function settingPriority (showItem) {
    
    if (priority === "low") {
        showItem.style.backgroundColor = "lightblue";
    }
    
    else if (priority == "normal") {
        showItem.style.backgroundColor = "rgb(51, 126, 245)";
    }
    
    else {
        showItem.style.backgroundColor = "red";
    }
}