/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import PrimaryLink from '../../UI/PrimaryLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useDirection } from '../../../contexts/DirectionContext';

const Footer = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isRTL } = useDirection();

    const socialLinks = [
        { name: 'facebook', icon: faFacebookF, url: '#' },
        { name: 'instagram', icon: faInstagram, url: '#' },
        { name: 'twitter', icon: faTwitter, url: '#' },
        { name: 'linkedin', icon: faLinkedinIn, url: '#' },
    ];

    // Essentials section links array
    const essentialLinks = [
        { title: "Infrastructure", path: "#" },
        { title: "Client Support", path: "#" },
        { title: "Privacy Policy", path: "#" },
        { title: "Terms of Use", path: "#" },
        { title: "Professionals", path: "#" },
        { title: "Careers", path: "#" },
        { title: "Sitemap", path: "#" },
    ];


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
                        <Link to="#" className="text-sm !text-white hover:!text-primary-one transition-colors">
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
                const response = await fetch('/src/api/projects.json');
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <footer className="mt-16 pt-16 pb8 relative bg-cover bg-no-repeat bg-center w-full h-full bg-primary-two"
            style={{ backgroundImage: 'url("assets/images/footer-bg.jpg")' }}>
            <div className="mx-auto px-4 xl:px-0 max-w-6xl flex flex-col md:flex-row gap-12 md:gap-0">
                {/* Left Section */}
                <div className="md:w-[28.244%] flex">
                    <div className="md:mb-7.5 md:p-2.5 flex flex-wrap flex-col content-start w-full relative">
                        <div className="mb-5 w-full">
                            <Link to="#" className="pb-[15px] text-start m-0">
                                <img
                                    alt="scopehub"
                                    className="w-42.5 h-auto border-0"
                                    src="assets/images/logo-white.png"
                                />
                            </Link>
                        </div>
                        <div className="mb-5 w-full">
                            <p className="pb-2.5 !m-0 !text-base text-white text-start">
                                بخبرة تزيد عن 20 عامًا، نضمن لك الحصول دائمًا على أفضل توجيه. نخدم عملائنا على جميع مستويات مؤسساتهم...
                            </p>
                        </div>
                        <div className="pb-3">
                            <PrimaryLink
                                className="!inline-block !min-w-40 !bg-transparent !border-[#FFFFFF0F] hover:!bg-white"
                                ariaLabel="Read more"
                                type="button"
                            >
                                {/* Read More */}
                                اقرأ المزيد
                            </PrimaryLink>
                        </div>
                        <div className="flex gap-4 mt-4 w-full">
                            {socialLinks.map((item, index) => (
                                <div className="tooltip" key={index}>
                                    <div className="tooltip-content bg-white">
                                        <div className="text-primary-one bg-white text-sm font-medium lowercase">
                                            {item.name}
                                        </div>
                                    </div>
                                    <Link
                                        to={item.url}
                                        aria-label={item.name}
                                        className="w-9 h-9 rounded-full !bg-primary-one flex items-center justify-center text-sm !text-white transition-all"
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Essentials Section */}
                <div className="md:w-[17.06%] flex">
                    <div className="md:mb-7.5 md:pt-7 md:px-[0.938rem] flex flex-wrap flex-col content-start w-full relative">
                        <div className="pb-4.5 mb-6">
                            <div className="relative before:absolute before:w-14 before:h-0.5 before:bg-primary-one before:inset-x-0 before:-bottom-3">
                                <h3 className="!text-white font-bold text-xl">
                                    الأساسيات
                                    {/* Essentials */}
                                </h3>
                            </div>
                        </div>
                        <ul>
                            {essentialLinks.map((link, index) => (
                                <li key={index} className="flex items-center gap-2 pb-3">
                                    <MoveRight size={18} className={`text-[#FFFFFF4A] ${isRTL ? 'rotate-180' : ''}`} />
                                    <Link
                                        to={link.path}
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
                                    المشاريع
                                </h3>
                            </div>
                        </div>
                        <ul className="md:mb-7.5">
                            {loading ? (
                                <span className="loading loading-spinner text-success inline-block mx-auto"></span>
                            ) : (
                                projects.slice(0, 3).map((project, index) => (
                                    <li key={index} className="!mb-[1.563rem] group">
                                        <PostItem
                                            date="October 8, 2021"
                                            title={project.name}
                                            imagePath={project.img}
                                        />
                                    </li>
                                ))
                            )}
                            {!loading && projects.length === 0 && (
                                <li className="text-gray-400">No projects available</li>
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
                                    تواصل معنا
                                </h3>
                            </div>
                        </div>
                        <ul>
                            <li className="flex gap-3">
                                <MapPin size={20} className="text-primary-one mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-white">
                                        Address
                                    </span>
                                    <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                        United States 866 Wilshire, 2nd Street Los Angeles 90024.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Phone size={20} className="text-primary-one mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-white">
                                        Phone
                                    </span>
                                    <p className="max-w-xs mt-2 !text-sm !font-semibold text-[#FFFFFFD4] leading-relaxed">
                                        +555 5678 12340
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-3">
                                <Mail size={20} className="text-primary-one mt-1 flex-shrink-0" />
                                <div>
                                    <span className="font-semibold text-white select-none">
                                        Email
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
                Copyright © 2025 ScopHub. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;