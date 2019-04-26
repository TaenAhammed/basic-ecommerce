$(document).ready(function() {
    $(".fashion-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        nav: true,
        navText: [
            '<i class="fas fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>'
        ]
    });
});
