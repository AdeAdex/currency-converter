function navDropdown() {
  let x = document.getElementById("navBar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

let txt = "";
var myOptions = document.getElementById("myOptions");
var amount = document.getElementById("amount");
var myOutput = document.getElementById("myOutput");
var para = document.getElementById("para");

function money() {
  if (amount.value == "") {
    myOutput.innerHTML = `The input field can't be empty`;
  } else if (amount.value >= 1) {
    var selectedOption = myOptions.options[myOptions.selectedIndex];
    var selectedValue = parseFloat(selectedOption.value);
    var currencyName = selectedOption.textContent.split("-")[1].trim();

    myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
      selectedValue * amount.value
    ).toFixed(2)} ${currencyName}`;
    para.innerHTML = `$1 = ${currencyName} ${selectedValue}`;
  }
}

function lookup() {
  if (amount.value == "") {
    myOutput.innerHTML = `The input field can't be empty`;
  } else if (amount.value >= 1) {
    var selectedOption = myOptions.options[myOptions.selectedIndex];
    var selectedValue = parseFloat(selectedOption.value);
    var currencyName = selectedOption.textContent.split("-")[1].trim();

    myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
      selectedValue * amount.value
    ).toFixed(2)} ${currencyName}`;
    para.innerHTML = `$1 = ${currencyName} ${selectedValue}`;
  } else if (amount.value <= 0) {
    myOutput.innerHTML = `Please enter an amount greater than 0`;
  } else if (isNaN(amount.value)) {
    myOutput.innerHTML = `Your input is not a number`;
  } else {
    myOutput.innerHTML = "Currency not found";
  }
}


// const selectedOption = document.getElementById('selectedOption');
// const dropdownOptions = document.getElementById('dropdownOptions');
// const optionItems = dropdownOptions.querySelectorAll('li');
// let selectedIdx = -1;

// selectedOption.addEventListener('click', () => {
//   dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
//   if (dropdownOptions.style.display === 'block') {
//     selectedIdx = -1;
//   }
// });

// selectedOption.addEventListener('keydown', (e) => {
//   if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//     e.preventDefault();
//     const isVisible = dropdownOptions.style.display === 'block';
//     if (isVisible) {
//       if (e.key === 'ArrowDown') {
//         selectedIdx = Math.min(selectedIdx + 1, optionItems.length - 1);
//       } else if (e.key === 'ArrowUp') {
//         selectedIdx = Math.max(selectedIdx - 1, 0);
//       }
//       optionItems[selectedIdx].focus();
//     } else {
//       dropdownOptions.style.display = 'block';
//       selectedIdx = 0;
//       optionItems[selectedIdx].focus();
//     }
//   }
// });

// optionItems.forEach((option, index) => {
//   option.addEventListener('click', () => {
//     const selectedValue = option.getAttribute('data-value');
//     selectedOption.innerHTML = option.innerHTML;
//     dropdownOptions.style.display = 'none';
//     money(selectedValue);
//   });

//   option.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowDown') {
//       selectedIdx = Math.min(index + 1, optionItems.length - 1);
//     } else if (e.key === 'ArrowUp') {
//       selectedIdx = Math.max(index - 1, 0);
//     } else if (e.key === 'Enter') {
//       const selectedValue = option.getAttribute('data-value');
//       selectedOption.innerHTML = option.innerHTML;
//       dropdownOptions.style.display = 'none';
//       money(selectedValue);
//     }
//   });
// });
