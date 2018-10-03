
const colorWidgetData =
    [
        {
            'color': '#6600cc',
            'height': '40px'
        },
        {
            'color': '#6600ff',
            'height': '40px'
        },
        {
            'color': '#6633ff',
            'height': '40px'
        },
        {
            'color': '#6666ff',
            'height': '40px'
        },
        {
            'color': '#6699ff',
            'height': '40px'
        },
        {
            'color': '#66ccff',
            'height': '40px'
        },
        {
            'color': '#66ffff',
            'height': '40px'
        },
        {
            'color': '#ccffff',
            'height': '40px'
        },
        {
            'color': '#d7d7d7',
            'height': '40px'
        },
        {
            'color': '#ffffcc',
            'height': '40px'
        },
        {
            'color': '#ffff00',
            'height': '50px'
        },
        {
            'color': '#ff9900',
            'height': '60px'
        },
        {
            'color': '#ff6600',
            'height': '70px'
        },
        {
            'color': '#cc6600',
            'height': '60px'
        },
        {
            'color': '#cc3300',
            'height': '50px'
        },
        {
            'color': '#cc0000',
            'height': '40px'
        },
        {
            'color': '#6600cc',
            'height': '40px'
        },
        {
            'color': '#6600ff',
            'height': '40px'
        },
        {
            'color': '#6633ff',
            'height': '40px'
        },
        {
            'color': '#6666ff',
            'height': '40px'
        },
        {
            'color': '#6699ff',
            'height': '40px'
        },
        {
            'color': '#66ccff',
            'height': '40px'
        },
        {
            'color': '#66ffff',
            'height': '40px'
        },
        {
            'color': '#ccffff',
            'height': '40px'
        },
        {
            'color': '#d7d7d7',
            'height': '40px'
        },
        {
            'color': '#ffffcc',
            'height': '40px'
        },
        {
            'color': '#ffff00',
            'height': '50px'
        },
        {
            'color': '#ff9900',
            'height': '60px'
        },
        {
            'color': '#ff6600',
            'height': '70px'
        },
        {
            'color': '#cc6600',
            'height': '60px'
        },
        {
            'color': '#cc3300',
            'height': '50px'
        },
        {
            'color': '#cc0000',
            'height': '40px'
        },
    ];

let widgetSlideBox = {
    widthInit: 768,
    widgetSlide: function () {
        let slider = $('.widget-nav__slider');
        let prev = $('.widget-nav__arrow-prev');
        let next = $('.widget-nav__arrow-next');
        $('.widget-body__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipe: false,
            speed: 500,
            fade: false
        });
        slider.slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: false,
            asNavFor: '.widget-body__slider',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true

                    }
                }
            ]
        });
        let that = this;
        const setDisabledSlide = function () {
            let slids = $('.widget-nav .slick-slide.slick-active');
            slids.removeClass('disabled');
            $(slids[0]).prev().addClass('disabled');
            $(slids[slids.length - 1]).next().addClass('disabled');
        };
        setDisabledSlide();

        prev.click(function () {
            slider.slick('slickPrev');
        });
        next.click(function () {
            slider.slick('slickNext');
        });
        slider.on('afterChange', function () {
            setDisabledSlide();

        });
    },


    colorWidgetInit: function () {
        let widgetItems = $('.color-widget__item');
        widgetItems.each(function (index) {
            $(this).css({ 'background-color': colorWidgetData[index].color || '#f3f3f3', 'height': colorWidgetData[index].height || '#f3f3f3' });
        });
    },
    chartInit: function () {
        let ctx = document.getElementById('gameChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart
            type: 'line',

            // The data for the dataset
            data: {
                labels: ["Jul17", "Aug17", "Sept17", "Оct17", "Nov17", "Dec17", "Jun18", "Feb18", "Mar18", "Apr18", "May18", "Jun18"],
                datasets: [{
                    borderWidth: 2,
                    borderColor: 'rgb(0, 118, 178)',
                    borderCapStyle: 'square',
                    borderJoinStyle: 'miter',
                    pointBackgroundColor: 'rgb(0, 118, 178)',
                    data: [6000000, 2500000, 2100000, 4800000, 4500000, 5000000, 4500000, 6800000, 16500000, 10200000, 8500000, 10500000],
                }]
            },

            // Configuration options go here
            options: {
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: true,
                            color: "rgba(255,255,255,0.1)",
                            offsetGridLines: true
                        },
                        scaleLabel: {
                            display: false,
                        },
                        ticks: {
                            beginAtZero: false,
                            fontColor: 'rgba(255,255,255,0.7)'
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                let tick = value.toString().replace(/0*$/, "");
                                return tick + 'M';
                            },
                            beginAtZero: false,
                            fontColor: '#ffffff'
                        },
                        gridLines: {
                            color: "rgba(255,255,255,0.1)",
                            offsetGridLines: true
                        },
                        scaleLabel: {
                            display: false,
                        }
                    }]
                },
                legend: {
                    display: false
                },
                elements: {
                    line: {
                        tension: 0,
                    }
                },
            }
        });
    },
    winnersSliderInit: function () {
        let slider = $('.winners-slider');
        let prev = $('.winners-slider__arrow-prev');
        let next = $('.winners-slider__arrow-next');

        slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            centerMode: true,
            focusOnSelect: false,
            infinite: true,
            arrows: false,
            accessibility: false,
            variableWidth: true
        });
        const setDisabledSlide = function () {
            let slids = $('.winners-slider .slick-slide.slick-active');
            slids.removeClass('disabled');
            $(slids[0]).prev().addClass('disabled');
            $(slids[0]).next().addClass('disabled');
        };
        setDisabledSlide();

        prev.click(function () {
            slider.slick('slickPrev');
        });
        next.click(function () {
            slider.slick('slickNext');
        });
        slider.on('afterChange', function () {
            setDisabledSlide();
        });
    },
    showInfoInit: function () {
        let showInfoBtn = $('.game-info-table__head');
        let textNode = $('.game-info-table__head span');
        let text = 'View more information';
        let isOpen = false;
        showInfoBtn.click(function () {
            isOpen = !isOpen;
            !isOpen ? text = 'View More Information' : text = 'Hide information';
            $(this).toggleClass('open').next().toggle();
            textNode.text(text);
        });
    },
    init: function () {
        this.widgetSlide();
        this.colorWidgetInit();
        this.chartInit();
        this.showInfoInit();
        let winWidth = $(window).width();
        if (winWidth < 768) {
            this.winnersSliderInit();

        }
    }
};
export default widgetSlideBox;