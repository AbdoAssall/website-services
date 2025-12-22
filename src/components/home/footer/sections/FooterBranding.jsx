// @ts-nocheck
import SocialIcons from '../../../elements/SocialIcons';
import PrimaryLink from '../../../UI/PrimaryLink';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../../store/LanguageContext';

export const FooterBranding = () => {
    const { t } = useLanguage();
    return (
        <div className="md:w-[28.244%] flex">
            <div className="md:mb-7.5 md:p-2.5 flex flex-wrap flex-col content-start w-full relative">
                <div className="mb-5 w-full">
                    <Link to="/" className="pb-[15px] text-start m-0" aria-label={t('navbar.logoAlt')}>
                        <img
                            alt={t('navbar.logoAlt')}
                            className="w-66.5 md:w-53.5 h-auto border-0"
                            src="/assets/images/logo-white.png"
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
                        to='/about-us'
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
    );
};