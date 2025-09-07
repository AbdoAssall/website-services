// @ts-nocheck
import { useLanguage } from '@store/LanguageContext';
import PrimaryButton from "@components/UI/PrimaryButton";
import { NameField } from './Form/NameField';
import { EmailField } from './Form/EmailField';
import { AddressField } from './Form/AddressField';
import { MessageField } from './Form/MessageField';
import { useContactForm } from '@hooks/form/useContactForm';
import PropTypes from 'prop-types';

const ContactForm = ({ isPlaceholder = true, icon = true, className = '' }) => {
    const { isRTL, t, direction } = useLanguage();
    const {
        register,
        handleSubmit,
        errors,
        isSubmitting,
    } = useContactForm();

    return (
        <div dir={direction} className={`bg-white p-10 rounded-xl ${isRTL ? 'text-right' : 'text-left'} drop-shadow-lg h-full ${className}`}>
            <form onSubmit={handleSubmit} noValidate={true} className="space-y-6">
                <input
                    type="text"
                    name="hp"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                />

                {/* Name Field */}
                <NameField
                    register={register}
                    errors={errors}
                    isPlaceholder={isPlaceholder}
                    icon={icon}
                />

                {/* Email Field */}
                <EmailField
                    register={register}
                    errors={errors}
                    isPlaceholder={isPlaceholder}
                    icon={icon}
                />

                {/* Address Field */}
                <AddressField
                    register={register}
                    errors={errors}
                    isPlaceholder={isPlaceholder}
                    icon={icon}
                />

                {/* Message Field */}
                <MessageField
                    register={register}
                    errors={errors}
                    isPlaceholder={isPlaceholder}
                    icon={icon}
                />

                <div className="grid pt-4">
                    <PrimaryButton
                        type="submit"
                        disabled={isSubmitting}
                        className={`hover:!bg-primary-one/95 ltr:!uppercase ${isSubmitting ? '!opacity-75 !cursor-not-allowed' : ''
                            }`}
                        ariaLabel={isSubmitting ? 'Sending message...' : t('contact.form.submit')}
                    >
                        {isSubmitting
                            ? (t('contact.form.submitting') || 'Sending...')
                            : (t('contact.form.submit') || 'Send Message')
                        }
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
}
export default ContactForm;

ContactForm.propTypes = {
    isPlaceholder: PropTypes.bool,
    icon: PropTypes.bool,
    className: PropTypes.string,
};