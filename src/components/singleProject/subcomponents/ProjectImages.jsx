// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from "@store/LanguageContext";
import { useLightbox } from '../hooks/useLightbox';
/**
 * Renders a gallery of project images with a lightbox feature.
 * It can display a single image or a gallery with thumbnails.
 *
 * @component
 * @param {object} props - The component props.
 * @param {object} props.project - The project object.
 * @param {string} [props.project.name] - The name of the project, used as fallback alt text.
 * @param {string} [props.project.img] - The URL of the single featured image. Used if `images` array is not provided.
 * @param {Array<object>} [props.project.images] - An array of image objects for the gallery.
 * @returns {JSX.Element|null} The rendered ProjectImages component or null if no images are available.
 */

const ProjectImages = ({ project }) => {
    const { t } = useLanguage();
    // Use project.images if available, otherwise fallback to project.img
    const images = project.images && project.images.length > 0
        ? project.images
        : project.img
            ? [{ url: project.img, caption: project.name || 'Project Image' }]
            : [];

    const {
        selectedImage,
        isLightboxOpen,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage,
        setSelectedImage
    } = useLightbox(images);

    return (
        <>
            <section className="project-images mt-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-heading-dark !mb-8">
                    {t('projects.gallery')}
                </h2>

                {images.length === 1 ? (
                    // Single image display
                    <div className="single-image">
                        <figure className="relative group cursor-pointer" onClick={() => openLightbox(0)}>
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={images[0].url}
                                    alt={images[0].caption || project.name || 'Project image'}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                                        <svg
                                            className="w-6 h-6 text-primary-one"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {images[0].caption && (
                                <figcaption className="mt-3 text-sm text-dark-two text-center">
                                    {images[0].caption}
                                </figcaption>
                            )}
                        </figure>
                    </div>
                ) : (
                    // Multiple images gallery
                    <div className="image-gallery">
                        {/* Main featured image */}
                        <figure className="mb-6">
                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                                onClick={() => openLightbox(selectedImage)}
                            >
                                <img
                                    src={images[selectedImage].url}
                                    alt={images[selectedImage].caption || `${project.name} - Image ${selectedImage + 1}`}
                                    className="w-full h-64 md:h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                                            <svg
                                                className="w-6 h-6 text-primary-one"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {images[selectedImage].caption && (
                                <figcaption className="mt-3 text-sm text-dark-two text-center">
                                    {images[selectedImage].caption}
                                </figcaption>
                            )}
                        </figure>

                        {/* Thumbnail navigation */}
                        {images.length > 1 && (
                            <div className="thumbnails-grid">
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                    {images.map((image, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative overflow-hidden rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-one ${selectedImage === index
                                                ? 'ring-2 ring-primary-one scale-105'
                                                : 'hover:scale-105'
                                                }`}
                                            aria-label={`View image ${index + 1}: ${image.caption || project.name}`}
                                        >
                                            <img
                                                src={image.url}
                                                alt={`Thumbnail ${index + 1}: ${image.caption || project.name}`}
                                                className="w-full h-16 sm:h-20 object-cover"
                                                loading="lazy"
                                            />
                                            {selectedImage !== index && (
                                                <div className="absolute inset-0 bg-black/30"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </section>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                    // onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    <div className="relative max-w-7xl max-h-full md:-bottom-11" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            type="button"
                            className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 text-dark-one hover:bg-gray-100 transition-colors duration-300"
                            aria-label="Close lightbox"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Main image */}
                        <img
                            src={images[selectedImage].url}
                            alt={images[selectedImage].caption || `${project.name} - Image ${selectedImage + 1}`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                        />

                        {/* Navigation arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    type="button"
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-colors duration-300"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-6 h-6 text-dark-one" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    type="button"
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-colors duration-300"
                                    aria-label="Next image"
                                >
                                    <svg className="w-6 h-6 text-dark-one" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image counter and caption */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                            <div className="text-center text-white">
                                {images.length > 1 && (
                                    <div className="text-sm opacity-75 mb-2">
                                        {selectedImage + 1} / {images.length}
                                    </div>
                                )}
                                {images[selectedImage].caption && (
                                    <div className="text-lg">
                                        {images[selectedImage].caption}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

ProjectImages.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string,
        img: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            caption: PropTypes.string
        }))
    }).isRequired
};

export default ProjectImages;