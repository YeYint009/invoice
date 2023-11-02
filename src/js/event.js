// const fileInput = document.querySelector("#fileInput");
// fileInput.addEventListener("change",() => {
//   console.log(fileInput.files);
// })

// const testForm = document.querySelector("#testForm");
// const mmsLink = document.querySelector("#mmsLink");
// console.log(testForm);

// testForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
//   console.log("U submit");

// });

// mmsLink.addEventListener("click", (event) => {
//   console.log(event);
//   event.preventDefault();
//   console.log("U Click Link");
// });
// window.addEventListener("scroll",() => {
//   console.log("scrolled");
//   console.log(window.scrollY);
// })

// document.addEventListener("mousemove",(event) => {
//   console.clear();
//   console.log(event);
// })

// const btn = document.querySelector("#btn");
// const displayConsole = () => {
//   console.log("hello world");
// };
// btn.addEventListener("click", displayConsole);

// btn.addEventListener("click", () => {
//   console.log("remove eventlistener");
//   btn.removeEventListener("click", displayConsole);
// });

// const ul = document.querySelector("ul");
// const lis = document.querySelectorAll("li");

// // event delegation
// ul.addEventListener("click", (event) => {
//   console.log(event.target.innerText);
// })

// const createLi = (text) => {
//   const li = document.createElement("li");
//   li.className = "border active:bg-neutral-400 p-2";
//   li.innerText = Text;
//   return li;
// };

// lis.forEach((li) => {
//   // console.log(li);

//   li.addEventListener("click", () => {
//     console.log(li.innerText);
//   });
// });
//multi event selector

const heading = document.querySelector("h1");

["click", "mouseover", "mouseout"].forEach((el) => {
  heading.addEventListener(el, () => {
    console.log(heading.innerText);
  });
});