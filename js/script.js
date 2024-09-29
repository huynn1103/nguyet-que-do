$(document).ready(function () {
  // Navbar
  let navHeight = $('#navbar').outerHeight(true);
  $('#intro').css('padding-top', navHeight);
  $('#structure').css('padding-top', navHeight);
  $('#wiki').css('padding-top', navHeight);

  $('#navbar .navbar-nav .nav-item .nav-link:first').addClass('active');
  $('#navbar .navbar-nav .nav-item .nav-link').click(function (event) {
    $('#navbar .navbar-nav .nav-item .nav-link').removeClass('active');
    $(this).addClass('active');

    var targetId = $(this).attr('href');
    if (!targetId.includes('/wiki/nguyet-que-do') && !targetId.includes('/co-cau-nhan-su')) {
      event.preventDefault();
    }
    var targetPosition = $(targetId).offset().top;
    if (targetId !== '#home' || targetId !== '#footer') {
      targetPosition -= navHeight
    }
    $('html, body').animate({ scrollTop: targetPosition }, 1 * 1000);
  });
  // End navbar


  $('#intro').carousel({
    interval: 5 * 1000,
    pause: false
  });
});

// Observe animation
$(document).ready(function () {
  // Stats number animation
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var target = $(entry.target);
        var maxCount = Number(target.text().substring(0, target.text().length));
        // var suffix = target.text().substring(target.text().length - 1);
        var currentCount = 0;
        var incrementTime = 2 * 1000 / maxCount;

        function updateCount() {
          target.text(currentCount);
          if (currentCount < maxCount) {
            currentCount++;
            setTimeout(updateCount, incrementTime);
          }
        }

        updateCount();
        observer.unobserve(entry.target);
      }
    });
  });

  $('.stats-number').each(function () {
    observer.observe(this);
  });
  // End stats number animation
});