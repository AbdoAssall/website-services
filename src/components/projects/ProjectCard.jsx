// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const ProjectCard = ({
    category = '',
    title = '',
    description = '',
    image = '',
    date = '',
    client = '',
    readMoreLink = "#"
}) => {
    const { t, isRTL } = useLanguage();
    const socialIcons = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'WhatsApp', icon: '💬', href: '#' },
        { name: 'Telegram', icon: '✈️', href: '#' },
        { name: 'Skype', icon: '📞', href: '#' }
    ];

    return (
        <article className={`group bg-white ${isRTL ? ' pl-7.5 pr-7.5 lg:pr-0' : 'pr-7.5 pl-7.5 lg:pl-0'} py-7.5 rounded-[0.625rem] shadow-lg border border-gray-100 overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300`}>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col lg:px-[2.188rem] lg:py-[0.313rem] lg:w-7/20">
                    {/* Category Tag */}
                    <div className="pb-4">
                        <span className="inline-block bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                            {category}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="">
                        {/* Title */}
                        <h2 className={`text-xl md:text-[1.375rem] font-bold text-primary-two !mb-5 pb-5 border-b border-border-dark-one ${isRTL ? '!leading-9' : '!leading-7'}`}>
                            <Link
                                to={readMoreLink}
                                className='!m-0 !p-0'
                            >
                                {title}
                            </Link>
                        </h2>

                        {/* Description */}
                        <p className="text-dark-one text-base mb-6 leading-relaxed font-inter !font-normal">
                            {description}
                        </p>

                        {/* Read More Link */}
                        <Link
                            to={readMoreLink}
                            className="inline-flex items-center !text-[0.938rem] leading-6 text-primary-one hover:!text-primary-one/85 transition-colors duration-300"
                        >
                            {t('projects.readMore')}
                            <MoveRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
                        </Link>

                        {/* Social Icons */}
                        <div className="flex space-x-3 mt-4">
                            {socialIcons.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 !bg-primary-three !text-dark-one hover:!bg-primary-one/85 hover:!text-white rounded-full flex items-center justify-center border border-border-dark-one transition-all duration-500"
                                    title={social.name}
                                >
                                    <span className="text-sm">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image with Overlay Info */}
                <div className="relative overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-87.5 lg:!h-full object-cover rounded-[0.625rem]"
                    />

                    {/* Date and Client */}
                    <div className="absolute bottom-0 right-7.5 z-2 bg-primary-three rounded-t-[0.625rem] p-5">
                        <div className="text-sm font-normal text-primary-two mb-1 leading-relaxed">
                            <span className="!text-[0.813rem] font-semibold uppercase">{t('projects.date')}:</span> {date}
                        </div>
                        <div className="text-sm font-normal text-primary-two leading-relaxed">
                            <span className="!text-[0.813rem] font-semibold uppercase">{t('projects.client')}:</span> {client}
                        </div>
                    </div>

                    {/* Hover Overlay - Animates from bottom */}
                    <div
                        className="absolute inset-0 bg-primary-one opacity-0 rounded-[0.625rem] transform translate-y-full group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-500 ease-in-out"
                    ></div>
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
