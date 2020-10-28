let currentDay = document.getElementById("current-day");

//sets the date with the help of Moment.js
let today = moment();
currentDay.textContent = today.format("MM-DD-YYYY, kk:mm");

//pulls the current hour
let currentHour = moment().hour();

//times
let nineAM = document.getElementById("row-9");
let nineAMTime = document.getElementById("row-9-time");
nineAMTime.innerHTML = "9:00";

let tenAM = document.getElementById("row-10");
let tenAMTime = document.getElementById("row-10-time");
tenAMTime.innerHTML = "10:00";

let elevenAM = document.getElementById("row-11");
let elevenAMTime = document.getElementById("row-11-time");
elevenAMTime.innerHTML = "11:00";

let twelvePM = document.getElementById("row-12");
let twelvePMTime = document.getElementById("row-12-time");
twelvePMTime.innerHTML = "12:00";

let onePM = document.getElementById("row-13");
let onePMTime = document.getElementById("row-13-time");
onePMTime.innerHTML = "13:00";

let twoPM = document.getElementById("row-14");
let twoPMTime = document.getElementById("row-14-time");
twoPMTime.innerHTML = "14:00";

let threePM = document.getElementById("row-15");
let threePMTime = document.getElementById("row-15-time");
threePMTime.innerHTML = "15:00";

let fourPM = document.getElementById("row-16");
let fourPMTime = document.getElementById("row-16-time");
fourPMTime.innerHTML = "16:00";

let fivePM = document.getElementById("row-17");
let fivePMTime = document.getElementById("row-17-time");
fivePMTime.innerHTML = "17:00";

//how to parse the string from the number

let nineAMSplit = nineAMTime.innerHTML.split(":");
let tenAMSplit = tenAMTime.innerHTML.split(":");
let elevenAMSplit = elevenAMTime.innerHTML.split(":");
let twelvePMSplit = twelvePMTime.innerHTML.split(":");
let onePMSplit = onePMTime.innerHTML.split(":");
let twoPMSplit = twoPMTime.innerHTML.split(":");
let threePMSplit = threePMTime.innerHTML.split(":");
let fourPMSplit = fourPMTime.innerHTML.split(":");
let fivePMSplit = fivePMTime.innerHTML.split(":");

console.log(nineAMSplit[0]);

//parse these before putting them into array so that they are a number
//figure out how to make it so time knows between am and pm

let timesArray = [nineAMSplit[0], tenAMSplit[0], elevenAMSplit[0], twelvePMSplit[0], onePMSplit[0], twoPMSplit[0], threePMSplit[0], fourPMSplit[0], fivePMSplit[0]];

let divTimes = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

for (let t = 0; t < timesArray.length; t++) {
  if (timesArray[t] == currentHour) {
    console.log("this is the same time as now");
    divTimes[t].classList.toggle("present");
  } else if (timesArray[t] > currentHour) {
    console.log("this is bigger than the current time");
    divTimes[t].classList.toggle("future");
  } else if (timesArray[t] < currentHour) {
    console.log("this is smaller than the current time");
    divTimes[t].classList.toggle("past");
  }
}

$(".saveBtn").on("click", function(event){
  event.preventDefault();
  let value = $(this).siblings("textarea").val();
  let key = $(this).parent().attr("id");
  localStorage.setItem(key, value);
})


for (let h = 9; h < 18; h++) {
  document.getElementById(`row-${h}`).value = localStorage.getItem(`hour-${h}`);
}


//grab data-hour and compare it > < =
//for ex- <div class="time-block row" data-hour= 9 id="hour-9">