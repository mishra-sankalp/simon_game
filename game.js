var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var keydo=false;
var level=0;

//level change function
$(document).keydown(function(){
  if(!keydo){
      $("#level-title").text("level "+level);
      nextSequence();
      keydo=true;
      playSound("Extreme-Sport-Trap-Music-PISTA");
  }
});

//user clicked function
$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});
//checkAnswer
function checkAnswer(currentLevel)
{
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
if (userClickedPattern.length===gamePattern.length){
  setTimeout(function(){
    nextSequence();
  },1000);
}
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
      startOver();
  }
}
//next sequence
function nextSequence(){
 userClickedPattern=[];
  level++;
  $("#level-title").text("Level "+level);

  var randomNumber=Math.floor(Math.random()*4);

    var randomChosenColor=buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
//playsound
function playSound(name){
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}

//animation on clicking button
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
  },100);
}



//startOver
function startOver(){
  level=0;
  gamePattern=[];
  keydo=false;
  // pauseAudio("Extreme-Sport-Trap-Music-PISTA");
  playSound("126296798");
}
