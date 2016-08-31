

//prompt("Please enter a number ");

$( document ).ready(function() {
	$("button").on("click", function(){
	var userValue = $(".userValue").val();	

for (var counter = userValue; counter <= 100; counter++) {


if (counter % 5 == 0 && counter % 3 == 0)  {
	console.log("FizzBuzz");
}


else if (counter % 3 == 0) {
	console.log("Fizz");
}


else if (counter % 5 == 0) { 
	console.log("Buzz");
}


else {
	console.log(counter);
}

}
});
});
