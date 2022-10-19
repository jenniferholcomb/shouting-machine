// Business logic
// N/A

// UI logic

//get input from user
function getAndSetShoutingMachineValues() { // aka getandSetMadLibsVal()
  // intake from user GET
  const shoutingInput = document.getElementById("user-input").value;
  // display back to user SET
  document.querySelector("span#shout").innerText = shoutingInput;
  console.log("const shoutingInput: ", shoutingInput);
}

// this function creates the onsubmit event handler
// it needs to be called in the window.onload event handler
// the final display fx()
function setFormSubmissionEventHandler(){
 
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetShoutingMachineValues();
    //write to the div - 
    document.querySelector("div#shout-display-response");
  }
}

window.onload = function(){
  //runs the display fx()
  setFormSubmissionEventHandler();
}