

$( document ).ready(function() {


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

