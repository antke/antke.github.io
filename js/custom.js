/* navbar */
$("#product-nav-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#product-section").offset().top
    }, 700);
});

$("#contact-nav-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 700);
});

$("#landing-nav-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#landing").offset().top
    }, 700);
});

$("#gallery-nav-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#gallery-section").offset().top
    }, 700);
});

/* landing button */
$("#landing-main-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#product-section").offset().top
    }, 700);
});

// Slick + gallery integration
const slidersList = [
    'stairs-gallery',
    'door-gallery',
    'window-gallery',
    'fence-gallery'
];

// initial gallery settings
let currentGallery = slidersList[0];

$(document).ready(function(){
    $(`.${slidersList[0]}`).slick(sliderSettings());

    $('#main-wrapper').scroll(function() {
        console.log("scroll happeened");
    });
});

function sliderSettings() {
    return {
        dots: true,
        infinite: true,
        speed: 300,
        cssEase: 'linear',
        draggable: true,
        responsive: true
    }
}

function displayGallery(galleryName) {
    $(`.${currentGallery}`).slick('unslick');

    slidersList.forEach(function(gallery){
        $(`.${gallery}-wrapper`).hide();
        $(`#${gallery}-nav`).removeClass('button-active');
    });


    $(`.${galleryName}-wrapper`).show();
    $(`.${galleryName}`).slick(sliderSettings());
    $(`#${galleryName}-nav`).addClass('button-active');
    currentGallery = galleryName;
}

$('#stairs-gallery-nav').click(function(event) {
    displayGallery('stairs-gallery');
});

$('#door-gallery-nav').click(function(event) {
    displayGallery('door-gallery');
});

$('#window-gallery-nav').click(function(event) {
    displayGallery('window-gallery');
});

$('#fence-gallery-nav').click(function(event) {
    displayGallery('fence-gallery');
});


/** nav switch */
$( window ).scroll(function() {
    // home 
    if ($('#landing-section-activator').visible( true )){
        $('#landing-nav-link').addClass('button-active');
    } else {
        $('#landing-nav-link').removeClass('button-active');
    }

    // product
    if ($('#product-section-activator').visible( true )){
        $('#product-nav-link').addClass('button-active');
    } else {
        $('#product-nav-link').removeClass('button-active');
    }

    // gallery 
    if ($('#gallery-section-activator').visible( true )){
        $('#gallery-nav-link').addClass('button-active');
    } else {
        $('#gallery-nav-link').removeClass('button-active');
    }

    // contact
    if ($('#contact-section-activator').visible( true )){
        $('#contact-nav-link').addClass('button-active');
    } else {
        $('#contact-nav-link').removeClass('button-active');
    }
});


/* mobile nav */
$('.hamburger').click(function(event) {
    console.log("test");
    $('.mobile-nav-links').toggle( 350, function() {});
});

$("#mobile-product-nav-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#product-section").offset().top
    }, 700);
    $('.mobile-nav-links').toggle( 350, function() {});
});

$("#mobile-contact-nav-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 700);
    $('.mobile-nav-links').toggle( 350, function() {});
});

$("#mobile-gallery-nav-link").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#gallery-section").offset().top
    }, 700);
    $('.mobile-nav-links').toggle( 350, function() {});
});