var rightNow = moment().format("dddd, MMM. DD, YYYY")
$("#currentDay").html(rightNow);

var timeNow = moment().hours();
console.log(timeNow);



function setTime1(){
    if (timeNow > 8) {
        $('#hour8').addClass('past')
     } else if (timeNow === 8) {
        $('hour8').addClass('present')
     } else { $('hour8').addClass('future')
     }}
function setTime2(){
     if (timeNow === 9) {
        $('#hour9').addClass('present')
     } else if (timeNow < 9) {
        $('hour9').addClass('past')
     } else { $('hour9').addClass('future')
     }}
function setTime3(){
     if (timeNow < 10) {
        $('#hour10').addClass('future')
     } else if (timeNow === 10) {
        $('hour10').addClass('present')
     } else { $('hour10').addClass('past')
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


