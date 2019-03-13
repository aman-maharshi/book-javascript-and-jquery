
let hotItems = document.querySelectorAll('.hot');

for (let i = 0; i < hotItems.length; i++) {
    // console.log(hotItems[i].textContent);
    if (i%2 == 0) {
        hotItems[i].className = "cool";
    }
    
}
