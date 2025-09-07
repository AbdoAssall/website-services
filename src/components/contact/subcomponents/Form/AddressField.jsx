import { useLanguage } from '@store/LanguageContext';
import InputLabel from "@components/UI/InputLabel";
import TextInput from "@components/UI/TextInput";
import InputError from "@components/UI/InputError";
import { Folder } from "lucide-react";
import PropTypes from 'prop-types';

// @ts-ignore
export const AddressField = ({ register, errors, isPlaceholder, icon }) => {
    const { isRTL, t } = useLanguage();

    return (
        <div>
            <InputLabel
                htmlFor="address"
                className={`uppercase ${isRTL ? '!text-base' : ''}`}
                value={t('contact.form.address')}
            />
            <div className="relative">
                <TextInput
                    id="address"
                    placeholder={isPlaceholder ? t('contact.form.placeholder.address') : ''}
                    className={`block w-full !mt-1 ${isRTL ? 'text-right' : 'text-left'} ${errors.address ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500' : ''
                        }`}
                    {...register('address', {
                        required: t('contact.form.validation.address.required') || 'Address is required',
                        minLength: {
                            value: 10,
                            message: t('contact.form.validation.address.minLength') || 'Address must be at least 10 characters'
                        }
                    })}
                    aria-invalid={errors.address ? 'true' : 'false'}
                />
                {icon && (
                    <div className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <Folder className={`w-5 h-5 ${errors.address ? 'text-red-500' : 'text-primary-one'}`} />
                        </div>
                    </div>
                )}
            </div>
            {errors.address && (
                <InputError message={errors.address.message} />
            )}
        </div>
    );
};

AddressField.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    isPlaceholder: PropTypes.bool,
    icon: PropTypes.bool,
};