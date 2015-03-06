/**************************************
FILENAME: 				index.js JAVASCRIPT FILE
AUTHOR: 					ERIC SCOTT PHUNG
PURPOSE: 					JAVSCRIPT FOR HOME PAGE (HTML5)
CREATED:
MODIFIED:
*************************************/

$(document).ready(function(argument){
	// default custom events
	$('.imgShake').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	}); // end IMAGE SHake EVENT

	// hide everything


	$(".homePage").hide(50); // hide home page stuff
	$(".aboutPageContent").hide(50); // hide home page stuff


	//..javascript for page body goes here


	$('#mytext').popover();
	$('#name').popover();











	// CLICK FUNCTIONS!!!!!!!

	$(".aboutPageBtn").click(function(){
		//$(this).append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'); // add checkmark
		$("footer").hide(760);// hide form
		$(".homePage").hide(760); // hide home page stuff
		$(".aboutPageContent").show(760)


	}); // end about page btn function






	// on 'Home' btn click
	$(".homePageBtn").click(function(){
		//$("form").fadeOut('45', function() {});// hide form
		$("footer").hide(760);// hide form
		//$(this).append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
		$(".homePage").show(760); // end fade in for home page elems
		$(".aboutPageContent").hide(760)
	}); // end home page btn function



	$('.highlight').hover(function() {
		$(this).css("background-color", "#FDB900");
	}, function() {
		$(this).css("background-color", "white");
	}); // end IMAGE SHake EVENT





	$(".hideBtn").click(function(){
		//$("form").fadeOut('45', function() {});// hide form
		$(".btnNotify").hide('45');// hide form Btn
		//alert("Thanks!!!")
	}); // end hide btn function







	$(".submitBtn").one('click', function(){
		$(".contactPageBtn").append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'); // add checkmark
	}); // end submit btn click





























});// end doc ready









