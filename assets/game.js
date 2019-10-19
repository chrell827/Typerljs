$(document).ready(function() {

var numberOfQuestions = 10;
var seconds = 60;
var counter;
var score = 0;

$("#ready-button").on("click",function(){
    $("#intro-container").css({display: "none"});
    $(".trivia").css({display: "block"});
    
    counter = setInterval(countDown,1000);
});

function countDown(){
    $("#timer-text").text(seconds);
    seconds--;

    if(seconds <= -2)
    {
        reset();
        alert("Too bad! You ran out of time.");
    }

}

$("#submit-button").on("click",function(){
    for(var i=1;i <= numberOfQuestions; i++)
    {
        if($("#question"+i+"-answer").attr("value") === $("input[name='question"+i+"']:checked").val())
        {
            score++;
        }
    }

    alert("You scored "+score+" out of 10 points!");
    reset();

});


function reset()
{
    for(var i=1;i <= numberOfQuestions; i++)
    {
        $("#question"+i+"-answer").trigger("reset");
        score = 0;
        clearInterval(counter);
        seconds = 60;
        $("#timer-text").text(seconds);
        $("#intro-container").css({display: "block"});
        $(".trivia").css({display: "none"});
    }
}




});
