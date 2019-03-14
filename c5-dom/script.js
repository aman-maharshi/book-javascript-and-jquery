
let hotItems = document.querySelectorAll('.hot');
for (let i = 0; i < hotItems.length; i++) {
    // console.log(hotItems[i].textContent);
    if (i%2 == 0) {
        hotItems[i].className = "cool";
    }
}

// adding a trash box to the first li
let i = document.getElementsByTagName('i');

i[1].classList.add('fas');
i[1].classList.add('fa-trash-alt')