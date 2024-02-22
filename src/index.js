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