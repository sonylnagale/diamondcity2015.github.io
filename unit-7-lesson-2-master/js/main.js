// Step 1: When the window is resized, add the snazzy class to the body.
// Then resize the browser window to see this in action!
		// Hint: Note that when selecting the window, no quotes are needed around the word window 
		// in the jQuery selector, like we need in other selectors
		// Here's an example:
				// $(window).on('yourEventTypeWillGoHere', function () {

				// });
		// You'll want to replace yourEventTypeWillGoHere with the type of event you're listening for.
$(window).on('resize', function()  {
	if ($(window).width() > 300)					{
	$('body').addClass('snazzy');
}

});

// STEP 2. When the user's mouse enters #trigger (the yellow square)
	// a) Add a <li> to the beginning of #myList that contains the text "1" (Hint: you'll need to use the prepend jquery method)
	// b) Add a <li> to the end of #myList that contains the text "5" (Hint: you'll need to use the append jquery method)
$('#trigger').on('mouseenter', function()  {
	console.log('Hello!');
   $('#myList').prepend('<li>1</li>');
    $('#myList').append('<li>5</li>');
   $('#trigger').off("mouseenter");

});


//alternate step 2 method using .one 
//$('#trigger').one('mouseenter', function()  {
//	console.log('Hello!');
//  $('#myList').prepend('<li>1</li>');
//   $('#myList').append('<li>5</li>');


// STEP 3: When the user scrolls down the window (hint our jquery selector will be $(window) like in example #1)
	// a) Change the text in the h1 to "Scroll time!"
	// b) Update the src for the img to 'images/outdoors.jpeg'
$(window).on('scroll', function() {
	$('h1').text('Scroll Time!');
	$('img').attr('src', 'images/outdoors.jpeg');


});