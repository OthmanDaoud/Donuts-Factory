let name = prompt("Please Enter Your Name");

let gender = prompt("Please Enter Your Gender (male/female)");
if (gender == "male") {
  alert("Welcome Mr. " + name);
} else if (gender == "female") {
  alert("Welcome Ms. " + name);
} else {
  while (gender != "male" || gender != "female") {
    gender = prompt("Please Enter Your Gender (male/female)");
    if (gender == "male") {
      alert("Welcome Mr. " + name);
      break;
    } else if (gender == "female") {
      alert("Welcome Ms. " + name);
      break;
    }
  }
}

let order = prompt(
  "Do you want to order (Donut, Coffee, Ice creame or Bakery) (yes/no)?"
);

let ordername = prompt(
  "what do want to order (Donut, Coffee, Ice creame or Bakery)"
);
alert("Your order is getting prepared");

array = [name, gender, order, ordername];
console.log("Your order: " + array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// console.log(name + " " + ordername);
