const copyright = document.querySelector(".copyright");

const date = new Date();
copyright.innerHTML = `[  &copy; Copyright, solo mail service ${date.getFullYear()} ]`;
