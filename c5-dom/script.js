// Variables
let listItems = document.getElementsByTagName('li'),
    count = document.querySelector('.count'),
    ul = document.querySelector('ul');

count.textContent = listItems.length;

// Event Listeners
ul.addEventListener('click', addBtn);
ul.addEventListener('click', removeItem);


// Functions
function addBtn(event) {
    let box = event.target.querySelector('i');
    if(box != null && box.className != "fas fa-trash-alt") {
        box.classList = "fas fa-trash-alt";
    }
}
function removeItem(event) {
    if (event.target.classList.contains('fas')) {
        event.target.parentElement.remove();
        count.textContent = listItems.length;
    }

}

