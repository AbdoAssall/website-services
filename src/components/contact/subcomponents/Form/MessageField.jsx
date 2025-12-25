import { useLanguage } from '@store/LanguageContext';
import InputLabel from "@components/UI/InputLabel";
import Textarea from "@components/UI/Textarea";
import InputError from "@components/UI/InputError";
import { MessagesSquare } from "lucide-react";
import PropTypes from 'prop-types';

// @ts-ignore
export const MessageField = ({ register, errors, isPlaceholder, icon }) => {
    const { isRTL, t } = useLanguage();

    return (
        <div>
            <InputLabel
                htmlFor="message"
                className={`uppercase ${isRTL ? '!text-base' : ''}`}
                value={t('contact.form.message')}
            />
            <div className="relative">
                <Textarea
                    id="message"
                    name="message"
                    placeholder={isPlaceholder ? t('contact.form.placeholder.message') : ''}
                    rows="5"
                    className={`block w-full !mt-2 ${isRTL ? 'text-right' : 'text-left'} ${errors.message ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500' : ''
                        }`}
                    {...register('message', {
                        required: t('contact.form.validation.message.required') || 'Message is required',
                        minLength: {
                            value: 8,
                            message: t('contact.form.validation.message.minLength') || 'Message must be at least 8 characters'
                        },
                        // maxLength: {
                        //     value: 1000,
                        //     message: t('contact.form.validation.message.maxLength') || 'Message must not exceed 1000 characters'
                        // }
                    })}
                    aria-invalid={errors.message ? 'true' : 'false'}
                />
                {icon && (
                    <div className={`absolute top-4 ${isRTL ? 'left-3' : 'right-3'}`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                            <MessagesSquare className={`w-5 h-5 ${errors.message ? 'text-red-500' : 'text-primary-one'}`} />
                        </div>
                    </div>
                )}
            </div>
            {errors.message && (
                <InputError message={errors.message.message} />
            )}
        </div>
    );
};

MessageField.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    isPlaceholder: PropTypes.bool,
    icon: PropTypes.bool,
};