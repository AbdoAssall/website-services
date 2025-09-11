import PropTypes from 'prop-types';
import { MoveRight } from 'lucide-react';
import { useMemo } from 'react';

/**
 * @param {{ t: (key: string) => string, isRTL: boolean, Link: React.ComponentType<any> }} props
*/

export const EssentialsSection = ({ t, isRTL, Link }) => {
    const essentialLinks = useMemo(() => {
        return Array.from({ length: 7 }, (_, i) => ({
            title: t(`footer.essentialLinks.${i}.title`),
            path: t(`footer.essentialLinks.${i}.path`),
        }));
    }, [t]);

    return (
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
    );
};

EssentialsSection.propTypes = {
    t: PropTypes.func.isRequired,
    isRTL: PropTypes.bool.isRequired,
    Link: PropTypes.elementType.isRequired,
}