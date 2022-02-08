

//global variables
const jobOptionElement = document.querySelector('#title');
const jobTitle = document.getElementById('other-job-role');
const shirtColors = document.getElementById('shirt-colors');
let punShirts = []
let heartShirts = []
const designSelect = document.getElementById('design');

//name field is highlighted onload
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
    } else if (attr === 'heart js') {
        heartShirts.push(i);
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
let totalCost = 0;
// global variables for activities
const regActivities = document.getElementById('activities');
const costActivities = document.getElementById('activities-cost');
const allTimes = document.querySelectorAll('input[data-day-and-time]');
const timesArray = Array.from(allTimes);

// checkbox listener calculating cost
// add
regActivities.addEventListener('change', function (e) {
const dataCost = e.target.getAttribute('data-cost');
const checkTime = e.target.getAttribute('data-day-and-time');
//push to an array? then check no two are alike. These should be in 'checked' below
let numberCost = +dataCost;
if (event.target.checked === true) {
  totalCost += numberCost;
} else {
  totalCost -= numberCost;
}
document.getElementById("activities-cost").innerHTML = "Total: $" + totalCost;
});


// Payment info variables
const payment = document.getElementById('payment');
const creditcard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentSecondChild = payment.children[1];
const ccActive = 'true';
//payment defaults
paymentSecondChild.setAttribute('selected', 'true');
paypal.style.display = 'none';
bitcoin.style.display = 'none';

// Lisetner for Payment selector
payment.addEventListener('change', function (e) {
 if (e.target.value === 'paypal') {
   paypal.style.display = 'block';
   bitcoin.style.display = 'none';
   creditcard.style.display = 'none';
   ccActive = 'false';
 } else if (e.target.value === 'bitcoin') {
   paypal.style.display = 'none';
   bitcoin.style.display = 'block';
   creditcard.style.display = 'none';
   ccActive = 'false';
 } else {
   paypal.style.display = 'none';
   bitcoin.style.display = 'none';
   creditcard.style.display = 'block';
   ccActive = 'true';
 }
});


const name = document.getElementById('name');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');

//if false, use argument to put through function filter
function emailValid (email) {
const emailValue = email.value;
const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
return regex.test(emailValue);
}

function zipValid (zip) {
const zipValue = zip.value;
const regex = /^\d{5}$|^\d{5}-\d{4}$/;
return regex.test(zipValue);
}

function cvvValid (cvv) {
const cvvValue = cvv.value;
const regex = /^[0-9]{3,4}$/;
return regex.test(cvvValue);
}

function cardValid (cardNumber) {
const cardValue = cardNumber.value;
const regex = /^[\d]{13,16}$/;
// const regex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
return regex.test(cardValue);
}

//check for valid entries once form submitted
form.addEventListener('submit', function (e) {
const nameValue = name.value;
const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const nameValid = regex.test(nameValue);
if (nameValid === false) {
  testFail(name);
  e.preventDefault();
} if (nameValid === true) {
  testPass(name);
  e.preventDefault();
} if (emailValid(email) === false) {
  testFail(email);
  e.preventDefault();
} if (emailValid(email) === true) {
  testPass(email);
  e.preventDefault();
} if (zipValid(zip) === false && ccActive === true) {
  testFail(zip);
  e.preventDefault();
} if (zipValid(zip) === true && ccActive === true) {
  testPass(zip);
  e.preventDefault();
} if (cvvValid(cvv) === false && ccActive === true) {
  testFail(cvv);
  e.preventDefault();
} if (cvvValid(cvv) === true && ccActive === true) {
  testPass(cvv);
  e.preventDefault();
} if (cardValid(cardNumber) === false && ccActive === true) {
  testFail(cardNumber);
  e.preventDefault();
} if (cardValid(cardNumber) === true && ccActive === true) {
  testPass(cardNumber);
  e.preventDefault();
};
});

//var for checkboxes border add on focus
const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const checkboxFocus = document.querySelectorAll('.focus');

//add border on focus to checkboxes
for (i=0; i<checkboxes.length; i++) {
checkboxes[i].addEventListener('focusin', function (e) {
    e.target.parentNode.classList.add('focus');
});
};

//remove border focus when next checkbox is selected
for (i=0; i<checkboxes.length; i++) {
checkboxes[i].addEventListener('blur', function (e) {
    e.target.parentNode.classList.remove('focus');
});
};

//helper function error detected
function testFail (test) {
  let testParent = test.parentNode;
  testParent.classList.add('not-valid');
  testParent.classList.remove('valid');
  testParent.lastElementChild.classList.replace('hint', 'hint.style.display=block');
}

function testPass (test) {
  let testParent = test.parentNode;
  testParent.classList.add('valid');
  testParent.classList.remove('not-valid');
  testParent.lastElementChild.classList.replace('hint.style.display=block', 'hint');
}


//helper function error resolved
//remove .hint and add .valid from parent and last child


//get data-day-and-time from each input element.'span[property]'
