export function showingItems() {
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