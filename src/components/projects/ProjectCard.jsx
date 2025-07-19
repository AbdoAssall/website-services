import PropTypes from 'prop-types';
import { useLanguage } from '../../contexts/LanguageContext';

const ProjectCard = ({
    category = '',
    title = '',
    description = '',
    image = '',
    date = '',
    client = '',
    readMoreLink = "#"
}) => {
    const { t } = useLanguage();
    const socialIcons = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'WhatsApp', icon: '💬', href: '#' },
        { name: 'Telegram', icon: '✈️', href: '#' },
        { name: 'Skype', icon: '📞', href: '#' }
    ];

    return (
        <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
            {/* Category Tag */}
            <div className="p-6 pb-4">
                <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Read More Link */}
                <a
                    href={readMoreLink}
                    className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium transition-colors duration-200"
                >
                    {t('projects.readMore')}
                    <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>

                {/* Social Icons */}
                <div className="flex space-x-3 mt-6">
                    {socialIcons.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="w-10 h-10 bg-gray-100 hover:bg-teal-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-200"
                            title={social.name}
                        >
                            <span className="text-sm">{social.icon}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Image with Overlay Info */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-80 object-cover"
                />

                {/* Date and Client Overlay */}
                <div className="absolute bottom-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold uppercase">{t('projects.date')}:</span> {date}
                    </div>
                    <div className="text-sm text-gray-600">
                        <span className="font-semibold uppercase">{t('projects.client')}:</span> {client}
                    </div>
                </div>
            </div>
        </article>
    );
};

ProjectCard.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    readMoreLink: PropTypes.string
};

export default ProjectCard;
