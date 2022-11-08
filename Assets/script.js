var rightNow = moment().format("dddd, MMM. DD, YYYY")
$("#currentDay").html(rightNow);

var timeNow = moment().hours();
console.log(timeNow);


function setTime(){
    if (timeNow > 8) {
        $('#hour8').addClass('past')
     } else if (timeNow === 8) {
        $('hour8').addClass('present')
     } else { $('hour8').addClass('future')
     }

     if (timeNow > 9) {
        $('#hour9').addClass('past')
     } else if (timeNow === 9) {
        $('hour9').addClass('present')
     } else { $('hour9').addClass('future')
     }

     if (timeNow > 10) {
        $('#hour10').addClass('past')
     } else if (timeNow === 10) {
        $('hour10').addClass('present')
     } else { $('hour10').addClass('future')
     }

     if (timeNow > 11) {
        $('#hour11').addClass('past')
     } else if (timeNow === 11) {
        $('hour11').addClass('present')
     } else { $('hour11').addClass('future')
     }

     if (timeNow > 11) {
        $('#hour11').addClass('past')
     } else if (timeNow === 11) {
        $('hour11').addClass('present')
     } else { $('hour11').addClass('future')
     }

     if (timeNow > 12) {
        $('#hour12').addClass('past')
     } else if (timeNow === 12) {
        $('hour12').addClass('present')
     } else { $('hour12').addClass('future')
     }

     if (timeNow > 13) {
        $('#hour13').addClass('past')
     } else if (timeNow === 13) {
        $('hour13').addClass('present')
     } else { $('hour13').addClass('future')
     }

     if (timeNow > 14) {
        $('#hour14').addClass('past')
     } else if (timeNow === 14) {
        $('hour14').addClass('present')
     } else { $('hour14').addClass('future')
     }

     if (timeNow > 15) {
        $('#hour15').addClass('past')
     } else if (timeNow === 15) {
        $('hour15').addClass('present')
     } else { $('hour15').addClass('future')
     }

     if (timeNow > 16) {
        $('#hour16').addClass('past')
     } else if (timeNow === 16) {
        $('hour16').addClass('present')
     } else { $('hour16').addClass('future')
     }

     if (timeNow > 17) {
        $('#hour17').addClass('past')
     } else if (timeNow === 17) {
        $('hour17').addClass('present')
     } else { $('hour17').addClass('future')
     }
    };
setTime()


