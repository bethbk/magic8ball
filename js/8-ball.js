$(document).ready(function(){
  
var eightball = {};
var listofAnswers = ["Not a chance", "For sure", "Ask again later", "Maybe", "No way", "Definitely not"];
var questionButton = document.getElementById("questionButton");
  
  $("#answer").hide(); 
   
  eightball.askQuestion = function() {
    
    //make eightball shake 
    $("#8ball").effect("shake");
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
   
    var randomNumber = Math.random();
    var randomNumberfromArray = randomNumber * listofAnswers.length;
    
     console.log(randomNumberfromArray);

    var randomIndexNumber = Math.floor(randomNumberfromArray);
    var randomAnswer = listofAnswers[randomIndexNumber];
    
    $("#answer").text(randomAnswer);
            
     console.log(randomAnswer);
    
     $("#answer").fadeIn(4000);
   };
   
  var onClick = function() {
    
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
    
    //delay prompt a half second
    setTimeout (
      function () {
        //show prompt
      var question = prompt("Ask me a Yes/No question!");
      eightball.askQuestion(question);
      },500);
      
  }
    
  $("#questionButton").click(onClick);
      

});