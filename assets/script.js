/*GIVEN I am using a daily planner to create a schedule
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */

let currentDay = document.getElementById("current-day");
let entryField = document.getElementById("entry-field");
let saveButton = document.querySelector("saveButtons");

//sets the date with the help of Moment.js
let today = moment();
currentDay.textContent = today.format("MM-DD-YYYY");

//array used to loop through the times of the day
let hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let hoursOfDay = document.getElementById("hours");

//adds hours to the left side of the page
for (let i = 0; i < hours.length; i++) {
    let hoursDiv = document.createElement("div");
    hoursDiv.textContent = hours[i];
    hoursOfDay.appendChild(hoursDiv);
    hoursDiv.setAttribute("class", "hour time-block");
}

for (let i = 0; i < 9; i++) {
    let buttonDiv = document.createElement("button");
    saveButtons.appendChild(buttonDiv);
    buttonDiv.setAttribute("class", "saveBtn");
}
/*listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    let item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});*/