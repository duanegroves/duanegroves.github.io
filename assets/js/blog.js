$(window).load(function() {
    $('.post__module').hover(function() {
      $(this).find('.post__description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });
  });