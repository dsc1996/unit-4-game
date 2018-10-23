var userNum = 0;

$(document).ready(function() {

var min=19; 
var max=120; 
var random =Math.floor(Math.random() * (+max - +min)) + +min; 
$(".rN").append(random); 
});

$(document).ready(function(){
    var min=1; 
    var max=12; 
    var value =Math.floor(Math.random() * (+max - +min)) + +min; 
        $(document).on("click", ".crystal1", function(){
            $(".userNum").append(value);
        })
   console.log(value);
});

$(document).ready(function(){
    var min=1; 
    var max=12; 
    var value =Math.floor(Math.random() * (+max - +min)) + +min; 
        $(document).on("click", ".crystal2", function(){
            $(".userNum").append(value);
        })
   console.log(value);
});

$(document).ready(function(){
    var min=1; 
    var max=12; 
    var value =Math.floor(Math.random() * (+max - +min)) + +min; 
        $(document).on("click", ".crystal3", function(){
            $(".userNum").append(value);
        })
   console.log(value);
});

$(document).ready(function(){
    var min=1; 
    var max=12; 
    var value =Math.floor(Math.random() * (+max - +min)) + +min; 
        $(document).on("click", ".crystal4", function(){
            $(".userNum").append(value);
        })
   console.log(value);
});

