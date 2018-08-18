function toggleDropdownContent(elem) {
  console.log(elem, '!!elem')
  $('.container-full').animate({height:350},200);
  $('.dropdown-content').hide();
  $('.dropdown-' + elem).show();
}
function enableDropdown() {
  // Table Dropdown
    // $('.tables').mouseenter(function(){
    //   const className = $(this)[0].className
    //   const elem = className.substr(9);
    //   toggleDropdownContent(elem);
    // });
    //
    // // Chair Dropdown
    // $('.chairs').mouseenter(function(){
    //   const className = $(this)[0].className
    //   const elem = className.substr(9);
    //   toggleDropdownContent(elem);
    // });

    // Lamp Dropdown
    $('.lamps, .tables, .chairs').mouseenter(function(){
      const className = $(this)[0].className
      const elem = className.substr(9);
      toggleDropdownContent(elem);
    });

    // Close About, Contact
    $('.none-drop-link').mouseenter(function(){
      console.log('should hide it')
      $('.container-full').stop().animate({height:60},150);
      console.log($('.hide-drop'), '!!hideDrop')
      $('.hide-drop').hide()
    });

    // Close Container
     $('.container-full').mouseleave(function(){
      $(this).animate({height:60},200);
      $('.hide-drop').hide()
    });
}

function disableDropdown() {
  $('.tables').unbind('mouseenter');
  $('.chairs').unbind('mouseenter');
  $('.lamps').unbind('mouseenter');
  $('.none-drop-link').unbind('mouseenter');
  $('.container-full').unbind('mouseleave')
}

function toggleDropdown() {
  const windowWidth = $(window).width();
  console.log(windowWidth);
  if (windowWidth > 991) {
    console.log('enableDropdown')
    enableDropdown();
  } else {
    console.log('disableDropdown')
    disableDropdown();
  }
}

$( window ).resize(function() {
  toggleDropdown();
});

$(document).ready(function(){
  //Dropdown menu fix
  $(document).one('mousemove', function() {

    // Nav Menu
    $('.navbar-nav a').click(function () {
      $('.navbar-collapse').toggle();
    });

    // Nav Button
    $('.burger').click(function(){
      $('.navbar-collapse').slideToggle("slow");
    });

    // Nav Roll
    $(".roll").hover(function(){
        $('.show-img').css({'background':'url('+ $(this).attr('src')
      });
    });
    toggleDropdown();

    // Section Index
    $('.items-img').mouseenter(function(){
      $('.slide-bg', this).fadeIn('slow');
      $('.title', this).fadeIn('fast');
    }).mouseleave (function(){
      $('.slide-bg', this).fadeOut('fast');
      $('.title', this).fadeOut('slow');
    });
  });

});
