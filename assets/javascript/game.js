var userNum = 0;

$(document).ready(function() {

var min=19; 
var max=120; 
var random =Math.floor(Math.random() * (+max - +min)) + +min; 
$(".rN").append(random); 

})