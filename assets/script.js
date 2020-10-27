/*GIVEN I am using a daily planner to create a schedule
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist */

let currentDay = document.getElementById("current-day");
let entryField = document.getElementById("entry-field");
let saveButton = document.getElementById("saveButtons");

//sets the date with the help of Moment.js
let today = moment();
currentDay.textContent = today.format("MM-DD-YYYY, LT");

//pulls the current hour
let currentHour = moment().hour();

//times
let nineAM = document.getElementById("row-9");
nineAM.innerHTML = "9 am";
let tenAM = document.getElementById("row-10");
tenAM.innerHTML = "10 am";
let elevenAM = document.getElementById("row-11");
elevenAM.innerHTML = "11 am";
let twelvePM = document.getElementById("row-12");
twelvePM.innerHTML = "12 pm";
let onePM = document.getElementById("row-13");
onePM.innerHTML = "1 pm";
let twoPM = document.getElementById("row-14");
twoPM.innerHTML = "2 pm";
let threePM = document.getElementById("row-15");
threePM.innerHTML = "3 pm";
let fourPM = document.getElementById("row-16");
fourPM.innerHTML = "4 pm";
let fivePM = document.getElementById("row-17");
fivePM.innerHTML = "5 pm";

//how to parse the string from the number

let nineAMSplit = nineAM.innerHTML.split(" ");
let tenAMSplit = tenAM.innerHTML.split(" ");
let elevenAMSplit = elevenAM.innerHTML.split(" ");
let twelvePMSplit = twelvePM.innerHTML.split(" ");
let onePMSplit = onePM.innerHTML.split(" ");
let twoPMSplit = twoPM.innerHTML.split(" ");
let threePMSplit = threePM.innerHTML.split(" ");
let fourPMSplit = fourPM.innerHTML.split(" ");
let fivePMSplit = fivePM.innerHTML.split(" ");

console.log(nineAMSplit[0]);

//parse these before putting them into array so that they are a number
//figure out how to make it so time knows between am and pm

let timesArray = [nineAMSplit[0], tenAMSplit[0], elevenAMSplit[0], twelvePMSplit[0], onePMSplit[0], twoPMSplit[0], threePMSplit[0], fourPMSplit[0], fivePMSplit[0]];

console.log(timesArray[3]); //prints 12

for (let t = 0; t < timesArray.length; t++) {
  if (timesArray[t][0] === currentHour) {
    console.log("this is the same time as now");
  } else if (timesArray[t][0] > currentHour) {
    console.log("this is bigger than the current time");
  } else if (timesArray[t][0] < currentHour) {
    console.log("this is smaller than the current time");
  }
}




//console.log(timeSplit);

// we need to grab each element ID from the rows, and then split them using .split("-") which will split the string along the dash, and then we only want the number. So is it let 9am = document.getElementById(split("row-9")) ? Or do we split it in a loop somehow? Make an array let hours = [9am, 10am, 11am, 12pm] and then 9am above connects to 9am on the page. We loop through hours and if hours[i] > currentHour, green hours[i] = currentHour, red hours[i] < currentHours, grey

//checks the current time
/*window.setInterval(updateTime, 10000);

function updateTime() {

}*/

//I want to loop through the hours and if the hour that is grabbed from currentHour (which is the current hour, ie 5pm) is greater than the hour within the HTML, then it turns the box grey, less than turns the box green and red for equals.

/*for (let t = 0; t < hours.length; t++) {
  if (currentHour > hours[t]) {
    
  }
  
} */



/* function handleClick(event) {
  if (event.target.matches("button")) {
    event.preventDefault();
    modalEl.style.display = "block";
    currentId = parseInt(event.target.parentElement.id); //id of this modal box is taken from the id of the parent element at the time of the click
    let name = people[currentId].name;
    let description = people[currentId].description; //where do we define "description?"
    modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
} */

/*
let times = {
  nineAM: document.getElementById("row1"),
  tenAM: document.getElementById("row2"),
  elevenAM: document.getElementById("row3"),
  twelvePM: document.getElementById("row4"),
  onePM: document.getElementById("row5"),
  twoPM: document.getElementById("row6"),
  threePM: document.getElementById("row7"),
  fourPM: document.getElementById("row8"),
  fivePM: document.getElementById("row9")
}
console.log(times);

saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  let save = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  console.log(user);
  
  // validate the fields
  if (user.firstName === "") {
    displayMessage("error", "First name cannot be blank");
  } else if (user.lastName === "") {
    displayMessage("error", "Last name cannot be blank");
  } else if (user.email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (user.password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // set new submission
    localStorage.setItem("user", JSON.stringify(user));
    
    // get most recent submission
    var lastUser = JSON.parse(localStorage.getItem("user"));
    userFirstNameSpan.textContent = lastUser.firstName;
    userLastNameSpan.textContent = lastUser.lastName;
    userEmailSpan.textContent = lastUser.email;
    userPasswordSpan.textContent = lastUser.password;
  }
}); */