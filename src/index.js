console.log("Everything works as expected");

const dialog = document.getElementsByTagName("dialog")[0];
const addItem = document.getElementById("addItem");
const closeDialog = document.getElementById("closeDialog");

addItem.addEventListener('click', ()=> {
    dialog.showModal();
});

closeDialog.addEventListener('click', ()=> {
    dialog.close();
});

class Item {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    showingItems() {
        const showItem = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const showTitle = document.createElement("div");
        const showDescription = document.createElement("div");
        const showDueDate = document.createElement("div");

        showTitle.innerHTML ="<h3>" + this.title + "</h3>";
        showDescription.innerHTML ="<p>" + this.description + "</p>";
        showDueDate.innerHTML ="<p>" + this.dueDate + "</p>";
        
        showItem.appendChild(checkbox);
        showItem.appendChild(showTitle);
        showItem.appendChild(showDescription);
        showItem.appendChild(showDueDate);

        showItem.classList.add("showItemDiv");
        showDescription.classList.add("showDescription");

        content.appendChild(showItem);
    }
}

let todoItems = [];

const createTodoItem = document.getElementById("createTodoItem");

createTodoItem.addEventListener('click', (event)=> {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    if (title.length < 1) {
        alert("Please Insert a Title.")
    }

    else if (description.length < 1) {
        alert("Please Insert a Description.")
    }

    else if (dueDate === "") {
        alert("Please Choose Your Due Date.")
    }

    else {
        const item = new Item(title, description, dueDate, priority);
        todoItems.push(item);
        console.log(todoItems);
        item.showingItems();
    }

    event.preventDefault();
    dialog.close();
});

// I am not sure if this should be in another module, FOR NOW I will be
// writting it here (I am talking about visually presenting objects)

const content = document.getElementById("content");

