
let hotItems = document.querySelectorAll('.hot');
for (let i = 0; i < hotItems.length; i++) {
    // console.log(hotItems[i].textContent);
    if (i%2 == 0) {
        hotItems[i].className = "cool";
    }
}
let i = document.getElementsByTagName('i');
let liIcons = []
for (var x = 0; x < i.length; x++) {
    if (x > 0) {
        liIcons.push(i[x]);
    }
}
liIcons[0].classList.add('fas');
liIcons[0].classList.add('fa-trash-alt');



