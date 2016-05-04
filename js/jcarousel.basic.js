(function($) {
    $(function() {

    $('.jcarousel')
        .on('jcarousel:create', function() {

            console.log('Created slider');

            var element = $(this),
                width = element.innerWidth();

            if(width < 100)
            {
                                    // var width = carousel.innerWidth();
                    width = ($(window).width() * .8 * .8 -20) * .9;

                    // console.log('width '+width);
                    // carousel.jcarousel('xxx').css('width', width + 'px');
            }

            console.log('Width: ' + width);

            // This shows 1 item at a time.
            // Divide `width` to the number of items you want to display,
            // eg. `width = width / 3` to display 3 items at a time.
            element.jcarousel('items').css('width', width + 'px');
        })
        .on('jcarousel:reload', function() {
            console.log('Reload slider');

            var element = $(this),
                width = element.innerWidth();

            console.log('Width: ' + width);

            // This shows 1 item at a time.
            // Divide `width` to the number of items you want to display,
            // eg. `width = width / 3` to display 3 items at a time.
            element.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel({
            // Your configurations options
        });


        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });


        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });


        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
