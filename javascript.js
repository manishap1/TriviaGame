    $('#startOver').click(function() {
                 clearInterval(interval);
                 count=0;
                 CorrectAns=0;
                 wrongAns=0;
                 addQuestion();
                 seconds_left=30;
                timer();
                                    });
     var a =[{
                "question":"What is HTML?",
                "answers": 
                 		     ["Hypertext Markup Language", "Hightext Markup Language", "Markup Language", "Programing Language"]
                     
              }, 
      
              {
     		         "question":"What is CSS?",
     		         "answers": 
     		                 ["Cascading Style Sheets","Computer Style Sheets","Creative Style Sheets","Colorful Style Sheets"]
              },
     
              {
                "question":"Which of the following is correct?",
                "answers":
                          ["jQuery is a JavaScript Library",
                            "jQuery is a JSON Library","HTML : Hightext Markup Language","CSS : Computer Style Sheets"]
  
              },
              { 
                "question":
                "The Bootstrap grid system is based on how many columns?",
                "answers":
                ["9","3","6","12"]
              }];

var correct = ["Hypertext Markup Language","Cascading Style Sheets","jQuery is a JavaScript Library","12"];
var audio = new Audio("https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90");
var interval;
var count=0;
var CorrectAns=0;
var wrongAns=0;
//var timeOutFunction;
addQuestion();
timer();

        
        // timeOutFunction = setTimeout(function(){ thirtySeconds(); }, 30000);
        //timer();
        // setTimeout(function(){ sixtySeconds(); }, 60000);
        // setTimeout(function(){ nintySecond(); }, 90000);
        // //setTimeout(function(){ oneTwenty(); }, 120000);
        // setTimeout(function(){ timeUp(); }, 120000);
var seconds_left = 30;    
function timer(){
  $('#endMessge').hide();
                        $('#box').show();
                        
  	             interval = setInterval(function() {
                 var left = --seconds_left;
    
                $("#time-left").html("Time Remaining : "+ left);
                if (seconds_left <= 0)
    {    
                //document.getElementById('time-left').innerHTML = 'You are ready';
                //seconds_left = 30;
                //clearInterval(interval);
                resetQuestionTimeoutFunction();
                }
                }, 1000);
    }

function resetQuestionTimeoutFunction() {
                  //   clearInterval(timeOutFunction);
                  //            if(count == 4) {
                  // timeOutFunction = setTimeout(function(){ timeUp(); }, 30000);
                  //          } else {
                  // timeOutFunction = setTimeout(function(){ thirtySeconds(); }, 30000);  
                  //          }
          if(count < a.length-1) {
                        seconds_left=31;
                        count++;
                        addQuestion();
                        } else{
                                timeUp();
                              }
                        }

function addQuestion() {
                      	$('#question').html("<h3><u>"+a[count]['question']+"</u></h3>");
                      	$('#ans1').text( a[count]["answers"][0] );
                      	$('#ans2').text( a[count]["answers"][1] );
                      	$('#ans3').text( a[count]["answers"][2] );
                      	$('#ans4').text( a[count]["answers"][3] );

                        }

$("body").on("click", ".ans", function(event){
  
  
                        clickedAnswer = $(this).text();
                        if(clickedAnswer === correct[count]) {
                                   // alert("correct");
                                    CorrectAns++;
                          
                        } else {
                                    wrongAns++;
                                    //alert("wrong answer!");
                         
                        }
                         resetQuestionTimeoutFunction();


                        });

function thirtySeconds() {
                        count++;
                        addQuestion();
                       //$("#question").append($("<h2>Time over</h2>"));
                        console.log("30 seconds done1");  
                          }
function sixtySeconds() {

                         count++;
                         addQuestion();
                         console.log("60 left");
                        }
function nintySecond() {

                        count++;
                        addQuestion();
                        console.log("90 left");
                        }


      //function oneTwenty() {

        //count++;
         //addQuestion();
        //audio.play();
        //console.log("120 left");
        
     // }

     
function timeUp(){
        
                        $("#endMessge").html("<h2><u>Result</u></h2><br>");
                        $("#endMessge").append("<h3>Correct answers : "+CorrectAns+ "</h3>");
                        $("#endMessge").append("<h3>Wrong answers : "+wrongAns +"</h3>");
                        $('#endMessge').show();
                        $('#box').hide();
                        console.log(" timeUp");
                        clearInterval(interval);

                  }
      //displayQuestion();
$(".ans").hover(function(){
    $(this).css("background-color", "rgba(66, 118, 229, 0.74)");
    }, function(){
    $(this).css("background-color", "rgba(25, 41, 76, 0.84)");
});      