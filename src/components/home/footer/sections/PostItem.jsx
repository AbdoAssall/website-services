import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';

/**
 * PostItem component props
 * @typedef {Object} PostItemProps
 * @property {string} date - The date of the post.
 * @property {string} title - The title of the post.
 * @property {string} imagePath - The image URL for the post.
 * @property {string} url - The URL for the post.
 */

/**
 * Renders a post item with image, date, and title.
 * @param {PostItemProps} props
 */

const PostItem = ({ date, title, imagePath, url }) => {
    const { language } = useLanguage();

    return (
        <div className="flex space-x-4">
            <div className="flex-shrink-0 relative overflow-hidden rounded-[0.313rem]">
                <div className="absolute inset-0 bg-primary-one opacity-0 group-hover:opacity-70 transition-all duration-500 z-10 rounded-[0.313rem]"></div>
                <img
                    src={imagePath}
                    alt={title}
                    className="!w-18 !h-18 object-cover rounded-[0.313rem]"
                    loading="lazy"
                    height="750"
                    width="420"
                    srcSet={`${imagePath} 750w, ${imagePath} 600w, ${imagePath}} 300w`}
                    sizes="(max-width: 750px) 100vw, 750px"
                />
            </div>
            <div>
                <div className="flex items-center gap-2 text-xs text-white/85 mb-1">
                    <Clock size={12} />
                    <time dateTime={date}>
                        {date
                            ? new Date(date).toLocaleDateString(language, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })
                            : 'Date not available'}
                    </time>
                </div>
                <h2 className="!leading-6.5 !font-semibold">
                    <Link
                        to={url}
                        aria-label={title}
                        className="text-sm !text-white hover:!text-primary-one transition-colors"
                    >
                        {title}
                    </Link>
                </h2>
            </div>
        </div>
    );
};

PostItem.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default PostItem;
