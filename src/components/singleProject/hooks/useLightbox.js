import { useState, useCallback, useEffect } from 'react';

/**
 * A custom hook to manage the state and logic for a lightbox image gallery.
 * @param {Array<object>} images - An array of image objects to be displayed in the gallery.
 * @returns {object} An object containing the lightbox state and functions to control it.
 */
export const useLightbox = (images = []) => {
    /** @state {number} The index of the currently selected image in the gallery. */
    const [selectedImage, setSelectedImage] = useState(0);
    /** @state {boolean} Whether the lightbox modal is open. */
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    /**
     * Closes the lightbox modal.
     * Wrapped in useCallback to stabilize the function reference.
     */
    const closeLightbox = useCallback(() => {
        setIsLightboxOpen(false);
    }, []);

    /**
     * Navigates to the next image in the lightbox gallery.
     * Wrapped in useCallback to stabilize the function reference.
     */
    const nextImage = useCallback(() => {
        if (images.length === 0) return;
        setSelectedImage((prev) => (prev + 1) % images.length);
    }, [images.length]);

    /**
     * Navigates to the previous image in the lightbox gallery.
     * Wrapped in useCallback to stabilize the function reference.
     */
    const prevImage = useCallback(() => {
        if (images.length === 0) return;
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    /**
     * Opens the lightbox and sets the selected image.
     * @param {number} index - The index of the image to display.
     */
    const openLightbox = (index) => {
        setSelectedImage(index);
        setIsLightboxOpen(true);
    };

    useEffect(() => {
        /**
         * Handles keydown events for lightbox navigation (Escape, ArrowRight, ArrowLeft).
         * @param {KeyboardEvent} e - The keyboard event.
         */
        const handleKeyDown = (e) => {
            if (!isLightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLightboxOpen, closeLightbox, nextImage, prevImage]);

    return {
        selectedImage,
        isLightboxOpen,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
        setSelectedImage
    };
};
