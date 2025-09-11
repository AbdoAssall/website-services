export const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 25,
            duration: 0.8,
            staggerChildren: 0.3,
            delayChildren: 0.5
        }
    },
    exit: {
        y: -100,
        opacity: 0,
        transition: {
            duration: 0.4,
            staggerChildren: 0.1,
            staggerDirection: -1
        }
    }
};

export const searchBarVariants = {
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.8
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        scale: 0,
        transition: { duration: 0.3 }
    }
};

export const closeButtonVariants = {
    hidden: { x: 100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            delay: 0.9,
            duration: 0.8
        }
    },
    exit: {
        x: 100,
        opacity: 0,
        transition: { duration: 0.2 }
    }
};