var typeText = document.querySelector(".type");
var textToBeTypedArr = [
  "Faster than Gmail! ",
  "Anonymous (+_+) ",
  "Faster than Yahoo! ",
];
var index = 0,
  isAdding = true,
  textToBeTypedIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
      if (isAdding) {
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          isAdding = false;
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;
          textToBeTypedIndex =
            (textToBeTypedIndex + 1) % textToBeTypedArr.length;
        } else {
          index--;
        }
      }
      playAnim();
    },
    isAdding ? 120 : 60
  );
}

playAnim();

///////////////////////////////////////////////////////////////////
// Copyright
const copyright = document.querySelector(".copyright");

const date = new Date();
copyright.innerHTML = `[  &copy; Copyright, solo mail service ${date.getFullYear()} ]`;
