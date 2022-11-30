function navDropdown() {
  let x = document.getElementById("navBar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
};

let txt = ""
function money() {
  if (amount.value == "") {
    myOutput.innerHTML = `The cant be empty`;
  } else if (amount.value >= 1) {
    if (myOptions.value == 0.96) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Euros"}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 442.66) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Nigeria Naira"}`;
      para.innerHTML = `$1 = ₦  ${myOptions.value}`;
    } else if (myOptions.value == 0.84) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="British Pound"}`;
      para.innerHTML = `$1 = £  ${myOptions.value}`;
    } else if (myOptions.value == 7.11) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Chinese Yuan"}`;
      para.innerHTML = `$1 = ¥  ${myOptions.value}`;
    } else if (myOptions.value == 24.54) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Egyptian Pound"}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    }
  }
 
}



function lookup() {
  if (amount.value == "") {
    myOutput.innerHTML = `The input field cant be empty`;
  } else if (amount.value >= 1) {
    if (myOptions.value == 0.96) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Euros"}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 442.66) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Nigeria Naira"}`;
      para.innerHTML = `$1 = ₦  ${myOptions.value}`;
    } else if (myOptions.value == 0.84) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="British Pound"}`;
      para.innerHTML = `$1 = £  ${myOptions.value}`;
    } else if (myOptions.value == 7.11) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Chinese Yuan"}`;
      para.innerHTML = `$1 = ¥  ${myOptions.value}`;
    } else if (myOptions.value == 24.54) {
      myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(myOptions.value * amount.value).toFixed(2)} ${txt="Egyptian Pound"}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    }
  } else if (amount.value <= 0) {
    myOutput.innerHTML = `Please enter an amount grater than 0`
  } else if (isNaN) {
    myOutput.innerHTML = `Your input is not a number`;
  }
}





/*
let list = document.querySelectorAll(".list-country option");
function search (){
  for(let i = 0; i < list.length; i += 1){
   if(list[i].innerText.toLowerCase().includes(amountFrom.value.toLowerCase())){
     list[i].style.display = "block";
   }else{
     list[i].style.display = "none";
   }
  }

  if (amountFrom.value.toLowerCase() === "") {
    document.getElementById("listCountry").style.display = "none";
  } else {
    document.getElementById("listCountry").style.display = "block";
  }
}
amountFrom.addEventListener('input', search);*/



//let eu = (euroRate * amount.value).toFixed(2) United Kingdom Euro";
// var euroRate = 0.96;
// var nairaRate = 442.66;
// var britishPoundRate = 0.84;
// var yuanRate = 7.11;
// var egyptianPoundRate = 24.54;
// function convertTOEuro() {
//   if (euroRate === 0.96) {
//     myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(euroRate * amount.value).toFixed(2)} Euros`;
//     para.innerHTML = `$1 = €  ${euroRate}`; 
//   }
// };

// function convertToNaira() {
//   if (amount.value >= 1) {
//     myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(nairaRate * amount.value).toFixed(2)} Nigerian Naira`;
//     para.innerHTML = `$1 = ₦  ${nairaRate}`; 
//   } else if (amount.value === "") {
//     myOutput.innerHTML = `The field cant be empty`;
//   }
// };

// function convertToBritishPound() {
//   if (britishPoundRate === 0.84) {
//     myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(britishPoundRate * amount.value).toFixed(2)} British Pound`;
//     para.innerHTML = `$1 = £ ${britishPoundRate}`  
//   } else if (amount.value === "") {
//     myOutput.innerHTML = `The field cant be empty`;
//   }
// };

// function convertToYuan() {
//   if (yuanRate === 7.11) {
//     myOutput.innerHTML = `${amount.value} US dollar is eqivallent to  ${(yuanRate * amount.value).toFixed(2)} Chinese Yuan`;
//     para.innerHTML = `$1 = ¥ ${yuanRate}`;
//   } else if (amount.value === "") {
//     myOutput.innerHTML = `The field cant be empty`;
//   }
// };

// function convertToEgyptianPound() {
//   if (egyptianPoundRate === 24.54) {
//     myOutput.innerHTML = `${amount.value} US dollar is eqivallent to ${(egyptianPoundRate * amount.value).toFixed(2)} Egyptian Pound`;
//     para.innerHTML = `$1 = €  ${egyptianPoundRate}`; 
//   }
// };
