
//global variables
const jobOptionElement = document.querySelector('#title');
const jobTitle = document.getElementById('other-job-role');
const shirtColors = document.getElementById('shirt-colors');
let punShirts = []
let heartShirts = []
const designSelect = document.getElementById('design');
const color = document.getElementById('color');



//hide job title: other and name field is foucused on load
window.onload = function() {
  jobTitle.style.display = "none";
  //shirtColors.style.display = 'none';
  document.getElementById("name").focus();
}

designSelect.addEventListener('click', e => {
  if (event.target.value === 'other') {
    jobTitle.style.display = 'block';
  } else {jobTitle.style.display = 'none';}
});

//reveal shirt colors when a design is picked
designSelect.onclick ('change', e=> {
  const allShirts = document.querySelectorAll('[data-theme]');
  shirtColors.style.display = 'block';

    for (let i of allShirts) {
    let attr = i.getAttribute('data-theme');
    if (attr === 'js puns') {
        punShirts.push(i);
    } else if (attr === 'heart js') {
        heartShirts.push(i);
    }


if (e.target.value === 'js puns') {
  color.children[1].setAttribute('selected', true);
  heartShirts.forEach((item) => {
  item.style.display = "none";
   });
  punShirts.forEach((item) => {
  item.style.display = "block";
   });
 } else {
   color.children[4].setAttribute('selected', true);
   heartShirts.forEach((item) => {
   item.style.display = "block";
    });
  punShirts.forEach((item) => {
  item.style.display = "none";
   });
 }
}
});

//variables for registration activities
let totalCost = 0;
const regActivities = document.getElementById('activities');
const costActivities = document.getElementById('activities-cost');
const timesArray = document.querySelectorAll('input[data-day-and-time]');

regActivities.addEventListener('change', function (e) {
const dataCost = e.target.getAttribute('data-cost');
const numberCost = +dataCost;
const currentChecked = event.target.getAttribute('data-day-and-time');

//registration function, concurrent class disabling and cost calculation
if (event.target.checked === true) {
  totalCost += numberCost;
  for (i=0; i < timesArray.length; i++) {
    if (event.target !== timesArray[i] && currentChecked === timesArray[i].getAttribute('data-day-and-time')) {
    const checkDisable = timesArray[i].parentNode;
    timesArray[i].disabled = true;
    checkDisable.classList.add('disabled');
    }
  }
} else {
  totalCost -= numberCost;
  for (i=0; i < timesArray.length; i++) {
  if (currentChecked === timesArray[i].getAttribute('data-day-and-time')) {
  const checkDisable = timesArray[i].parentNode;
  timesArray[i].disabled = false;
  checkDisable.classList.remove('disabled');
      }
   }
}
document.getElementById("activities-cost").innerHTML = "Total: $" + totalCost;
});


// Payment info variables
const payment = document.getElementById('payment');
const creditcard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentSecondChild = payment.children[1];
let ccActive = true;

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
   ccActive = false;
 } else if (e.target.value === 'bitcoin') {
   paypal.style.display = 'none';
   bitcoin.style.display = 'block';
   creditcard.style.display = 'none';
   ccActive = false;
 } else {
   paypal.style.display = 'none';
   bitcoin.style.display = 'none';
   creditcard.style.display = 'block';
   ccActive = true;
 }
});

//variables for form validation
const name = document.getElementById('name');
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');
const activities = document.getElementById('activities-hint')

//function for real-time name evaluation
function nameValidRT() {
const nameValue = name.value;
const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const nameValid = regex.test(nameValue);
if (nameValid === false) {
  testFail(name);
} else {
  testPass(name);
}
};

//name evaluates in real-time
name.addEventListener('keyup', nameValidRT);

//helpers for function filter
const testParent = email.parentNode;

function emailValid () {
  const emailNone = /^\s*$/.test(email.value);
  const emailValid = /^[^@]+\@[^@.]+\.com$/i.test(email.value);
  if (emailNone === true) {
      testParent.lastElementChild.classList.replace('hint', 'hint.style.display=block');
      testParent.classList.add('not-valid');
      testParent.classList.remove('valid');
      testParent.lastElementChild.innerHTML = 'Email should not be blank';
  } if (emailValid === false) {
      testParent.lastElementChild.classList.replace('hint', 'hint.style.display=block');
      testParent.classList.add('not-valid');
      testParent.classList.remove('valid');
      testParent.lastElementChild.innerHTML = 'Email requires an @ sign and a .com suffix';
  } else {
    testParent.classList.add('valid');
    testParent.classList.remove('not-valid');
    testParent.lastElementChild.classList.replace('hint.style.display=block', 'hint');
  }
};

function zipValid (zip) {
const zipValue = zip.value;
const regex = /^(\d{5})$/;
// const regex = /^\d{5}$|^\d{5}-\d{4}$/;
return regex.test(zipValue);
}

function cvvValid (cvv) {
const cvvValue = cvv.value;
const regex = /^(\d{3})$/;
return regex.test(cvvValue);
}

function cardValid (cardNumber) {
const cardValue = cardNumber.value;
const regex = /^[\d]{13,16}$/;
// const regex = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
return regex.test(cardValue);
}

function nameValid(name) {
const nameValue = name.value;
const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
return regex.test(nameValue);
}

//validation check for inputs
form.addEventListener('submit', function (e) {
  emailValid();
  if (nameValid(name) === false) {
  testFail(name);
  e.preventDefault();
} if (nameValid === true) {
  testPass(name);
} if (zipValid(zip) === false && ccActive === true) {
  testFail(zip);
  e.preventDefault();
} if (zipValid(zip) === true && ccActive === true) {
  testPass(zip);
} if (cvvValid(cvv) === false && ccActive === true) {
  testFail(cvv);
  e.preventDefault();
} if (cvvValid(cvv) === true && ccActive === true) {
  testPass(cvv);
} if (cardValid(cardNumber) === false && ccActive === true) {
  testFail(cardNumber);
  e.preventDefault();
} if (cardValid(cardNumber) === true && ccActive === true) {
  testPass(cardNumber);
} if (totalCost === 0) {
  testFail(activities);
  e.preventDefault();
} else {
  testPass(activities);
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



// designSelect.onchange = function() {
// shirtColors.style.display = 'block';
// let allShirts = document.querySelectorAll('[data-theme]');
//
// //sort shirts into proper arrays
// for (let i of allShirts) {
//     let attr = i.getAttribute('data-theme');
//     if (attr === 'js puns') {
//         punShirts.push(i);
//     } else if (attr === 'heart js') {
//         heartShirts.push(i);
//     }
//   }
//
// //makes only correct colors available to pick
// if (this.value === 'js puns') {
//   color.firstElementChild.style.display = 'none';
//   console.log(color.firstElementChild.value);
//   heartShirts.forEach((item) => {
//   item.style.display = "none";
//    });
//   punShirts.forEach((item) => {
//   item.style.display = "block";
//    });
//  } else {
//    heartShirts.forEach((item) => {
//    item.style.display = "block";
//     });
//   punShirts.forEach((item) => {
//   item.style.display = "none";
//    });
//   }
// };
