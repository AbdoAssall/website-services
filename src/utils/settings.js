// Slider settings
export const settings = (direction = 'rtl') => (
    {
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 5000,
        cssEase: "linear",
        rtl: direction === 'rtl',
        ltr: direction === 'ltr',
        accessibility: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
        ]
    });
