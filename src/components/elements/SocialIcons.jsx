import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faTiktok, faLinkedin,faSnapchat } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = ({
    className = "flex gap-3 mt-4",
    iconClassName = "w-9 h-9 text-sm !bg-primary-three !text-dark-one hover:!bg-primary-one/85 hover:!text-white rounded-full flex items-center justify-center border border-border-dark-one transition-all duration-500",
    customIcons = null,
    showTooltip = false,
    showTitle = false,
    ...props
}) => {
    const defaultSocialIcons = [
        { name: 'Facebook', icon: faFacebookF, href: 'https://www.facebook.com/share/17GCWtEE8H/' },
        { name: 'Instagram', icon: faInstagram, href: 'https://www.instagram.com/scopehub10?igsh=MWJwenFxYWIxY3FhMw==' },
        { name: 'WhatsApp', icon: faWhatsapp, href: 'https://wa.me/201065378259' },
        { name: 'Linkedin', icon: faLinkedin, href: 'http://linkedin.com/company/scope-hub' },
        // { name: 'Tiktok', icon: faTiktok, href: '' },
        // { name: 'Snapchat', icon: faSnapchat, href: '' }
    ];

    const socialIcons = customIcons || defaultSocialIcons;

    return (
        <div className={className}>
            {socialIcons.map((social, index) => (
                <div key={index}>
                    {showTooltip ? (
                        <div className="tooltip">
                            <div className="tooltip-content bg-white">
                                <div className="text-primary-one bg-white text-sm font-medium lowercase">
                                    {social.name}
                                </div>
                            </div>
                            <a
                                href={social.href}
                                className={iconClassName}
                                title={showTitle ? social.name : ''}
                                aria-label={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                {...props}
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        </div>
                    ) : (
                        <a
                            href={social.href}
                            className={iconClassName}
                            title={showTitle ? social.name : ''}
                            target="_blank"
                            aria-label={social.name}
                            {...props}
                        >
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

SocialIcons.propTypes = {
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    customIcons: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
        href: PropTypes.string.isRequired
    })),
    showTooltip: PropTypes.bool,
    showTitle: PropTypes.bool
};

export default SocialIcons;
