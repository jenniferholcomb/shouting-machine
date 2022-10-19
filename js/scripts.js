// Business logic
// N/A

// UI logic

//get input from user
function getAndSetShoutingMachineValues() { // aka getandSetMadLibsVal()
  // intake from user GET
  const shoutingInput = document.getElementById("user-input").value;
  // display back to user SET
  document.querySelector("span#shout").innerText= shoutingInput;
  const shoutUpper = shoutingInput.toUpperCase();
  console.log("const shoutingInput & shoutUppper: ", shoutingInput, shoutUpper);
}

// this function creates the onsubmit event handler
// it needs to be called in the window.onload event handler
// the final display fx()
function setFormSubmissionEventHandler(){
 
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetShoutingMachineValues();
    //display respo to the div - Display in uppercase.
    document.querySelector("div#shout-display-response");
  }
}

window.onload = function(){
  //runs the display fx()
  setFormSubmissionEventHandler();
}