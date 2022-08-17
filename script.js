// When the button is clicked
// the user is prompted to input / pick:
// variables for user prompts and input
let enter;
let okNumber;
let okSpecial;
let okUpper;
let okLower;
// variables for password parameters
special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// empty array for uppercase after conversion
convert = [];

// function to convert letters from lowercase to uppercase
const toUpper = function (i) {
  return i.toUpperCase();
};
// variable for the lowercase to uppercase conversion
upper = lower.map(toUpper);
// user's selected parameter choices
let chosen;
// generate button
const button = document.getElementById("generate");
//listen for a click and generate password
button.addEventListener("click", function () {
  pass = genPassword();
  document.getElementById("password");
});

// function to generate the password
function genPassword() {
  // prompt user to input password length
  go = parseInt(
    prompt("Please choose a password length between 8 and 128 characters.")
  );
  // make sure that the user has entered a value, and if so, the value is in the 8-128 range
  if (!go) {
    alert(
      "You can't just skip that! Tell me how long you want your password to be."
    );
  } else if (go < 8 || go > 128) {
    go = parseInt(
      prompt("Password length must be between 8 and 128 characters!!")
    );
  } else {
    okUpper = confirm("Will your password have uppercase letters?");
    okLower = confirm("Will your password have lowercase letters?");
    okNumber = confirm("Will your password have numbers?");
    okSpecial = confirm("Will your password have special characters?");
  }
  // make sure the user has selected at least one character parameter
  if (!okNumber && !okSpecial && !okUpper && !okLower) {
    chosen = alert("Your password needs at least one character parameter!");
  }
  // user's chosen parameters
  // if user selects all 4 parameters
  else if (okNumber && okSpecial && okUpper && okLower) {
    chosen = number.concat(special, lower, upper);
  }

  // user selects 3 parameters
  else if (okNumber && okSpecial && okUpper) {
    chosen = number.concat(special, upper);
  } else if (okNumber && okSpecial && okLower) {
    chosen = number.concat(special, lower);
  } else if (okNumber && okUpper && okLower) {
    chosen = number.concat(lower, upper);
  } else if (okSpecial && okUpper && okLower) {
    chosen = special.concat(lower, upper);
  }

  // user selects 2 parameters
  else if (okNumber && okSpecial) {
    chosen = number.concat(special);
  } else if (okNumber && okUpper) {
    chosen = number.concat(upper);
  } else if (okNumber && okLower) {
    chosen = number.concat(lower);
  } else if (okSpecial && okUpper) {
    chosen = special.concat(upper);
  } else if (okSpecial && okLower) {
    chosen = special.concat(lower);
  } else if (okUpper && okLower) {
    chosen = lower.concat(upper);
  }

  // user selects just one parameter
  else if (okNumber) {
    chosen = number;
  } else if (okSpecial) {
    chosen = special;
  } else if (okUpper) {
    chosen = upper;
  } else if (okLower) {
    chosen = convert.concat(upper);
  }

  // variable placeholder for user's specified length
  let passLength = [];

  // random selection of user's confirmed variables in a loop
  for (let i = 0; i < go; i++) {
    let userSelected = chosen[Math.floor(Math.random() * chosen.length)];
    passLength.push(userSelected);
  }
  // join the generated array and convert to string
  let pass = passLength.join("");
  userInput(pass);
  return pass;
}
// password is generated

// then the password is rendered to the screen
function userInput(pass) {
  document.getElementById("password").innerText = pass;
}
