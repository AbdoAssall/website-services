import { useLanguage } from '@store/LanguageContext';
import InputLabel from "@components/UI/InputLabel";
import TextInput from "@components/UI/TextInput";
import InputError from "@components/UI/InputError";
import { Mail } from "lucide-react";
import PropTypes from 'prop-types';

// @ts-ignore
export const EmailField = ({ register, errors, isPlaceholder, icon }) => {
    const { isRTL, t } = useLanguage();

    return (
        <div>
            <InputLabel
                htmlFor="email"
                className={`uppercase ${isRTL ? '!text-base' : ''}`}
                value={t('contact.form.email')}
            />
            <div className="relative">
                <TextInput
                    type="email"
                    id="email"
                    placeholder={isPlaceholder ? t('contact.form.placeholder.email') : ''}
                    className={`block w-full !mt-1 ${isRTL ? 'text-right' : 'text-left'} ${errors.email ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500' : ''
                        }`}
                    {...register('email', {
                        required: t('contact.form.validation.email.required') || 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t('contact.form.validation.email.pattern') || 'Please enter a valid email address'
                        }
                    })}
                    aria-invalid={errors.email ? 'true' : 'false'}
                />
                {icon && (
                    <div className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <Mail className={`w-5 h-5 ${errors.email ? 'text-red-500' : 'text-primary-one'}`} />
                        </div>
                    </div>
                )}
            </div>
            {errors.email && (
                <InputError message={errors.email.message} />
            )}
        </div>
    );
};

EmailField.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    isPlaceholder: PropTypes.bool,
    icon: PropTypes.bool,
};