/* Created by Tivotal */
let section = document.querySelector("section");
let messageBtn = document.querySelector(".profile .button");
let cancelBtns = document.querySelectorAll(".cancel");
let textarea = document.querySelector("textarea");
let sendBtn = document.querySelector(".send");

messageBtn.addEventListener("click", () => {
  section.classList.add("show");
});

cancelBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    section.classList.remove("show");

    textarea.value = "";
  });
});

sendBtn.addEventListener("click", () => {
  if (textarea.value !== "") {
    alert("Message Sent");
    textarea.value = "";
    section.classList.remove("show");
  }
});
