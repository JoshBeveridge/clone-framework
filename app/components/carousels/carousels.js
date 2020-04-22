// Clone / Components / Carousels

$(document).ready(function () {
    window.addEventListener('load', function(){
        var carouselID = 0;
        $("[data-c-carousel]").each(function() {
            if (this.hasAttribute("data-c-custom-carousel")) {
                // Do nothing.
            }
            else {
                carouselID = carouselID + 1;
                $(this).attr("id", "carousel" + carouselID);
                $(this).parent().find("[data-c-carousel-arrow=\"prev\"]").attr("id", "carousel" + carouselID + "prev");
                $(this).parent().find("[data-c-carousel-arrow=\"next\"]").attr("id", "carousel" + carouselID + "next");
                $(this).parent().find("[data-c-carousel-dots]").attr("id", "carousel" + carouselID + "dots");
                new Glider(document.querySelector('#carousel' + carouselID), {
                    slidesToShow: 1,
                    arrows: {
                        "prev": '#carousel' + carouselID + "prev",
                        "next": '#carousel' + carouselID + "next"
                    },
                    dots: '#carousel' + carouselID + "dots",
                    draggable: true,
                    scrollLock: true,
                    rewind: true
                })
            }
        });
    });
});