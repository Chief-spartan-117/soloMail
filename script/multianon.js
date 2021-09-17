var range = document.getElementById('value');
var log = document.getElementById('vp');

log.innerHTML = range.value;

range.oninput = function(){
	log.innerHTML = this.value;
}