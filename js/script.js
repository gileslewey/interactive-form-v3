

//global variables
const jobOptionElement = document.querySelector('#title');
const jobTitle = document.getElementById('other-job-role');
const shirtColors = document.getElementById('shirt-colors');
let punShirts = []
let heartShirts = []
const designSelect = document.getElementById('design');

//name field is highlighted onload//
window.onload = function() {
  document.getElementById("name").focus();
};

//hide job title: other
window.onload = function() {
jobTitle.style.display = "none";
shirtColors.style.display = 'none';
}

//reveal job title: other when other selected
jobOptionElement.addEventListener('change', e => {
  if (event.target.value === 'other') {
    jobTitle.style.display = 'block';
  } else {jobTitle.style.display = 'none';}
});


//reveal shirt colors when a design is picked
designSelect.onchange = function() {
shirtColors.style.display = 'block';

let allShirts = document.querySelectorAll('[data-theme]');
let myArray = Array.from(allShirts);

//sort shirts into proper arrays
for (let i of myArray) {
    let attr = i.getAttribute('data-theme');
    if (attr === 'js puns') {
        punShirts.push(i);
        console.log(punShirts);
    } else if (attr === 'heart js') {
        heartShirts.push(i);
        console.log(heartShirts);
    }
  }

//make only correct colors available to pick
if (this.value === 'heart js') {
  heartShirts.forEach((item) => {
      item.style.display = "block";
   });
  punShirts.forEach((item) => {
      item.style.display = "none";
   });
 } else {
   heartShirts.forEach((item) => {
       item.style.display = "none";
    });
  punShirts.forEach((item) => {
      item.style.display = "block";
   });
  }
};


// Create variables to reference the "Register for Activities" <fieldset> element and the "Total: $" <p> element.
//  Log the variables out to the console to ensure the correct elements are being referenced.
// Create another variable to store the total cost of the activities and give it an initial value of 0.
// Use the variable for the "Register for Activities" section to listen for the change event on this element.
