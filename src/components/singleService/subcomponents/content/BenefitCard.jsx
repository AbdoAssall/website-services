// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';

export const BenefitCard = ({ title, description }) => {
    const { isRTL } = useLanguage();

    return (
        <div className={`flex gap-4 bg-white rounded-[0.625rem] pt-[2.188rem] px-7.5 pb-7.5 shadow-2xl ${isRTL ? 'text-right' : ''}`}>
            <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary-one rounded-full flex items-center justify-center">
                    <img src={"/assets/images/icons/true.png"} alt="check icon" className='w-full object-cover' />
                    {/* <Icon size={24} className="text-white" aria-hidden="true" /> */}
                </div>
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl !font-semibold text-heading-dark">
                    {title}
                </h3>
                <p className="text-dark-one text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

BenefitCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // icon: PropTypes.elementType.isRequired,
};