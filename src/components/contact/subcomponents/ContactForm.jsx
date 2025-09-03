// @ts-nocheck
import { useForm } from 'react-hook-form';
import { useLanguage } from '@store/LanguageContext';
import InputLabel from "@components/UI/InputLabel";
import PrimaryButton from "@components/UI/PrimaryButton";
import Textarea from "@components/UI/Textarea";
import TextInput from "@components/UI/TextInput";
import InputError from "@components/UI/InputError";
import { User, Mail, Folder, MessagesSquare } from "lucide-react";

const ContactForm = () => {
    const { isRTL, t } = useLanguage();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset,
    } = useForm({
        mode: 'onChange', // Validate on change for real-time feedback
        defaultValues: {
            name: '',
            email: '',
            address: '',
            message: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            // Simulate API call
            console.log('Form submitted:', data);

            // Here you would typically make an API call
            // await submitContactForm(data);

            // Reset form after successful submission
            reset();

            // Show success message (you can integrate with toast/notification library)
            alert(t('contact.form.success') || 'Message sent successfully!');
        } catch (error) {
            console.error('Submission error:', error);
            // Handle error (show error message)
            alert(t('contact.form.error') || 'Failed to send message. Please try again.');
        }
    };

    // Error handler for form submission errors
    const onError = (errors) => {
        console.log('Form validation errors:', errors);
        // You can handle form-wide errors here if needed
    };

    return (
        <div className={`bg-white p-10 rounded-xl ${isRTL ? 'text-right' : 'text-left'} drop-shadow-lg h-full`}>
            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate={true} className="space-y-6">
                {/* Name Field */}
                <div>
                    <InputLabel htmlFor="name" className={`uppercase ${isRTL ? '!text-base' : ''}`} value={t('contact.form.name')} />
                    <div className="relative">
                        <TextInput
                            id="name"
                            placeholder={t('contact.form.placeholder.name')}
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
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'}`}>
                            <div className="w-6 h-6 flex items-center justify-center">
                                <User className={`w-5 h-5 ${errors.name ? 'text-red-500' : 'text-primary-one'}`} />
                            </div>
                        </div>
                    </div>
                    {errors.name && (
                        <InputError message={errors.name.message} />
                    )}
                </div>

                {/* Email Field */}
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
                            placeholder={t('contact.form.placeholder.email')}
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
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'}`}>
                            <div className="w-6 h-6 flex items-center justify-center">
                                <Mail className={`w-5 h-5 ${errors.email ? 'text-red-500' : 'text-primary-one'}`} />
                            </div>
                        </div>
                    </div>
                    {errors.email && (
                        <InputError message={errors.email.message} />
                    )}
                </div>

                {/* Address Field */}
                <div>
                    <InputLabel
                        htmlFor="address"
                        className={`uppercase ${isRTL ? '!text-base' : ''}`}
                        value={t('contact.form.address')}
                    />
                    <div className="relative">
                        <TextInput
                            id="address"
                            placeholder={t('contact.form.placeholder.address')}
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
                        <div className={`absolute top-1/2 transform -translate-y-1/2 ${isRTL ? 'left-3' : 'right-3'}`}>
                            <div className="w-6 h-6 flex items-center justify-center">
                                <Folder className={`w-5 h-5 ${errors.address ? 'text-red-500' : 'text-primary-one'}`} />
                            </div>
                        </div>
                    </div>
                    {errors.address && (
                        <InputError message={errors.address.message} />
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <InputLabel
                        htmlFor="message"
                        className={`uppercase ${isRTL ? '!text-base' : ''}`}
                        value={t('contact.form.message')}
                    />
                    <div className="relative">
                        <Textarea
                            id="message"
                            placeholder={t('contact.form.placeholder.message')}
                            rows="5"
                            className={`block w-full !mt-2 ${isRTL ? 'text-right' : 'text-left'} ${errors.message ? '!border-red-500 focus:!border-red-500 focus:!ring-red-500' : ''
                                }`}
                            {...register('message', {
                                required: t('contact.form.validation.message.required') || 'Message is required',
                                minLength: {
                                    value: 15,
                                    message: t('contact.form.validation.message.minLength') || 'Message must be at least 15 characters'
                                },
                                maxLength: {
                                    value: 1000,
                                    message: t('contact.form.validation.message.maxLength') || 'Message must not exceed 1000 characters'
                                }
                            })}
                            aria-invalid={errors.message ? 'true' : 'false'}
                        />
                        <div className={`absolute top-4 ${isRTL ? 'left-3' : 'right-3'}`}>
                            <div className="w-6 h-6 flex items-center justify-center">
                                <MessagesSquare className={`w-5 h-5 ${errors.message ? 'text-red-500' : 'text-primary-one'}`} />
                            </div>
                        </div>
                    </div>
                    {errors.message && (
                        <InputError message={errors.message.message} />
                    )}
                </div>
            </form>
            <div className="grid pt-4">
                <PrimaryButton
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleSubmit(onSubmit, onError)}
                    className={`hover:!bg-primary-one/95 ltr:!uppercase ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                    ariaLabel={isSubmitting ? 'Sending message...' : t('contact.form.submit')}
                >
                    {isSubmitting
                        ? (t('contact.form.submitting') || 'Sending...')
                        : (t('contact.form.submit') || 'Send Message')
                    }
                </PrimaryButton>
            </div>
        </div>
    );
}
export default ContactForm;