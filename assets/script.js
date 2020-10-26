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

//checks the current time
/*window.setInterval(updateTime, 10000);

function updateTime() {

}*/

//I want to loop through the hours and if the hour that is grabbed from currentHour (which is the current hour, ie 5pm) is greater than the hour within the HTML, then it turns the box grey, less than turns the box green and red for equals.
let hours = {
  9: "9am",
  10: "10am",
  11: "11am",
  12: "12pm",
  13: "1pm",
  14: "2pm",
  15: "3pm",
  16: "4pm",
  17: "5pm"
}

for (let t = 0; t < hours.length; t++) {
  if (currentHour > hours[t]) {
    
  }
  
}



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
});