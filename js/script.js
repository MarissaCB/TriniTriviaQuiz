

$( document ).ready(function() {



var allQuestions = [
    {
    question : "Q.1: What popular sandwich was invented in Trinidad and can be found on almost any street corner?",
   	choices : ["Doubles", "BLT Sandwich", "Roti" ], 
    answer : "Doubles",
    fact : "Doubles is a common street food in Trinidad and Tobago. It is a sandwich made with two baras (flat fried bread) with curried channa, topped with mango, coconut, kutchela, cucumber, sweet sauce and extra pepper!"
    },

    {
    question : "Q.2: What Trinidad and Tobago festival takes place just before Ash Wednesday each year?", 
    choices : ["Mardi Gras", "Carnival", "Cropover"], 
    answer : "Carnival",
    fact : "Carnival is an annual event celebrated on the Monday and Tuesday before Ash Wednesday. It is well known for participants' colorful costumes and fun celebrations."
    },

	{
    question : "Q.3: Which famous dance was created in Trinidad and Tobago?", 
    choices : ["Gangnam Style", "Limbo", "Dutty Wine"], 
    answer : "Limbo",
    fact : "Limbo dance originated as an event that took place at wakes in Trinidad and Tobago. It was popularized by dance pioneer Julia Edwards and her company."
    },

    {
    question : "Q.4: Christmas time in Trinidad and Tobago is full of festivities. What type of music is usually performed?", 
    choices : ["Rhythm n Blues", "Hip Hop", "Parang"], 
    answer : "Parang",
    fact : "Parang music was brought to Trinidad by Venezuelan migrants. Around Christmas time, there is usually a competition held in Paramin for all parranderos."
    },

    {
    question : "Q.5: The first ever Black Miss Universe came from Trinidad and Tobago.  What was her name?", 
    choices : ["Wendy Fitzwilliam", "Giselle Laronde West", "Janelle Penny Commissiong"], 
    answer : "Janelle Penny Commissiong",
    fact : "Janelle Penny Commissiong won the title in 1977 at the Miss Universe pageant which was held in the Dominican Republic."
    }
]

/*--- To change and count questions---*/
var userCorrect = 0;
var correctAnswer = 0;
var questionNumber = 0;
var questionTotal = allQuestions.length;


function createQuestion() {
    $(".question").text(allQuestions[questionNumber].question);
    $(".count").text("Q" + (questionNumber+1) + " of " + questionTotal);
    var choicesTot = allQuestions[questionNumber].choices.length;
    console.log(choicesTot);
    console.log(allQuestions[questionNumber].question);
    $('#answer_holder').empty();
    for (var i = 0; i < choicesTot; i++) {
        $('#answer_holder').append("<li><input type='radio' name='option' value='" +allQuestions[questionNumber].choices[i]+"' id='option0'>" + allQuestions[questionNumber].choices[i] + "</li>");
    }
}

createQuestion();
 

    $("#submitButton").on("click", function(e){
    e.preventDefault();
    console.log(allQuestions[questionNumber].answer);
    var correctAnswer = allQuestions[questionNumber].answer;
    var userGuess = $('input[name=option]:checked').val();
    console.log(userGuess);
    if (correctAnswer == userGuess) {
    $("#feedbackYes").show();
    $("#feedbackNo").hide();
}

    else {
    $("#feedbackNo").show();
    $("#feedbackYes").hide();
}  
    $("#factInfo").text(allQuestions[questionNumber].fact);

    questionNumber++;
    createQuestion();

});



/*--- To count correct answers

    $("#submitButton").on("click", function(){
    if (questionNumber == questionTotal) {
    $('#userCount').text("You scored " + userCorrect + " out of " + questionTotal);
}
    else {
            questionNumber++;
            createQuestion();
        } 

});
---*/

/*--- To count questions

    $("#submitButton").on("click", function(){
    if (questionNumber == questionTotal) {
    $('#userCount').text("You scored " + userCorrect + " out of " + questionTotal);
}
    else {
            questionNumber++;
            createQuestion();
        } 

});
---*/


/*--- Display information modal box ---*/
  	$(".score").click(function(){
    	$(".resultPage").fadeIn(1000);
  	});

 /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".resultPage").fadeOut(1000);

});


});


/*--- To start a new game    
    $("a.close").on("click", function(e){
    
    e.preventDefault();
    
    function createQuestion() {
    }
        $("#count").html("0");
 }); 
$(".song").append(audio here);
<audio controls> <source src="trinisong.mp3" type="audio/mpeg"> </audio>
---*/  



