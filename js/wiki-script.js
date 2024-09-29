$(document).ready(function () {
  // Navbar
  let navHeight = $('#navbar').outerHeight(true);
  $('#wiki').css('padding-top', navHeight);

  $('#navbar .navbar-nav .nav-item .nav-link:first').addClass('active');
  $('#navbar .navbar-nav .nav-item .nav-link').click(function (event) {
    $('#navbar .navbar-nav .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');

    var targetId = $(this).attr('href');
    var targetPosition = $(targetId).offset().top;
    if (targetId !== '#footer') {
      targetPosition -= navHeight
    }
    $('html, body').animate({ scrollTop: targetPosition }, 1 * 1000);
  });
  // End navbar
});