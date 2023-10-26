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

      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(selectedValue * amount.value).toFixed(2)} ${currencyName}`;
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

      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(selectedValue * amount.value).toFixed(2)} ${currencyName}`;
      para.innerHTML = `$1 = ${currencyName} ${selectedValue}`;
    } else if (amount.value <= 0) {
      myOutput.innerHTML = `Please enter an amount greater than 0`;
    } else if (isNaN(amount.value)) {
      myOutput.innerHTML = `Your input is not a number`;
    } else {
      myOutput.innerHTML = "Currency not found";
    }
  }


