/*
    TODO: add an event listener to micIcon to access the system microphone
*/

//  VARIABLES
let inputName = document.querySelector('#note-name'),
    micIcon = document.querySelector('#mic-icon');

let constraintObj = {
    audio: true,
    video: false
}
// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', init);
micIcon.addEventListener('click', record);


//  FUNCTIONS
function init() {
    inputName.focus();
}
function record(e) {
    e.preventDefault();
}
function record() {
    // navigator.mediaDevices.getUserMedia(constraintObj);
}