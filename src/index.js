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
}

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
        console.log(item);
    }

    event.preventDefault();
    dialog.close();
});