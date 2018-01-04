const anchors = {};
    anchors.team = $(document).scrollTop() + $('#team').offset().top - 120;
    anchors.about = $(document).scrollTop() + $('#about').offset().top - 120;
    anchors.awards = $(document).scrollTop() + $('#awards').offset().top - 120;
    anchors.contact = $(document).scrollTop() + $('#contact').offset().top - 120;
    $('#todayDate').val(new Date().toString());

var request;

$("#contact-form").submit(function(event) {

    if (request) {
        request.abort();
    }
    var $form = $(this);

    var $inputs = $form.find("input, select, button, email, text, textarea");

    var serializedData = $form.serialize();

    $inputs.prop("disabled", true);

    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxUPVUae8a0BVivsZOwxyTvmZR_orveKpa43hbpx4sIkCP1G4I/exec",
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
    $('input.first-name, input.last-name, input.email').val('');
    $('#thank-you').removeClass('display-none');
});

function scrollToAnchor(id) {
    $('html,body').animate({
            scrollTop: anchors[id]
        },
        500);
};


// ############# LISTENERS ###########

$(document).ready(function() {
    if ($(document).scrollTop() >= 50) {
        $('.navbar-fixed').fadeIn(250);
    } else {
        $('.navbar-fixed').fadeOut(250);
    }
});

$(window).on('scroll', function() {
    if ($(document).scrollTop() >= 300) {
        $('.navbar-fixed').fadeIn(400);
    } else {
        $('.navbar-fixed').fadeOut(400);
    }
});

$('.nav-item').on('click touchstart', '.nav-link', function(evt) {
    const $target = $(evt.target),
        anchor = $target.attr('data-js');

    scrollToAnchor(anchor);
});

$('.fixed-nav-item').on('click touchstart', '.nav-link', function(evt) {
    const $target = $(evt.target),
        anchor = $target.attr('data-js');

    scrollToAnchor(anchor);
});

$(document).ready(function() {
    $(".heading").delay(1000).animate({ opacity: 1 }, 700);
});

