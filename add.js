// let name = prompt("Please Enter Your Name");

// let gender = prompt("Please Enter Your Gender (male/female)");

// function gen() {
//   if (gender == "male") {
//     alert("Welcome Mr. " + name);
//   } else if (gender == "female") {
//     alert("Welcome Ms. " + name);
//   } else {
//     while (gender != "male" || gender != "female") {
//       gender = prompt("Please Enter Your Gender (male/female)");
//       if (gender == "male") {
//         alert("Welcome Mr. " + name);
//         break;
//       } else if (gender == "female") {
//         alert("Welcome Ms. " + name);
//         break;
//       }
//     }
//   }
// }
// gen();

// let order = prompt(
//   "Do you want to order (Donut, Coffee, Ice creame or Bakery) (yes/no)?"
// );

// let ordername = prompt(
//   "what do want to order (Donut, Coffee, Ice creame or Bakery)"
// );
// alert("Your order is getting prepared");

// array = [name, gender, order, ordername];
// console.log("Your order: " + array);

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// console.log(name + " " + ordername);

// // Dom

// const dom = document.getElementById("dom");
// const inputName = document.createElement("p");
// const inputList = document.createElement("ol");
// const inputGender = document.createElement("li");
// const inputOrder = document.createElement("li");
// const inputTypeOrder = document.createElement("li");

// inputName.innerHTML = name;
// inputGender.innerHTML = gender;
// inputOrder.innerHTML = order;
// inputTypeOrder.innerHTML = ordername;

// dom.appendChild(inputName);
// dom.appendChild(inputList);
// inputList.appendChild(inputGender);
// inputList.appendChild(inputOrder);
// inputList.appendChild(inputTypeOrder);

// // Add paregragh

// const home = document.getElementsByClassName("content");
// const para = document.createElement("p");
// const text = document.createTextNode("You can order now the donuts on earth");

// home[0].appendChild(para);
// para.appendChild(text);

//eventTask
let form = document.getElementById("form");
let information = document.getElementById("userInfo");

function submit(event) {
  event.preventDefault();
  let form = event.target;
  let name = form.username.value;
  let age = form.age.value;
  let gender = form.gender.value;
  let order = form.order.value;
  let temp = form.temp.value;
  information.innerHTML =
    "Name: " +
    name +
    "<br/>" +
    "Age: " +
    age +
    "<br/>" +
    "Gender: " +
    gender +
    "<br/>" +
    "Order Type: " +
    order +
    "<br/>" +
    "Temperature: " +
    temp +
    "<br/>";
}

form.addEventListener("submit", submit);
