$('button').on('click', (e) => {
	//grab value from number buttons
	let $buttonVal = $(e.target).text();
	console.log($buttonVal);

	//now I need a method to display what's been entered

	$('.display').append(buttonVal);
})