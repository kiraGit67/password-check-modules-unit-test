"use strict";

export function togglePasswords(input1, input2, element) {
  if (input1.getAttribute("type") === "password") {
    input1.setAttribute("type", "text");
    input2.setAttribute("type", "text");
    element.innerText = "Hide Passwords";
  } else {
    input1.setAttribute("type", "password");
    input2.setAttribute("type", "password");
    element.innerText = "Show Passwords";
  }
}
