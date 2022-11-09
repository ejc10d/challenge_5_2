// gets current day from moment
var rightNow = moment().format("dddd, MMM. DD, YYYY")
$("#currentDay").html(rightNow);
// writes current time to work with later in the page
var timeNow = moment().hours();
console.log(timeNow);

// controls the color change feature of the scheduler
function setTime1(){
    if (timeNow > 8) {
        $('#hour8').addClass('past')
     } else if (timeNow === 8) {
        $('hour8').addClass('present')
     } else { $('hour8').addClass('future')
     }}
function setTime2(){
     if (timeNow > 9) {
        $('#hour9').addClass('past')
     } else if (timeNow === 9) {
        $('hour9').addClass('present')
     } else { $('hour9').addClass('future')
     }}
function setTime3(){
     if (timeNow === 10) {
        $('#hour10').addClass('present')
     } else if (timeNow > 10) {
        $('hour10').addClass('past')
     } else { $('hour10').addClass('future')
     }}
function setTime4(){
     if (timeNow < 11) {
        $('#hour11').addClass('future')
     } else if (timeNow === 11) {
        $('hour11').addClass('present')
     } else { $('hour11').addClass('past')
     }}
function setTime5(){
     if (timeNow < 12) {
        $('#hour12').addClass('future')
     } else if (timeNow === 12) {
        $('hour12').addClass('present')
     } else { $('hour12').addClass('past')
     }}
function setTime6(){
     if (timeNow < 13) {
        $('#hour13').addClass('future')
     } else if (timeNow === 13) {
        $('hour13').addClass('present')
     } else { $('hour13').addClass('past')
     }}
function setTime7(){
     if (timeNow < 14) {
        $('#hour14').addClass('future')
     } else if (timeNow === 14) {
        $('hour14').addClass('present')
     } else { $('hour14').addClass('past')
     }}
function setTime8(){
     if (timeNow < 15) {
        $('#hour15').addClass('future')
     } else if (timeNow === 15) {
        $('hour15').addClass('present')
     } else { $('hour15').addClass('past')
     }}
function setTime9(){
     if (timeNow < 16) {
        $('#hour16').addClass('future')
     } else if (timeNow === 16) {
        $('hour16').addClass('present')
     } else { $('hour16').addClass('past')
     }}
function setTime10(){
     if (timeNow < 17) {
        $('#hour17').addClass('future')
     } else if (timeNow === 17) {
        $('hour17').addClass('present')
     } else { $('hour17').addClass('past')
     }}
// funds these functions on page load
setTime1();
setTime2();
setTime3();
setTime4();
setTime5();
setTime6();
setTime7();
setTime8();
setTime9();
setTime10();

// attpemts to run the save user input to page
var userInput8 = document.getElementById("description8");
var saveBtn8 = document.getElementById("saveBtn8");

saveBtn8.onclick = function() {
    var input = userInput8.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput8.innerHTML += `${value}`;
};

var userInput9 = document.getElementById("description9");
var saveBtn9 = document.getElementById("saveBtn9");

saveBtn8.onclick = function() {
    var input = userInput9.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput9.innerHTML += `${value}`;
};

var userInput10 = document.getElementById("description10");
var saveBtn10 = document.getElementById("saveBtn10");

saveBtn8.onclick = function() {
    var input = userInput10.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput10.innerHTML += `${value}`;
};

var userInput11 = document.getElementById("description11");
var saveBtn11 = document.getElementById("saveBtn11");

saveBtn11.onclick = function() {
    var input = userInput11.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput11.innerHTML += `${value}`;
};

var userInput12 = document.getElementById("description12");
var saveBtn12 = document.getElementById("saveBtn12");

saveBtn12.onclick = function() {
    var input = userInput12.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput12.innerHTML += `${value}`;
};

var userInput13 = document.getElementById("description13");
var saveBtn13 = document.getElementById("saveBtn13");

saveBtn13.onclick = function() {
    var input = userInput13.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput13.innerHTML += `${value}`;
};

var userInput14 = document.getElementById("description14");
var saveBtn14 = document.getElementById("saveBtn14");

saveBtn14.onclick = function() {
    var input = userInput14.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput14.innerHTML += `${value}`;
};

var userInput15 = document.getElementById("description15");
var saveBtn15 = document.getElementById("saveBtn15");

saveBtn15.onclick = function() {
    var input = userInput15.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput15.innerHTML += `${value}`;
};

var userInput16 = document.getElementById("description16");
var saveBtn16 = document.getElementById("saveBtn16");

saveBtn16.onclick = function() {
    var input = userInput16.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput16.innerHTML += `${value}`;
};

var userInput17 = document.getElementById("description17");
var saveBtn17 = document.getElementById("saveBtn17");

saveBtn17.onclick = function() {
    var input = userInput17.value;

    localStorage.setItem("task", input);
    var value = (localStorage.getItem("task"));
    console.log(value)
    userInput17.innerHTML += `${value}`;
};

// prints user input to page
userInput8.innerHTML += localStorage.getItem("task");
userInput9.innerHTML += localStorage.getItem("task");
userInput10.innerHTML += localStorage.getItem("task");
userInput11.innerHTML += localStorage.getItem("task");
userInput12.innerHTML += localStorage.getItem("task");
userInput13.innerHTML += localStorage.getItem("task");
userInput14.innerHTML += localStorage.getItem("task");
userInput15.innerHTML += localStorage.getItem("task");
userInput16.innerHTML += localStorage.getItem("task");
userInput17.innerHTML += localStorage.getItem("task");