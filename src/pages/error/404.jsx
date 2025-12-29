import { useCallback, useState } from 'react';
import { SearchBarInput } from '@components/common/SearchBarInput';
import PrimaryLink from '@components/UI/PrimaryLink';
import { useLanguage } from '@store/LanguageContext';

const NotFoundPage = () => {
    const { t, direction, isRTL } = useLanguage();
    const [, setOpenSearch] = useState(false);

    const openSearchBar = useCallback(() => {
        setOpenSearch((prev) => !prev);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-white font-sans p-4">
            <div className="container mx-auto">
                <div dir="ltr" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img src={'../../../assets/images/404.png'} alt="404 Not Found" loading="lazy" className="max-w-full h-auto" />
                    </div>

                    {/* Content Section */}
                    <div dir={direction} className={`${isRTL ? 'text-right' : 'text-left'}`}>
                        <h1 className="!text-5xl md:!text-7xl font-bold !text-primary-one !mb-4 font-spartan">
                            {t('error.404.oops')}
                        </h1>
                        <h2 className="!text-2xl md:!text-3xl !font-semibold !text-heading-dark !mb-3 font-spartan">
                            {t('error.404.description1')}
                        </h2>
                        <p className="text-base !text-dark-one !mb-8 font-inter">
                            {t('error.404.description2')}
                        </p>

                        <div className="max-w-full mx-auto md:mx-0 mb-6">
                            <SearchBarInput openSearchBar={openSearchBar} styleSearchBtn="!p-2" />
                        </div>

                        {/* Back to Home Button */}
                        <div className="flex justify-center md:justify-start">
                            <PrimaryLink to="/" ariaLabel={t('error.404.backToHome')}>
                                {t('error.404.backToHome')}
                            </PrimaryLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;