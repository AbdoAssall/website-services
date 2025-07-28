/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import PrimaryLink from '../../UI/PrimaryLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Loading2 as Spinner } from '../../elements/Loading2';
import SocialIcons from '../../elements/SocialIcons';

const Footer = () => {
    const [projectsData, setProjectsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { t, isRTL, direction, language } = useLanguage();

    const socialLinks = [
        { name: 'facebook', icon: faFacebookF, url: '#' },
        { name: 'instagram', icon: faInstagram, url: '#' },
        { name: 'twitter', icon: faTwitter, url: '#' },
        { name: 'linkedin', icon: faLinkedinIn, url: '#' },
    ];

    // Essentials section links array
    const essentialLinks = Array.from({ length: 7 }, (_, i) => ({
        title: t(`footer.essentialLinks.${i}.title`),
        path: t(`footer.essentialLinks.${i}.path`),
    }));

    // const essentialLinks1 = [
    //     // { title: "Infrastructure", path: "#" },
    //     // { title: "Client Support", path: "#" },
    //     // { title: "Privacy Policy", path: "#" },
    //     // { title: "Terms of Use", path: "#" },
    //     // { title: "Professionals", path: "#" },
    //     // { title: "Careers", path: "#" },
    //     // { title: "Sitemap", path: "#" },
    // ];

    const PostItem = ({ date, title, imagePath }) => {
        return (
            <div className="flex space-x-4">
                <div className="flex-shrink-0 relative overflow-hidden rounded-[0.313rem]">
                    <div className="absolute inset-0 bg-primary-one opacity-0 group-hover:opacity-70 transition-all duration-500 z-10 rounded-[0.313rem]"></div>
                    <img
                        src={imagePath}
                        alt={title}
                        className="!w-18 !h-18 object-cover rounded-[0.313rem]"
                        height="750"
                        width="420"
                        srcSet={`${imagePath} 750w, ${imagePath} 600w, ${imagePath}} 300w`}
                        sizes="(max-width: 750px) 100vw, 750px"
                    />
                </div>
                <div>
                    <div className="flex items-center gap-2 text-xs text-white/85 mb-1">
                        <Clock size={12} />
                        {date}
                    </div>
                    <h2 className="!leading-6.5 !font-semibold">
                        <Link to="#" aria-label={title} className="text-sm !text-white hover:!text-primary-one transition-colors">
                            {title}
                        </Link>
                    </h2>
                </div>
            </div>
        );
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('api/projects.json');
                const data = await response.json();
                setProjectsData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Get translated projects based on current language
    const translatedProjects = () => {
        if (!projectsData?.projects) return [];

        return projectsData.projects.map(project => ({
            ...project,
            name: project[language]?.name || project.ar.name,
            category: project[language]?.category || project.ar.category,
        }));
    };

    const projects = translatedProjects();
    const date = new Date().getFullYear();

    return (
        <footer dir={direction} className="mt-16 pt-16 pb8 relative bg-cover bg-no-repeat bg-center w-full h-full bg-primary-two"
            style={{ backgroundImage: 'url("assets/images/footer-bg.jpg")' }}>
            <div className="mx-auto px-4 xl:px-0 max-w-6xl flex flex-col md:flex-row gap-12 md:gap-0">
                {/* Left Section */}
                <div className="md:w-[28.244%] flex">
                    <div className="md:mb-7.5 md:p-2.5 flex flex-wrap flex-col content-start w-full relative">
                        <div className="mb-5 w-full">
                            <Link to="/" className="pb-[15px] text-start m-0" aria-label={t('navbar.logoAlt')}>
                                <img
                                    alt={t('navbar.logoAlt')}
                                    className="w-42.5 h-auto border-0"
                                    src="assets/images/logo-white.png"
                                    loading='lazy'
                                />
                            </Link>
                        </div>
                        <div className="mb-5 w-full">
                            <p className="pb-2.5 !m-0 !text-base text-white text-start">
                                {t('footer.description')}
                            </p>
                        </div>
                        <div className="pb-3">
                            <PrimaryLink
                                className="!inline-block !min-w-40 !bg-transparent !border-[#FFFFFF0F] hover:!bg-white"
                                ariaLabel={t('footer.readMore')}
                                type="button"
                            >
                                {t('footer.readMore')}
                            </PrimaryLink>
                        </div>
                        <div className="w-full">
                            <SocialIcons
                                className='flex gap-4 mt-4'
                                iconClassName='w-9 h-9 rounded-full !bg-primary-one flex items-center justify-center text-sm !text-white transition-all'
                                showTooltip={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Essentials Section */}
                <div className="md:w-[17.06%] flex">
                    <div className="md:mb-7.5 md:pt-7 md:px-[0.938rem] flex flex-wrap flex-col content-start w-full relative">
                        <div className="pb-4.5 mb-6">
                            <div className="relative before:absolute before:w-14 before:h-0.5 before:bg-primary-one before:inset-x-0 before:-bottom-3">
                                <h3 className="!text-white font-bold text-xl">
                                    {t('footer.essentials')}
                                </h3>
                            </div>
                        </div>
                        <ul>
                            {essentialLinks?.map((link, index) => (
                                <li key={index} className="flex items-center gap-2 pb-3">
                                    <MoveRight size={18} className={`text-[#FFFFFF4A] ${isRTL ? 'rotate-180' : ''}`} />
                                    <Link
                                        to={link.path}
                                        arial-label={link.title}
                                        className="!text-white hover:!text-white/80 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Projects Section - Replaced Recent Posts */}
                <div className="md:w-[30.40%] flex">
                    <div className="md:mb-7.5 md:pt-7 md:pr-7.5 md:pl-[0.938rem] flex flex-wrap flex-col content-start w-full relative">
                        <div className="pb-4.5 mb-6">
                            <div className="relative before:absolute before:w-14 before:h-0.5 before:bg-primary-one before:inset-x-0 before:-bottom-3">
                                <h3 className="!text-white font-bold text-xl">
                                    {t('footer.projects')}
                                </h3>
                            </div>
                        </div>
                        <ul className="md:mb-7.5">
                            {loading ? (
                                <Spinner />
                            ) : (
                                projects.slice(0, 3).map((project) => (
                                    <li key={project.id} className="!mb-[1.563rem] group">
                                        <PostItem
                                            date="October 8, 2021"
                                            title={project.name}
                                            imagePath={project.img}
                                        />
                                    </li>
                                ))
                            )}
                            {!loading && projects.length === 0 && (
                                <li className="text-gray-400">{t('footer.available')}</li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="md:w-[24.25%] flex">
                    <div className="md:mb-7.5 md:pt-7 md:px-[0.938rem] flex flex-wrap flex-col content-start w-full relative">
                        <div className="pb-4.5 mb-6">
                            <div className="relative before:absolute before:w-14 before:h-0.5 before:bg-primary-one before:inset-x-0 before:-bottom-3">
                                <h3 className="!text-white font-bold text-xl">
                                    {t('footer.contactUs')}
                                </h3>
                            </div>
                        </div>
                        <ul>
                            <li className="flex gap-3">
                                <MapPin size={20} className="text-primary-one mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-white capitalize">
                                        {t('footer.address')}
                                    </span>
                                    <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                        {t('contact.address')}
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={20} className="text-primary-one mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-white capitalize">
                                        {t('footer.phone')}
                                    </span>
                                    <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                        +555 5678 12340
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={20} className="text-primary-one mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-white select-none capitalize">
                                        {t('footer.email')}
                                    </span>
                                    <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                        support@creote.com
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="py-5 mt-8 md:mt-0 bg-primary-one text-white text-center text-sm">
                {language === 'en'
                    ? `Copyright © ${date} ScopHub. All Rights Reserved - Powered By`
                    : `© ${date} ScopHub. جميع الحقوق محفوظة - تطوير ودعم تقني بواسطة`
                }
                <a
                    className="!text-white font-bold hover:!text-gray-300"
                    href="https://abdoassal-portfolio.netlify.app/"
                    target="_blank"
                >
                    {" "} AbdoAssal
                </a>.
            </div>
        </footer>
    );
};

export default Footer;