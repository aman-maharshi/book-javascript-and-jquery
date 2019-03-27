//  VARIABLES
let un = document.getElementById('username'),
    fb = document.getElementById('feedback'),
    pass = document.getElementById('password'),
    passFb = document.getElementById('feedback-pass');

// EVENT LISTENERS 
document.addEventListener('DOMContentLoaded', init);
un.addEventListener('blur', checkUn);
un.addEventListener('focus', clearFeedback);
pass.addEventListener('blur', checkPass);
pass.addEventListener('focus', clearFeedback);

// FUCTIONS
function init() {
    un.focus();
}
function checkUn() {
    if ((un.value != '')&&(un.value.length < 5)) {
        fb.textContent = 'Username must be 5 characters or more';
        // this.nextSibling.nextSibling.textContent = 'Username must be 5 characters or more';
    }
    if(un.value == '') {
        fb.textContent = 'You must enter a valid username';
    }
}
function clearFeedback() {
    if(this.nextSibling.nextSibling.value != ''){
        this.nextSibling.nextSibling.textContent = '';
    }
}
function checkPass() {
    let num = /[0-9]/g;
    if(pass.value != ''){
        if(pass.value.match(num)) {}   
        else {
            passFb.textContent = 'Password must contain a number';
        } 
        if(pass.value.length < 5) {
            passFb.textContent = 'Password must be 5 characters or more'
        }
    } else {
        passFb.textContent = 'You must enter a password'
    }
}
