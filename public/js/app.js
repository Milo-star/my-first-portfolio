AOS.init();

$(window).scroll(function() {

    if ($(window).scrollTop() >= $(window).height()) {
        $('#navbar').addClass('fixed-top');
    } else {
        $('#navbar').removeClass('fixed-top');
    }

});

$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

$(document).ready(function() {

});

$(window).scroll(function() {

    if ($(window).scrollTop() >= $(window).height() + 75) {

        $('.skills-bar-lvl').each(function() {
            $(this).animate({
                width: $(this).attr('data-width')
            }, 1500);


            setTimeout(function() {
                $('.skills-bar-value').css('opacity', '1');
            }, 1600);

        });

    }

});

function gallery_isotope() {
  if ( $('.project-filter-content').length ){
    $(".project-filter-content").isotope({
      layoutMode: 'fitRows',
      animationOptions: {
        duration: 750,
        easing: 'linear'
      }
    });

    // Add isotope click function
    $(".project-button button").on('click', function() {
      $(".project-button button").removeClass("active");
      $(this).addClass("active");

      var selector = $(this).attr("data-filter");
      $(".project-filter-content").isotope({
        filter: selector,
        animationOptions: {
          duration: 450,
          easing: "linear",
          queue: false,
        }
      });
      return false;
    });
  }
}
gallery_isotope();
