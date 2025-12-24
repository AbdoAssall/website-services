// @ts-nocheck
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../store/LanguageContext';
import { FooterBranding } from './sections/FooterBranding';
import { EssentialsSection } from './sections/EssentialsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';

const Footer = () => {
    const { t, isRTL, direction, language } = useLanguage();
    const date = new Date().getFullYear();

    return (
        <footer dir={direction} className="mt-16 pt-16 pb8 relative bg-cover bg-no-repeat bg-center w-full h-full bg-primary-two"
            style={{ backgroundImage: 'url("assets/images/footer-bg.jpg")' }}>
            <div className="mx-auto px-4 xl:px-0 max-w-6xl flex flex-col md:flex-row flex-wrap gap-12 md:gap-0">
                {/* Left/Right Section */}
                <FooterBranding />
                {/* Essentials Section */}
                <EssentialsSection t={t} isRTL={isRTL} Link={Link} />
                {/* Projects Section - Replaced Recent Posts */}
                <ProjectsSection />
                {/* Contact Us Section */}
                <ContactSection />
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