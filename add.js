let name = prompt("Please Enter Your Name");

let gender = prompt("Please Enter Your Gender (male/female)");
if (gender == "male") {
  alert("Welcome Mr. " + name);
} else if (gender == "female") {
  alert("Welcome Ms. " + name);
} else {
  alert("Welcome " + name);
}

let order = confirm(
  "Do you want to order (Donut, Coffee, Ice creame or Bakery)?"
);

let ordername = prompt(
  "what do want to order (Donut, Coffee, Ice creame or Bakery)"
);
alert("Your order is getting prepared");

console.log(name + " " + ordername);
