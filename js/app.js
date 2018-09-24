$('.digit').on('click', (e) => {
	//grab value from number buttons
	let $buttonVal = $(e.target).text();
	// console.log($buttonVal);

	//now I need a method to display what's been entered

	$('.display').append($buttonVal);

});

//now let's build the enter and clear buttons

$('.enter').on('click', (e) => {
	console.log('enter');//works
	
//enter is going to grab full value of .display 
//its going to run that value as an equation

	let $equationVal = eval($('.display').text());
	console.log($equationVal);

//and append the result to .result

	$('.result').append($equationVal);
//I might come back and make it clear the first .display line too?
//could log the whole equation concatenated w/ = to show equations and results in .result...
//maybe later
});

$('.clear').on('click', (e) => {
	console.log('click'); //works
});