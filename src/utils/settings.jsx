// @ts-nocheck
/**
 * Creates a configuration object for the react-slick slider.
 * This function is memoization-friendly and designed for reusability.
 * @param {object} options - The configuration options for the slider.
 * @param {string} [options.direction='ltr'] - The slide direction, 'ltr' or 'rtl'.
 * @param {number} [options.slidesToShow=3] - The number of slides to show at once.
 * @param {boolean} [options.dots=false] - Whether to show navigation dots.
 * @param {boolean} [options.arrows=false] - Whether to show navigation arrows.
 * @param {React.ComponentType} [options.NextArrow] - Custom component for the "next" arrow.
 * @param {React.ComponentType} [options.PrevArrow] - Custom component for the "previous" arrow.
 * @param {function} [options.t] - The translation function, required if using custom arrows with text.
 * @param {Array<object>} [options.responsive] - A custom array of responsive settings.
 * @param {object} [options.overrides={}] - An object to override any default settings (e.g., autoplaySpeed).
 * @returns {object} The react-slick settings object.
 */
export const settings = ({
    direction = 'ltr',
    slidesToShow = 3,
    dots = false,
    arrows = false,
    NextArrow,
    PrevArrow,
    t,
    responsive = null,
    overrides = {}
}) => {
    const baseSettings = {
        dots,
        infinite: true,
        centerMode: false,
        slidesToShow,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows,
        initialSlide: 0,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: true,
        accessibility: true,
        adaptiveHeight: false,
        // lazyLoad: 'ondemand',
        rtl: direction === 'rtl',
        ltr: direction === 'ltr',
    };

    // Use default responsive settings if no custom ones are provided.
    const responsiveSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: Math.min(slidesToShow, 2),
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                infinite: true,
            }
        },
    ];

    const finalSettings = {
        ...baseSettings,
        responsive: responsive || responsiveSettings,
        ...overrides, // Apply any custom overrides
    };

    // Conditionally add custom arrows if they are provided.
    if (arrows && NextArrow && PrevArrow) {
        finalSettings.nextArrow = <NextArrow t={t} />;
        finalSettings.prevArrow = <PrevArrow t={t} />;
    }

    return finalSettings;
};