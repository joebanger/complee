var request;

$(document).ready(function(){

	$(".menu-button").click(function(){
		
		$(".sketchfab-embed-wrapper").toggleClass( "adjust-to-slider" );
		$(".menu").toggleClass( "push32em" );
		$(".menu-bar").toggleClass( "slide32em" );
		$(".menu-bar").toggleClass( "active-menu" );
	})

	$(".list").click(function() {
    	$(".list").toggleClass( "active" );
    });

    $("#message").click(function() {
    	$(".message-popup").toggleClass( "is-visible" );
    });

    $('#submit').click(function(){
    	$(".message-popup").toggleClass( "is-visible" );
    });
    
    var isshow = localStorage.getItem('isshow');
    // var isshow = null;
    if (isshow== null) {
        localStorage.setItem('isshow', 1);

	    window.onload = function() {

			$('.hello-popup').addClass('is-visible');
			
			//close popup
			$('#welcome').on('click', function(event){
				$('.hello-popup').removeClass('is-visible');

				setTimeout(function() { 
					$('#sketchfab').addClass('is-visible'); 
				}, 500);

			});

			$('#fab').on('click', function(event){
				$('.hello-popup').remove();
				$('#sketchfab').addClass('slide-left');

				setTimeout(function() { 
					$('.fab-popup').remove();
					$('#products').addClass('is-visible');
					$(".sketchfab-embed-wrapper").toggleClass( "adjust-to-slider" );
					$(".menu").toggleClass( "push32em" );
					$(".menu-bar").toggleClass( "slide32em" );
					$(".menu-button.list").toggleClass( "active" );
					$(".menu-bar").toggleClass( "active-menu" );
				}, 400);
			});

			$('#products').on('click', function(event){
				$('#products').removeClass('slide-left');
				$(".sketchfab-embed-wrapper").toggleClass( "adjust-to-slider" );
				$(".menu").toggleClass( "push32em" );
				$(".menu-bar").toggleClass( "slide32em" );
				$(".menu-button.list").toggleClass( "active" );
				$(".menu-bar").toggleClass( "active-menu" );

				setTimeout(function() { 
					$('#products').remove();
				}, 400);

			});

	    }
	}

	var fbButton = document.getElementById('fb-share-button');
	var url = window.location.href;

	fbButton.addEventListener('click', function() {
	    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
	        'facebook-share-dialog',
	        'width=350,height=600'
	    );
	    return false;
	});

});

$("#feedback-form").submit(function(event) {

    if (request) {
        request.abort();
    }
    var $form = $(this);

    var $inputs = $form.find("input, select, button, email, text, textarea");

    var serializedData = $form.serialize();

    $inputs.prop("disabled", true);

    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyJYdnRxeCctEI2zRAhAVU_HY9nY2TUKGg5oLznpv21J99HiG0/exec",
        type: "post",
        data: serializedData
    });

    request.done(function(response, textStatus, jqXHR) {
        console.log(jqXHR);
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });

    request.always(function() {
        $inputs.prop("disabled", false);
    });

    event.preventDefault();
    $('#feedback-form > input').val('');
    $('#feedback-form > textarea').val('');
    alert('Thank you');
    // $('#thank-you').removeClass('display-none');
});

// Bouncy Arrow we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
var arrowBounce = function() {
  var arrow = $(".arrow");
  
  if (arrow.hasClass("lift")) {
    arrow.removeClass("lift");
  } else {
    arrow.addClass("lift");
  }
};

// run the arrowBounce function every 800ms
setInterval(arrowBounce, 800);


$(".sketchfab-embed-wrapper").mouseover(function () {
	$(".arrow").css("visibility", "hidden");
});