

$( document ).ready(function() {



var allQuestions = [
    {
    question : "Q.1: What popular sandwich was invented in Trinidad and can be found on almost any street corner?",
   	choices : ["Doubles", "BLT Sandwich", "Roti" ], 
    answer : "Doubles"
    questionNumber : 0,
    correct : 0,
    fact : "Doubles is a common street food in Trinidad and Tobago. It is a sandwich made with two baras (flat fried bread) with curried channa, topped with mango, coconut, kutchela, cucumber, sweet sauce and extra pepper!"
    },

    {
    question : "Q.2: What Trinidad and Tobago festival takes place just before Ash Wednesday each year?", 
    choices : ["Mardi Gras", "Carnival", "Cropover"], 
    answer : "Carnival",
    questionNumber : 1,
    correct : 1,
    fact : "Carnival is an annual event celebrated on the Monday and Tuesday before Ash Wednesday. It is well known for participants' colorful costumes and fun celebrations."
    }

	{
    question : "Q.3: Which famous dance was created in Trinidad and Tobago?", 
    choices : ["Gangnam Style", "Limbo", "Dutty Wine"], 
    answer : "Limbo",
    questionNumber : 2,
    correct : 1,
    fact : "Limbo dance originated as an event that took place at wakes in Trinidad and Tobago. It was popularized by dance pioneer Julia Edwards and her company."
    }

    {
    question : "Q.4: Christmas time in Trinidad and Tobago is full of festivities. What type of music is usually performed?", 
    choices : ["Rhythm n Blues", "Hip Hop", "Parang"], 
    answer : "Parang",
    questionNumber : 3,
    correct : 2,
    fact : "Parang music was brought to Trinidad by Venezuelan migrants. Around Christmas time, there is usually a competition held in Paramin for all parranderos."
    }

    {
    question : "Q.5: The first ever Black Miss Universe came from Trinidad and Tobago.  What was her name?", 
    choices : ["Wendy Fitzwilliam", "Giselle Laronde West", "Janelle Penny Commissiong"], 
    answer : "Janelle Penny Commissiong",
    questionNumber : 4,
    correct : 2,
    fact : "Janelle Penny Commissiong won the title in 1977 at the Miss Universe pageant which was held in the Dominican Republic."
    }
]


/*--- To count the number of User guesses ---*/
	$("#submitButton").on("click", function(e){
		$("#count").html(function(i, val) { return +val+1 });       
});

	
/*--- Display information modal box ---*/
  	$(".score").click(function(){
    	$(".resultPage").fadeIn(1000);
  	});

 /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".resultPage").fadeOut(1000);
  	});

});

