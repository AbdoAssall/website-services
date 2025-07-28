import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faTiktok, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = ({
    className = "flex gap-3 mt-4",
    iconClassName = "w-9 h-9 text-sm !bg-primary-three !text-dark-one hover:!bg-primary-one/85 hover:!text-white rounded-full flex items-center justify-center border border-border-dark-one transition-all duration-500",
    customIcons = null,
    showTooltip = false,
    showTitle = false
}) => {
    const defaultSocialIcons = [
        { name: 'Facebook', icon: faFacebookF, href: '#' },
        { name: 'Instagram', icon: faInstagram, href: '#' },
        { name: 'WhatsApp', icon: faWhatsapp, href: '#' },
        { name: 'Tiktok', icon: faTiktok, href: '#' },
        { name: 'Snapchat', icon: faSnapchat, href: '#' }
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
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        </div>
                    ) : (
                        <a
                            href={social.href}
                            className={iconClassName}
                            title={showTitle ? social.name : ''}
                            aria-label={social.name}
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