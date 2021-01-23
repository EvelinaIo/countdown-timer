/* Global Variables */
alert("I exist");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const title = document.querySelector(".main--heading");

//// getTime() milliseconds since Jan 1, 1970, 00:00:00.000 GMT
const endDate = new Date("Fri Jan 22 2021 20:10:00 GMT+0200 (EET)").getTime();
console.log(endDate);

// Update the count down every 1 second
const timeDisplay = setInterval(function () {
    let startDate = new Date().getTime();
    const distance = endDate - startDate;
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval();
        title.textContent = "WE'RE UP AND RUNNING!";
    } else {
        title.textContent = "WE'RE LAUNCHING SOON";
        const dispDays = Math.floor(distance/(1000*60*60*24));
        const dispHours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const dispMin = Math.floor((distance%(1000*60*60))/(1000*60));
        const dispSec = Math.floor((distance%(1000*60))/1000);

        days.textContent = formatNumber(dispDays);
        hours.textContent = formatNumber(dispHours);
        minutes.textContent = formatNumber(dispMin);
        seconds.textContent = formatNumber(dispSec);
  }
    
     
    
}, 1000);

const formatNumber = num => (`0${num}`).slice(-2);