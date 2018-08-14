// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require activestorage
//= require turbolinks
//= require jquery3
//= require jquery_ujs
//= require_tree .


$(document).ready(function(){
// Nav Menu
$('.navbar-nav a').click(function () {
    $('.navbar-collapse').toggle();
  });

$('.burger').click(function(){
    $('.navbar-collapse').slideToggle("slow");
});

// Nav Roll
$(".roll").hover(function(){
    $('.table-img, .chair-img, .lamp-img').css({'background':'url('+ $(this).attr('src')
  });
});

$('.table-link').mouseenter(function(){
  $('.container-full').animate({height:40},200);
},function(){
  $('.container-full').animate({height:350},200);
  $('.dropdown-nav, .table-img').show();
  $('.chair-img, .lamp-img').hide();
});

$('.chairs-link').mouseenter(function(){
  $('.container-full').animate({height:40},200);
},function(){
  $('.container-full').animate({height:350},200);
  $('.dropdown-nav, .chairs-col, .chair-img').show();
  $('.table-img, .lamp-img').hide();
});

$('.lamps-link').mouseenter(function(){
  $('.container-full').animate({height:40},200);
},function(){
  $('.container-full').animate({height:350},200);
  $('.dropdown-nav, .lamps-col, .lamp-img').show();
  $('.table-img, .chair-img').hide();
});

$('.table-link').hover(function(){
  $(this).addClass('link-hover');
  $('.chairs-link, .lamps-link').removeClass('link-hover');
  $('.chairs-col').hide();
  $('.lamps-col').hide();
  $('.table-col').show();
});

$('.chairs-link').hover(function(){
  $(this).addClass('link-hover');
  $('.table-link').removeClass('link-hover');
  $('.table-link, .lamps-link').removeClass('link-hover');
  $('.table-col').hide();
  $('.lamps-col').hide();
  $('.chairs-col').show();
});

$('.lamps-link').hover(function(){
  $(this).addClass('link-hover');
  $('.table-link').removeClass('link-hover');
  $('.chairs-link, .table-link').removeClass('link-hover');
  $('.table-col').hide();
  $('.chairs-col').hide();
  $('.lamps-col').show();
});

$('.about-link, .contact-link').mouseenter(function(){
  $('.container-full').animate({height:60},100);
  $('.dropdown-nav').hide();
  $('.table-link, .chairs-link, .lamps-link').removeClass('link-hover');
})

$('.container-full').mouseleave(function(){
  $(this).animate({height:60},200);
  $('.dropdown-nav').hide();
});

// Section Index
$('.items-img').mouseenter(function(){
  $('.slide-bg', this).fadeIn('slow');
  $('.title', this).fadeIn('fast');
}).mouseleave (function(){
  $('.slide-bg', this).fadeOut('fast');
  $('.title', this).fadeOut('slow');
}); 
});