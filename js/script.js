$(function () {

    // $('input[name=phone]').mask('+7 (999) 999-99-99');

    $('.menu-opener, .menu-closer').on('click', function (e) {
        e.preventDefault();
        // $(this).toggleClass('active');
        $('.menu-content').toggleClass('active');
    });

    $('.show__inp-item').on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });

    var swiper1 = new Swiper(".index-reviews-slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
        },
        grabCursor: true,
        speed: 1000,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    var swiper2 = new Swiper(".tab-in-slide", {
        slidesPerView: 2,
        spaceBetween: 15,
        loop: false,
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next-4",
            prevEl: ".swiper-button-prev-4",
        },
        paginationClickable: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });

    var swiper3 = new Swiper(".similar-slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    var swiper4 = new Swiper(".may-like-slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
        },
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    var swiper5 = new Swiper(".command-slide", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        autoplay: {
            delay: 3000,
        },
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });


    // filter mob
    $(".filter-opener").on('click', function (e) {
        e.preventDefault();
        $( ".product-filter" ).slideToggle( "slow", function() {});
    });


    // custom select
    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
            if ($this.children('option').eq(i).is(':selected')) {
                $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
            }
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.find('li.is-selected').removeClass('is-selected');
            $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


    // magnific popup
    $('.crt-img').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

});



const items = document.querySelectorAll('.number__calculate');


items.forEach(function(number__calculate) {
    const addBtn = number__calculate.querySelector('.btn-add');
    const removeBtn = number__calculate.querySelector('.btn-remove');
    const resultBtn = number__calculate.querySelector('.num-result');

    let currentResult = 0;
    
    addBtn.addEventListener('click', function() {
        currentResult += 1;
        updateResult();
    })
    
    removeBtn.addEventListener('click', function() {
        currentResult -= 1;
        if(currentResult < 0) {
            currentResult = 0;
        }
        updateResult();
    })
    
    function updateResult() {
        resultBtn.textContent = currentResult;
    }
})


document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-popup-level-repair_close]');
    const btnSubmit = e.target.closest('[data-popup-level-repair-btn-submit]');

    if (button || btnSubmit) {
        const popup = e.target.closest('.popup-level-repair');


        popup.classList.remove('popup-level-repair-open');
        document.querySelector('body').style['overflow'] = '';
    }
})

document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-help-btn]');

    if (button) {
        const popup = document.querySelector('[data-popup-level-repair]');

        popup.classList.add('popup-level-repair-open');
    }
})

document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-popup-diagnostics_close]');

    if (button) {
        const popup = button.closest('.popup-diagnostics');

        if (popup.classList.contains('popup-diagnostics-open')) popup.classList.remove('popup-diagnostics-open');
    }
})


document.addEventListener('click', (e) => {
    const item = e.target.closest('[data-content-desc-item]');

    if (item) {
        const allWrapper = document.querySelectorAll('[data-content-desc]');
        const wrapper = item.closest('[data-content-desc]');
        let currentIndex = 0;

        wrapper.querySelectorAll('[data-content-desc-item]').forEach((elem, index) => {
            if (elem === item) {
                currentIndex = index
            }
        })

        allWrapper.forEach((wrap) => {
            wrap.querySelectorAll('[data-content-desc-item]').forEach((elem, index) => {
                if (currentIndex === index) {
                    elem.classList.add('active');
                } else {
                    elem.classList.remove('active');
                }
            })
        })
    }
})


document.addEventListener('click', e => {
    const item = e.target.closest('[data-select-amount-form-item]');

    if (item) {
        item.querySelector('[data-select-amount-form-radio]').checked = true;
    }
})


document.addEventListener('click', e => {
    const btnDecrement = e.target.closest('[data-counter-decrement]')
    const btnIncrement = e.target.closest('[data-conunter-increment]')

    if (btnDecrement) {
        const container = btnDecrement.closest('[data-conunter]')
        let value = container.querySelector('[data-conunter-value]')

        if (+value.textContent > 1) {
            value.textContent = +value.textContent - 1
        }
    }
    if (btnIncrement) {
        const container = btnIncrement.closest('[data-conunter]')
        let value = container.querySelector('[data-conunter-value]')

        value.textContent = +value.textContent + 1
    }

})

window.onload = function () {
    const sliderOne = document.querySelector("[data-select-slider-input-decrement]");
    const sliderTwo = document.querySelector("[data-select-slider-input-increment]");
    const displayValOne = document.querySelector("[data-select-slider-value-min]");
    const displayValTwo = document.querySelector("[data-select-slider-value-max]");
    const minGap = 0;
    const sliderTrack = document.querySelector(".select-slider_slider-track");

    document.addEventListener('input', e => {
        let slider = e.target.closest("[data-select-slider-input-decrement]");

        if (slider) {
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderOne.value = parseInt(sliderTwo.value) - minGap;
            }
            fillColor();
        }
    })

    document.addEventListener('input', e => {
        let slider = e.target.closest("[data-select-slider-input-increment]");

        if (slider) {
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }
            fillColor();
        }
    })

    const sliderMaxValue = document.querySelector("[data-select-slider-input-decrement]");
    if (sliderMaxValue) {
        function fillColor() {
            displayValOne.textContent = sliderOne.value;
            displayValTwo.textContent = sliderTwo.value;
            percent1 = (sliderOne.value / sliderMaxValue.max) * 100;
            percent2 = (sliderTwo.value / sliderMaxValue.max) * 100;
            sliderTrack.style.background = `linear-gradient(to right, #D9D9D9 ${percent1}% , #0085FF ${percent1}% , #0085FF ${percent2}%, #D9D9D9 ${percent2}%)`;
        }
        fillColor()
    }
};

document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-btn-open-popup-level-repair]');

    if (button) {
        const popup = document.querySelector('[data-popup-level-repair]');

        popup.classList.add('popup-level-repair-open');
        document.querySelector('body').style['overflow'] = 'hidden'
    }
})


document.addEventListener('change', (e) => {
    const input = e.target.closest('[data-popup-search-select-section-label] input:checked');

    if (input) {
        const wrapper = input.closest('[data-popup-search-select-section-items]');
        const label = input.closest('[data-popup-search-select-section-label]');
        const allLabel = wrapper.querySelectorAll('.checked[data-popup-search-select-section-label]');

        label.classList.add('checked');
        allLabel.forEach(item => {
            item.classList.remove('checked');
        })
    }
})

document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-popup-search-btn-close]');

    if (button) {
        const popup = button.closest('[data-popup-search]');

        popup.classList.remove('active');
        // document.querySelector('body').style['overflow'] = '';
    }
})

document.addEventListener('click', (e) => {
    const headSearch = e.target.closest('[data-head-search-input]');

    if (headSearch) {
        const popupSearch = document.querySelector('[data-popup-search]');

        popupSearch.classList.add('active');
        // document.querySelector('body').style['overflow'] = 'hidden';
    }
})


document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-popup-search-form]');

    if (form) {
        e.preventDefault();
        const popupSearch = form.closest('[data-popup-search]');

        popupSearch.classList.remove('active');
        // document.querySelector('body').style['overflow'] = '';
    }
})

document.addEventListener('input', (e) => {
    const searchInput = e.target.closest('[data-popup-search-input]');

    if (searchInput) {
        const popupSearch = searchInput.closest('[data-popup-search]');
        const popularContent = popupSearch.querySelector('[data-popup-search-popular]');
        const popularProducts = popupSearch.querySelector('[data-general-product-sec]');

        popularContent.classList.add('active');
        popularProducts.classList.add('active');
    }
})



