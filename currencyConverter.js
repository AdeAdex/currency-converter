function navDropdown() {
  let x = document.getElementById("navBar");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

let txt = "";
function money() {
  if (amount.value == "") {
    myOutput.innerHTML = `The input field can't be empty`;
  } else if (amount.value >= 1) {
    if (myOptions.value == 0.95) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Euros")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 795.43) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Nigeria Naira")}`;
      para.innerHTML = `$1 = ₦  ${myOptions.value}`;
    } else if (myOptions.value == 0.82) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "British Pound")}`;
      para.innerHTML = `$1 = £  ${myOptions.value}`;
    } else if (myOptions.value == 7.31) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Chinese Yuan")}`;
      para.innerHTML = `$1 = ¥  ${myOptions.value}`;
    } else if (myOptions.value == 30.93) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Egyptian Pound")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.72) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Japanese Yen")}`;
      para.innerHTML = `$1 = ¥  ${myOptions.value}`;
    } else if (myOptions.value == 1.45) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Canadian Dollar")}`;
      para.innerHTML = `$1 = CAD  ${myOptions.value}`;
    } else if (myOptions.value == 0.69) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Australian Dollar")}`;
      para.innerHTML = `$1 = AUD  ${myOptions.value}`;
    } else if (myOptions.value == 0.88) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Swiss Franc")}`;
      para.innerHTML = `$1 = CHF  ${myOptions.value}`;
    } else if (myOptions.value == 0.11) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Indian Rupee")}`;
      para.innerHTML = `$1 = INR  ${myOptions.value}`;
    } else if (myOptions.value == 0.085) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Malaysian Ringgit")}`;
      para.innerHTML = `$1 = MYR  ${myOptions.value}`;
    } else if (myOptions.value == 0.16) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Singapore Dollar")}`;
      para.innerHTML = `$1 = SGD  ${myOptions.value}`;
    } else if (myOptions.value == 0.15) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Hong Kong Dollar")}`;
      para.innerHTML = `$1 = HKD  ${myOptions.value}`;
    } else if (myOptions.value == 0.019) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "United Arab Emirates Dirham")}`;
      para.innerHTML = `$1 = AED  ${myOptions.value}`;
    } else if (myOptions.value == 0.72) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Thai Baht")}`;
      para.innerHTML = `$1 = THB  ${myOptions.value}`;
    } else if (myOptions.value == 0.19) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Israeli New Shekel")}`;
      para.innerHTML = `$1 = ILS  ${myOptions.value}`;
    } else if (myOptions.value == 0.0058) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Qatari Riyal")}`;
      para.innerHTML = `$1 = QAR  ${myOptions.value}`;
    } else if (myOptions.value == 1.33) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Swedish Krona")}`;
      para.innerHTML = `$1 = SEK  ${myOptions.value}`;
    } else if (myOptions.value == 0.21) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Polish Zloty")}`;
      para.innerHTML = `$1 = PLN  ${myOptions.value}`;
    } else if (myOptions.value == 1.16) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Danish Krone")}`;
      para.innerHTML = `$1 = DKK  ${myOptions.value}`;
    } else if (myOptions.value == 1.24) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Norwegian Krone")}`;
      para.innerHTML = `$1 = NOK  ${myOptions.value}`;
    } else if (myOptions.value == 2.67) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Egyptian Pound")}`;
      para.innerHTML = `$1 = EGP  ${myOptions.value}`;
    } else if (myOptions.value == 0.77) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Mexican Peso")}`;
      para.innerHTML = `$1 = MXN  ${myOptions.value}`;
    } else if (myOptions.value == 0.014) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Philippine Peso")}`;
      para.innerHTML = `$1 = PHP  ${myOptions.value}`;
    } else if (myOptions.value == 0.34) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Thai Baht")}`;
      para.innerHTML = `$1 = THB  ${myOptions.value}`;
    } else if (myOptions.value == 0.059) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Turkish Lira")}`;
      para.innerHTML = `$1 = TRY  ${myOptions.value}`;
    } else if (myOptions.value == 0.17) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Polish Zloty")}`;
      para.innerHTML = `$1 = PLN  ${myOptions.value}`;
    } else if (myOptions.value == 0.0001) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Vietnamese Dong")}`;
      para.innerHTML = `$1 = VND  ${myOptions.value}`;
    } else if (myOptions.value == 1.01) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Indonesian Rupiah")}`;
      para.innerHTML = `$1 = IDR  ${myOptions.value}`;
    } else if (myOptions.value == 3.82) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Kenyan Shilling")}`;
      para.innerHTML = `$1 = KES  ${myOptions.value}`;
    } else if (myOptions.value == 0.19) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Netherlands Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.16) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Spain Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.77) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Ireland Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.88) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Italy Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.74) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Greece Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.71) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Austria Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.72) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Swedish Krona")}`;
      para.innerHTML = `$1 = SEK  ${myOptions.value}`;
    }
  }
}



function lookup() {
  if (amount.value == "") {
    myOutput.innerHTML = `The input field can't be empty`;
  } else if (amount.value >= 1) {
    if (myOptions.value == 0.95) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Euros")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 795.43) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Nigeria Naira")}`;
      para.innerHTML = `$1 = ₦  ${myOptions.value}`;
    } else if (myOptions.value == 0.82) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "British Pound")}`;
      para.innerHTML = `$1 = £  ${myOptions.value}`;
    } else if (myOptions.value == 7.31) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Chinese Yuan")}`;
      para.innerHTML = `$1 = ¥  ${myOptions.value}`;
    } else if (myOptions.value == 30.93) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Egyptian Pound")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.72) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Japanese Yen")}`;
      para.innerHTML = `$1 = ¥  ${myOptions.value}`;
    } else if (myOptions.value == 1.45) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Canadian Dollar")}`;
      para.innerHTML = `$1 = CAD  ${myOptions.value}`;
    } else if (myOptions.value == 0.69) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Australian Dollar")}`;
      para.innerHTML = `$1 = AUD  ${myOptions.value}`;
    } else if (myOptions.value == 0.88) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Swiss Franc")}`;
      para.innerHTML = `$1 = CHF  ${myOptions.value}`;
    } else if (myOptions.value == 0.11) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Indian Rupee")}`;
      para.innerHTML = `$1 = INR  ${myOptions.value}`;
    } else if (myOptions.value == 0.085) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Malaysian Ringgit")}`;
      para.innerHTML = `$1 = MYR  ${myOptions.value}`;
    } else if (myOptions.value == 0.16) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Singapore Dollar")}`;
      para.innerHTML = `$1 = SGD  ${myOptions.value}`;
    } else if (myOptions.value == 0.15) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Hong Kong Dollar")}`;
      para.innerHTML = `$1 = HKD  ${myOptions.value}`;
    } else if (myOptions.value == 0.019) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "United Arab Emirates Dirham")}`;
      para.innerHTML = `$1 = AED  ${myOptions.value}`;
    } else if (myOptions.value == 0.72) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Thai Baht")}`;
      para.innerHTML = `$1 = THB  ${myOptions.value}`;
    } else if (myOptions.value == 0.19) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Israeli New Shekel")}`;
      para.innerHTML = `$1 = ILS  ${myOptions.value}`;
    } else if (myOptions.value == 0.0058) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Qatari Riyal")}`;
      para.innerHTML = `$1 = QAR  ${myOptions.value}`;
    } else if (myOptions.value == 1.33) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Swedish Krona")}`;
      para.innerHTML = `$1 = SEK  ${myOptions.value}`;
    } else if (myOptions.value == 0.21) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Polish Zloty")}`;
      para.innerHTML = `$1 = PLN  ${myOptions.value}`;
    } else if (myOptions.value == 1.16) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} ${(txt = "Danish Krone")}`;
      para.innerHTML = `$1 = DKK  ${myOptions.value}`;
    } else if (myOptions.value == 1.24) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Norwegian Krone")}`;
      para.innerHTML = `$1 = NOK  ${myOptions.value}`;
    } else if (myOptions.value == 2.67) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Egyptian Pound")}`;
      para.innerHTML = `$1 = EGP  ${myOptions.value}`;
    } else if (myOptions.value == 0.77) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Mexican Peso")}`;
      para.innerHTML = `$1 = MXN  ${myOptions.value}`;
    } else if (myOptions.value == 0.014) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Philippine Peso")}`;
      para.innerHTML = `$1 = PHP  ${myOptions.value}`;
    } else if (myOptions.value == 0.34) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Thai Baht")}`;
      para.innerHTML = `$1 = THB  ${myOptions.value}`;
    } else if (myOptions.value == 0.059) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Turkish Lira")}`;
      para.innerHTML = `$1 = TRY  ${myOptions.value}`;
    } else if (myOptions.value == 0.17) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Polish Zloty")}`;
      para.innerHTML = `$1 = PLN  ${myOptions.value}`;
    } else if (myOptions.value == 0.0001) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Vietnamese Dong")}`;
      para.innerHTML = `$1 = VND  ${myOptions.value}`;
    } else if (myOptions.value == 1.01) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Indonesian Rupiah")}`;
      para.innerHTML = `$1 = IDR  ${myOptions.value}`;
    } else if (myOptions.value == 3.82) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Kenyan Shilling")}`;
      para.innerHTML = `$1 = KES  ${myOptions.value}`;
    } else if (myOptions.value == 0.19) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Netherlands Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.16) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Spain Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.77) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Ireland Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.88) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Italy Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.74) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Greece Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else if (myOptions.value == 0.71) {
      myOutput.innerHTML = `${amount.value} US dollar is equivalent to ${(
        myOptions.value * amount.value
      ).toFixed(2)} {(txt = "Austria Euro")}`;
      para.innerHTML = `$1 = €  ${myOptions.value}`;
    } else {
      myOutput.innerHTML = "Currency not found";
    }
  } else if (amount.value <= 0) {
    myOutput.innerHTML = `Please enter an amount greater than 0`;
  } else if (isNaN) {
    myOutput.innerHTML = `Your input is not a number`;
  }
}



