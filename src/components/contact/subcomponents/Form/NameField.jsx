import { useLanguage } from '@store/LanguageContext';
import InputLabel from "@components/UI/InputLabel";
import TextInput from "@components/UI/TextInput";
import InputError from "@components/UI/InputError";
import { User } from "lucide-react";
import PropTypes from 'prop-types';

// @ts-ignore
export const NameField = ({ register, errors, isPlaceholder, icon }) => {
    const { isRTL, t } = useLanguage();

    return (
        <div>
            <InputLabel htmlFor="name" className={`uppercase ${isRTL ? '!text-base' : ''}`} value={t('contact.form.name')} />
            <div className="relative">
                <TextInput
                    id="name"
                    placeholder={isPlaceholder ? t('contact.form.placeholder.name') : ''}
                    className={`block w-full !mt-1 ${isRTL ? 'text-right' : 'text-left'} ${errors.name ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500' : ''
                        }`}
                    {...register('name', {
                        required: t('contact.form.validation.name.required') || 'Name is required',
                        minLength: {
                            value: 3,
                            message: t('contact.form.validation.name.minLength') || 'Name must be at least 3 characters'
                        },
                        maxLength: {
                            value: 50,
                            message: t('contact.form.validation.name.maxLength') || 'Name must not exceed 50 characters'
                        },
                        pattern: {
                            value: /^[a-zA-Z\s]+$/,
                            message: t('contact.form.validation.name.pattern') || 'Name can only contain letters and spaces'
                        }
                    })}
                    aria-invalid={errors.name ? 'true' : 'false'}
                />
                {icon && (
                    <div className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <User className={`w-5 h-5 ${errors.name ? 'text-red-500' : 'text-primary-one'}`} />
                        </div>
                    </div>
                )}
            </div>
            {errors.name && (
                <InputError message={errors.name.message} />
            )}
        </div>
    );
};

NameField.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    isPlaceholder: PropTypes.bool,
    icon: PropTypes.bool,
};