/**************************************
FILENAME: 				index.js JAVASCRIPT FILE
AUTHOR: 					ERIC SCOTT PHUNG
PURPOSE: 					JAVSCRIPT FOR HOME PAGE (HTML5)
CREATED:
MODIFIED:
*************************************/

$(document).ready(function(argument){


/* form validation plugin */
$.fn.goValidate = function() {
    var $form = this,
        $inputs = $form.find('input:text');

    var validators = {
        name: {
            regex: /^[A-Za-z]{3,}$/
        },
        pass: {
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        },
        email: {
            regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
        },
        phone: {
            regex: /^[2-9]\d{2}-\d{3}-\d{4}$/,
        }
    };
    var validate = function(klass, value) {
        var isValid = true,
            error = '';

        if (!value && /required/.test(klass)) {
            error = 'This field is required';
            isValid = false;
        } else {
            klass = klass.split(/\s/);
            $.each(klass, function(i, k){
                if (validators[k]) {
                    if (value && !validators[k].regex.test(value)) {
                        isValid = false;
                        error = validators[k].error;
                    }
                }
            });
        }
        return {
            isValid: isValid,
            error: error
        }
    };
    var showError = function($input) {
        var klass = $input.attr('class'),
            value = $input.val(),
            test = validate(klass, value);

        $input.removeClass('invalid');
        $('#form-error').addClass('hide');

        if (!test.isValid) {
            $input.addClass('invalid');

            if(typeof $input.data("shown") == "undefined" || $input.data("shown") == false){
               $input.popover('show');
            }

        }
      else {
        $input.popover('hide');
      }
    };

    $inputs.keyup(function() {
        showError($(this));
    });

    $inputs.on('shown.bs.popover', function () {
  		$(this).data("shown",true);
	});

    $inputs.on('hidden.bs.popover', function () {
  		$(this).data("shown",false);
	});

    $form.submit(function(e) {

        $inputs.each(function() { /* test each input */
        	if ($(this).is('.required') || $(this).hasClass('invalid')) {
            	showError($(this));
        	}
    	});
        if ($form.find('input.invalid').length) { /* form is not valid */
        	e.preventDefault();
            $('#form-error').toggleClass('hide');
        }
    });
    return this;
};
$('form').goValidate();


 $(function() {
//twitter bootstrap script
	$("button#submit").click(function(){
	        $.ajax({
    	type: "POST",
	url: "process.php",
	data: $('form.contact').serialize(),
        	success: function(msg){
                 $("#thanks").html(msg)
        $("#form-content").modal('hide');
         },
	error: function(){
	alert("failure");
	}
      	});
	});
});




	// default custom events
	$('.imgShake').hover(function() {
		$(this).addClass('transition');
	}, function() {
		$(this).removeClass('transition');
	}); // end IMAGE SHake EVENT

	// hide everything


	$(".homePage").hide(50); // hide home page stuff
	$(".aboutPageContent").hide(50); // hide home page stuff
	$(".eventPageContent").hide(50); // hide home page stuff


	//..javascript for page body goes here


	$('#mytext').popover();
	$('#name').popover();











	// CLICK FUNCTIONS!!!!!!!

	$(".aboutPageBtn").click(function(){
		//$(this).append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'); // add checkmark
		$("footer").hide(760);// hide form
		$(".homePage").hide(760); // hide home page stuff
		$(".aboutPageContent").show(760)
		$(".eventPageContent").hide(760);


	}); // end about page btn function






	// on 'Home' btn click
	$(".homePageBtn").click(function(){
		//$("form").fadeOut('45', function() {});// hide form
		$("footer").hide(760);// hide form
		//$(this).append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
		$(".homePage").show(760); // end fade in for home page elems
		$(".aboutPageContent").hide(760);
		$(".eventPageContent").hide(760);
	}); // end home page btn function



	// on 'Events' btn click
	$(".eventPageBtn").click(function(){
		//$("form").fadeOut('45', function() {});// hide form
		$("footer").hide(760);// hide form
		//$(this).append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>');
		$(".eventPageContent").show(760); // end fade in for event page elems
		$(".aboutPageContent").hide(760)
		$(".homePageContent").hide(760)
	}); // end event page btn function






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
		$(".homePageBtn").append('<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>'); // add checkmark
	}); // end submit btn click



function setSkills(one,two,three,four) {
	// body...
	// person skills
	document.getElementById("skillOne").innerHTML =  one;
	document.getElementById("skillTwo").innerHTML =  two;
	document.getElementById("skillThree").innerHTML =  three;
	document.getElementById("skillFour").innerHTML =  four;
} // end set skills definition



    // ======= change to prezident modal on photo click
    $("#presidentPic").click(function() {
        // body...
        // picture
        document.getElementById("modalPic").src =  document.getElementById("presidentPic").src;
        // person name
        document.getElementById("modalName").innerHTML =  document.getElementById("presidentName").innerHTML;

        // person skills
        setSkills("alpha","beta","sumthin..","delta");

        // person bio
        document.getElementById("modalBio").innerHTML = "This is my bio.  It is my only bio.  My bio and I are Awesome!  Lorem Ipsum FTW!!!";

    }); // end president modal event



    // ======= VICE PRESIDENT
    $("#vicePresidentPic").click(function() {
        // body...
        // picture
        document.getElementById("modalPic").src =  document.getElementById("vicePresidentPic").src;
        // person name
        document.getElementById("modalName").innerHTML =  document.getElementById("vicePresidentName").innerHTML;

        // person skills
        setSkills("alpha","beta","sumthin..","delta");

        // person bio
        document.getElementById("modalBio").innerHTML = "Lorem ipsum Elit laborum ad adipisicing irure voluptate elit ullamco pariatur aliquip ut sint exercitation in Excepteur eu id qui Duis irure dolore voluptate do Excepteur adipisicing amet ullamco eiusmod ex amet consequat esse cillum nostrud eiusmod in.";

    });

        // ======= Senator
    $("#senatorPic").click(function() {
        // body...
        // picture
        document.getElementById("modalPic").src =  document.getElementById("senatorPic").src;
        // person name
        document.getElementById("modalName").innerHTML =  document.getElementById("senatorName").innerHTML;

        // person skills
        setSkills("alpha","beta","sumthin..","delta");

        // person bio
        document.getElementById("modalBio").innerHTML = "Lorem ipsum Elit laborum ad adipisicing irure voluptate elit ullamco pariatur aliquip ut sint exercitation in Excepteur eu id qui Duis irure dolore voluptate do Excepteur adipisicing amet ullamco eiusmod ex amet consequat esse cillum nostrud eiusmod in.";

    });

        // ======= WEBMASTER
    $("#webmasterPic").click(function() {
        // body...
        // picture
        document.getElementById("modalPic").src =  document.getElementById("webmasterPic").src;
        // person name
        document.getElementById("modalName").innerHTML =  document.getElementById("webmasterName").innerHTML;

        // person skills
        setSkills("HTML5/Javascript","Python/Swift","C/C++","Java");

        // person bio
        document.getElementById("modalBio").innerHTML = "Lorem ipsum Elit laborum ad adipisicing irure voluptate elit ullamco pariatur aliquip ut sint exercitation in Excepteur eu id qui Duis irure dolore voluptate do Excepteur adipisicing amet ullamco eiusmod ex amet consequat esse cillum nostrud eiusmod in.";

    });


        // ======= TREASURER
    $("#treasurerPic").click(function() {
        // body...
        // picture
        document.getElementById("modalPic").src =  document.getElementById("treasurerPic").src;
        // person name
        document.getElementById("modalName").innerHTML =  document.getElementById("treasurerName").innerHTML;

        // person skills
        setSkills("alpha","beta","sumthin..","delta");

        // person bio
        document.getElementById("modalBio").innerHTML = "Lorem ipsum Elit laborum ad adipisicing irure voluptate elit ullamco pariatur aliquip ut sint exercitation in Excepteur eu id qui Duis irure dolore voluptate do Excepteur adipisicing amet ullamco eiusmod ex amet consequat esse cillum nostrud eiusmod in.";

    });


        // ======= AMBASSADOR
    $("#ambassadorPic").click(function() {
        // body...
        // picture
        document.getElementById("modalPic").src =  document.getElementById("ambassadorPic").src;
        // person name
        document.getElementById("modalName").innerHTML =  document.getElementById("ambassadorName").innerHTML;

        // person skills
        setSkills("alpha","beta","sumthin..","delta");

        // person bio
        document.getElementById("modalBio").innerHTML = "The Ambassador is basically a spokesperson for the club. S/He's primary role will be to help get the word out about our club, our events, and computer science in general. S/He will be somewhat of a personal relations person for the club.";

    });











});// end doc ready









