$(document).ready(function () {
  // when click on control occurs
  $('.header-user-control').click(function () {
    if ($(this).hasClass('header-user-active')) {
      console.log($(this));
      // close dropdown menu
      $(this).removeClass('header-user-active');
      $('.header-user-dropdown').css('display', 'none');
    } else {
      // open dropdown menu
      $(this).addClass('header-user-active');
      $('.header-user-dropdown').css(
        'width',
        $('.header-user-control').css('width')
      );
      $('.header-user-dropdown').css('display', 'block');
    }
  });

  // when click outside occurs when dropdown is opened
  // $('*').click(function (e) {
  //   console.log($(this));
  //   if (!$(this).hasClass('.dropdown') && $('.control').hasClass('active')) {
  //     console.log('here!');
  //     // close dropdown menu
  //     $('.control').removeClass('active');
  //     $('.dropdown').css('display', 'none');
  //   }
  // });
});
