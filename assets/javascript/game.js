var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var startGame = function(){

    $('.crystals').empty();

    var images  = ["../unit-4-game/assets/images/Red.png",
    "../unit-4-game/assets/images/Magenta.png", "../unit-4-game/assets/images/Green.png", "../unit-4-game/assets/images/Blue.png"];
        
    random_result = Math.floor(Math.random() * 101) + 19;

    $("#result").html("Random Number: " + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-random": random
            });
            crystal.css ({
                "background-image":"url('" + images[i] + "')",
                "background-size":"100px",
            })

        $(".crystals").append(crystal);
    
    }

    $("#previous").html("Total Score: " + previous);
}

startGame();

$(document).on("click", ".crystal", function(){
    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous)

    if(previous > random_result){
        lost++;
        $("#losses").html("Losses: " + lost);
        previous = 0;
        startGame();
        $("#previous").html(previous)
       
    }
    else if(previous === random_result){
        win++;
        $("#wins").html("Wins:"+ win);
        previous = 0;
        $("#previous").html(previous)
        startGame();
    }

});


