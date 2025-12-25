import Section from "../../UI/Section";
import PrimaryLink from "../../UI/PrimaryLink";
import { Briefcase, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '../../../store/LanguageContext';
import { motion } from 'framer-motion';
import { itemVariantsRight } from '@utils/variants/animationVariants';

const Contact = () => {
    const { t, isRTL } = useLanguage();

    return (
        <Section
            className="pb:6 md:!py-0 bg-cover bg-no-repeat w-full h-full"
            style={{ backgroundImage: 'url("assets/images/consult-bg.jpg")' }}
        >
            <div dir="ltr" className="flex w-full flex-col md:flex-row items-center">
                {/* Left side with image */}
                <div className="md:w-1/2 md:h-120">
                    <div className="-mt-22 flex justify-center md:justify-end">
                        <img
                            src="assets/images/cosnsult-bg.png"
                            alt={t('contactUs.alt')}
                            className="md:!h-143 align-middle object-contain inline-block"
                            loading="lazy"
                            width="550"
                            height="572"
                            srcSet="assets/images/cosnsult-bg.png 382w, assets/images/cosnsult-bg.png 201w"
                            sizes="(max-width: 382px) 100vw, 382px"
                            data-label="img.attachment-large"
                        />
                    </div>
                </div>
                <div className="divider md:!w-[calc(0.25rem*5)] md:divider-horizontal"></div>
                {/* Right side with content */}
                <motion.div
                    className={`md:w-1/2 ${isRTL ? 'text-right' : 'text-start'}`}
                    variants={itemVariantsRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className={`flex gap-3 items-center ${isRTL ? 'justify-end' : 'justify-start'}`}>
                        <Briefcase className="text-primary-one w-5 h-5" />
                        <h3 className="section-title">{t('contactUs.title')}</h3>
                    </div>
                    <div className="mt-1 md:mt-3">
                        <h2 className={`text-3xl md:text-[2.75rem] font-bold text-primary-two capitalize ${isRTL ? '!leading-13' : '!leading-10'}`}>
                            {t('contactUs.mainTitle')}
                        </h2>
                        <p className="mt-3 !mb-6 md:!mb-0 text-dark-one">
                            <bdi>{t('contactUs.description')}</bdi>
                        </p>
                    </div>
                    <div className="border border-dashed border-t-primary-one/60 h-fit md:!mt-6"></div>
                    <div className={`mt-10 flex gap-12 sm:gap-10 flex-col-reverse ${isRTL ? 'sm:flex-row' : 'sm:flex-row-reverse'} justify-end sm:items-center h-fit`}>
                        <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className="w-12.5 h-12.5 content-center rounded-full bg-primary-one text-white">
                                <Phone className="w-6 h-6 mx-auto" />
                            </div>
                            <div className="">
                                <h4 className="text-lg !font-semibold text-primary-two">{t('contactUs.phone')}</h4>
                                <Link to={`tel:${t('contact.phone')}`} aria-label={t('contactUs.label')} className="!text-light-gray">
                                    {t('contact.phone')}
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <PrimaryLink to="/contact" ariaLabel={`${t('contact.form.readMore')}`}>{t('contactUs.contactUs')}</PrimaryLink>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
export default Contact;