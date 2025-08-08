import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../store/LanguageContext';

const PageHeader = ({
    title = "Projects",
    breadcrumbs = [{ label: "Home", href: "/" }, { label: "Projects" }],
    backgroundImage = "/assets/images/page-header-default.jpg"
}) => {
    const { isRTL } = useLanguage();

    return (
        <section
            id="page-header"
            className="relative bg-cover bg-center bg-no-repeat bg-fixed py-24 md:py-25 min-h-80 overflow-hidden"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-primary-two/80 z-1"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center text-white">
                    {/* Page Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl !text-white font-bold !mb-5 capitalize">
                        {title}
                    </h1>

                    {/* Breadcrumb Navigation */}
                    <nav className="flex justify-center items-center space-x-2 text-sm md:text-base">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center content-center uppercase font-semibold font-spartan mx-0">
                                {crumb.href ? (
                                    <Link
                                        to={crumb.href}
                                        className="!text-white/75 !text-sm !font-spartan hover:!text-primary-one/100 transition-colors duration-200"
                                    >
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-white text-sm inline-block">
                                        {crumb.label}
                                    </span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <span className="mx-2 text-white/60 inline-block">
                                        <ChevronRight size={16} strokeWidth={4} className={`${isRTL ? 'rotate-180' : ''}`} />
                                    </span>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string,
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            href: PropTypes.string
        })
    ),
    backgroundImage: PropTypes.string
};

export default PageHeader;
