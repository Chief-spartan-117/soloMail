var range = document.getElementById("value");
var log = document.getElementById("range__number");

log.innerHTML = range.value;

range.oninput = function () {
  log.innerHTML = this.value;
};
