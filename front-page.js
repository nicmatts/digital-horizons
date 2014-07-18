$(document).ready(function($) {
	var imgUrl = "http://library.ndsu.edu/static/dh-images/";
	var ndsuImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

	$(".concordia").fadeIn(500).css({'display': 'inline-block'});
	$(".ndshs").fadeIn(1000).css({'display': 'inline-block'});
	$(".ndsl").fadeIn(1500).css({'display': 'inline-block'});
	$(".ndsu").fadeIn(2000).css({'background-image': "url(http://library.ndsu.edu/static/dh-images/ndsu/" + ndsuImages[Math.floor(Math.random() * ndsuImages.length)] + ")", 'display': 'inline-block'});
	$(".ppb").fadeIn(2500).css({'display': 'inline-block'});
	$(".associates").fadeIn(3000).css({'display': 'inline-block'});
	
	
	// $( "#ndsu" ).fadeIn( 3000, function() {
	// 	$('#ndsu').css({'background-color': 'red'});
	// 	$(this).css({'background-image': "url(http://library.ndsu.edu/static/dh-images/ndsu/" + ndsuImages[Math.floor(Math.random() * ndsuImages.length)] + ")"});
	// });
	
	//$('#ndsu').css({'background-color': 'red'});
});