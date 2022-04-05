// console.log("Hello from src/index.js!");

// selecting element by ID
// let studentsHeader = document.getElementById("students-header");
// querySelector
// let studentsHeader = document.querySelector("#students-header");
// console.log(studentsHeader);
// let studentsList = document.querySelector(".students");
// console.log(studentsList);
//append content (insertAdjacentHTML)
// studentsList.insertAdjacentHTML(
//   "afterbegin",
//   '<li class="student list-group-item">Orkun</li>'
// );
// query selector from the selected element
// let cheri = studentsList.querySelector(".student");
// let selectedStudent = document.querySelector(".student.selected");
// console.log(selectedStudent);
// console.log(cheri);
// selecting several elements
// let students = document.querySelectorAll(".student");
// console.log(students);
// itterate over elements (NodeList)
// students.forEach((e) => {
//   // manipulate style of an element
//   // e.style.display = "none";
//   // add/remove class (classList)
//   // e.classList.add("selected");
//   // e.classList.remove("selected");
//   e.classList.toggle("selected");

//   console.log(e);
// });
// read/write inputs
// let input = document.getElementById("email-input");
// // console.log(input.value);
// input.value = "";
// input.placeholder = "Your email";

// extract text (innerText, innerHTML)
// let students = document.querySelectorAll(".student");
// students.forEach((e) => {
//   // console.log(e.innerText);
//   // e.innerText = `Hello, ${e.innerText}!`;
//   console.log(e.innerHTML);
// });
// let studentsList = document.querySelector(".students");
// console.log(studentsList.innerHTML);
// studentsList.innerHTML = '<div class="selected"> Hello, students!</div>';
// extract link (href value)
// let link = document.querySelector("a");
// console.log(link);
// console.log(link.href);
// console.log(link.attributes.href.value);

// dataset
// let students = document.querySelectorAll(".student");
// students.forEach((e) => {
//   console.log(e.dataset.uid);
// });
// events

// eventListener
// document.addEventListener("click", (e) => console.log("Click", e));

// callback
// demo onclick event for the students

let students = document.querySelectorAll(".student");
students.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    // event.currentTarget.classList.toggle("selected");
  });
});
