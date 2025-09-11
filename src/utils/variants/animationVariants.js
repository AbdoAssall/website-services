// ANIMATION VARIANTS
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // This creates the "osmotic" or staggered effect
        },
    },
};

export const itemVariants = {
    hidden: { y: 200, opacity: 0 }, // Start 200px below and invisible
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut", // A smooth easing function
            delay: 0.3, // Slight delay for each item
        },
    },
};

export const itemVariantsRight = {
    hidden: { x: 200, opacity: 0 }, // Start 200px to the right and invisible
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut", // A smooth easing function
            delay: 0.3, // Slight delay for each item
        },
    },
};

export const itemVariantsLeft = {
    hidden: { x: -200, opacity: 0 }, // Start 200px to the left and invisible
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut", // A smooth easing function
            delay: 0.3, // Slight delay for each item
        },
    },
};

//* Animation Slider
export const textVariants = {
    hidden: { y: -50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8 }
    },
    exit: {
        y: -50,
        opacity: 0,
        transition: { duration: 0.5 }
    }
};

export const textVariantsLeft = {
    hidden: { x: -50, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 }
    },
    exit: {
        x: -50,
        opacity: 0,
        transition: { duration: 0.5 }
    }
};

export const textVariantsRight = {
    hidden: { x: 50, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8 }
    },
    exit: {
        x: 50,
        opacity: 0,
        transition: { duration: 0.5 }
    }
};