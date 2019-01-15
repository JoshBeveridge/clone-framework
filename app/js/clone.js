
// =============================================================================

// Utilities JavaScript (jQuery)

// =============================================================================

(function ($) {

    // Add isValid()

    $.fn.isValid = function () {
        return this[0].checkValidity()
    }

    // Root

    var $root = $('html, body');

    // Add has attribute Function

    $.fn.hasAttr = function (name) {
        var attr = $(this).attr(name);
        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        return (typeof attr !== typeof undefined && attr !== false);
    };

    // User Agent Data Attributes ==============================================

    var ua = navigator.userAgent;
    ua = ua.toString();
    // console.log("hello");
    $('body').attr('id', ua);

    $(document).ready(function () {

        // Accordion Handlers ==================================================

            function accordionTrigger(trigger) {
                if ($(trigger).parent(".accordion").hasClass("active")) {
                    $(trigger).attr("aria-expanded", "false");
                    $(trigger).parent(".accordion").removeClass("active");
                    $(trigger).parent(".accordion").find(".accordion-content").attr("aria-hidden", "true");
                }
                else {
                    $(trigger).attr("aria-expanded", "true");
                    $(trigger).parent(".accordion").addClass("active");
                    $(trigger).parent(".accordion").find(".accordion-content").attr("aria-hidden", "false");
                }
            }

            $(document).on("click", ".accordion-trigger", function (e) {

                accordionTrigger(this);

            });

            $(document).on("keyup", ".accordion-trigger", function (e) {

                if (e.which == 13) {
                    accordionTrigger(this);
                }

            });

        // Carousel Controls ===================================================

            function carouselTrigger() {

                $("[class*='carousel--']").each(function() {

                    var slider = this,
                        sliderItems = this.querySelector(".carousel-wrapper"),
                        prev = this.querySelector('.carousel-control.prev'),
                        next = this.querySelector('.carousel-control.next');

                    function slide(wrapper, items, prev, next) {

                        var posX1 = 0,
                            posX2 = 0,
                            posInitial,
                            posFinal,
                            threshold = 100,
                            slides = items.getElementsByClassName('carousel-item'),
                            slidesLength = slides.length,
                            firstSlide = slides[0],
                            lastSlide = slides[slidesLength - 1],
                            cloneFirst = firstSlide.cloneNode(true),
                            cloneLast = lastSlide.cloneNode(true),
                            index = 0,
                            allowShift = true;
                            slideSize = $(slider).width();

                        // Clone first and last slide

                            items.appendChild(cloneFirst);
                            items.insertBefore(cloneLast, firstSlide);
                            wrapper.classList.add('loaded');

                            // $(wrapper).css("width", slideSize);
                            $(wrapper).find(".carousel-item").css("width", slideSize);
                            $(wrapper).find(".carousel-wrapper").css("left", slideSize * (-1) );
                            $(wrapper).find(".carousel-wrapper").css("width", slideSize * $(wrapper).find(".carousel-item").length);

                        // Mouse events
                        items.onmousedown = dragStart;

                        // Touch events
                        items.addEventListener('touchstart', dragStart);
                        items.addEventListener('touchend', dragEnd);
                        items.addEventListener('touchmove', dragAction);

                        // Click events
                        prev.addEventListener('click', function () { shiftSlide(-1) });
                        next.addEventListener('click', function () { shiftSlide(1) });

                        // Transition events
                        items.addEventListener('transitionend', checkIndex);

                        function dragStart(e) {
                            e = e || window.event;
                            e.preventDefault();
                            posInitial = items.offsetLeft;

                            if (e.type == 'touchstart') {
                                posX1 = e.touches[0].clientX;
                            } else {
                                posX1 = e.clientX;
                                document.onmouseup = dragEnd;
                                document.onmousemove = dragAction;
                            }
                        }

                        function dragAction(e) {
                            e = e || window.event;

                            if (e.type == 'touchmove') {
                                posX2 = posX1 - e.touches[0].clientX;
                                posX1 = e.touches[0].clientX;
                            } else {
                                posX2 = posX1 - e.clientX;
                                posX1 = e.clientX;
                            }
                            items.style.left = (items.offsetLeft - posX2) + "px";
                        }

                        function dragEnd(e) {
                            posFinal = items.offsetLeft;
                            if (posFinal - posInitial < -threshold) {
                                shiftSlide(1, 'drag');
                            } else if (posFinal - posInitial > threshold) {
                                shiftSlide(-1, 'drag');
                            } else {
                                items.style.left = (posInitial) + "px";
                            }

                            document.onmouseup = null;
                            document.onmousemove = null;
                        }

                        function shiftSlide(dir, action) {
                            items.classList.add('shifting');

                            if (allowShift) {
                                if (!action) { posInitial = items.offsetLeft; }

                                if (dir == 1) {
                                    items.style.left = (posInitial - slideSize) + "px";
                                    index++;
                                } else if (dir == -1) {
                                    items.style.left = (posInitial + slideSize) + "px";
                                    index--;
                                }
                            };

                            allowShift = false;
                        }

                        function checkIndex() {
                            items.classList.remove('shifting');

                            if (index == -1) {
                                items.style.left = -(slidesLength * slideSize) + "px";
                                index = slidesLength - 1;
                            }

                            if (index == slidesLength) {
                                items.style.left = -(1 * slideSize) + "px";
                                index = 0;
                            }

                            allowShift = true;
                        }
                    }

                    slide(slider, sliderItems, prev, next);

                });

            };

            carouselTrigger();

            $(window).resize(function () {
                carouselTrigger();
            });

    });

})(jQuery);
