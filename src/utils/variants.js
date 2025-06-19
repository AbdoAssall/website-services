export const fadeIn = (direction, delay, displacement = 40) => {
    return {
        hidden: {
            y: direction === 'up' ? displacement : direction === 'down' ? -displacement : 0,
            x: direction === 'left' ? displacement : direction === 'right' ? -displacement : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
            exit: {
                y: direction === 'up' ? -displacement : direction === 'down' ? displacement : 0,
                x: direction === 'left' ? -displacement : direction === 'right' ? displacement : 0,
                opacity: 0,
                transition: {
                    duration: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                }
            }
        }
    }
}