$(document).ready(function () {
  // when click on control occurs
  $('.control').click(function () {
    if ($(this).hasClass('active')) {
      console.log($(this));
      // close dropdown menu
      $(this).removeClass('active');
      $('.dropdown').css('display', 'none');
    } else {
      // open dropdown menu
      $(this).addClass('active');
      $('.dropdown').css('width', $('.control').css('width'));
      $('.dropdown').css('display', 'block');
    }
  });
});
