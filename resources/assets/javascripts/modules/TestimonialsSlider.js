import $ from 'jquery';
window.jQuery = $;
window.$ = $;
let owlCarousel = require('owl.carousel');

export default class TestimonialsSlider{
    constructor(){
        this._carouselInit();
    }

    _carouselInit(){
        $('#testimonialContainer').owlCarousel({
            margin: 40,
            loop: true,
            nav: false,
            navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>','<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
            responsive: {
                992: {
                    items: 3,
                    nav: true,
                },
                640: {
                    items: 2,
                    nav: true,
                },
                480: {
                    margin: 10,
                    stagePadding: 20,
                    items: 1,
                },
                0: {
                    margin: 10,
                    stagePadding: 20,
                    items: 1
                }
            }
        });
    }
}