// @ts-nocheck
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useLanguage } from '@store/LanguageContext';
import emailjs from '@emailjs/browser';

// Environment variables for EmailJS (Replace these with your actual keys or use import.meta.env)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const useContactForm = () => {
    const { t } = useLanguage();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            address: '',
            message: ''
        }
    });

    const handleFormSubmit = async (data) => {
        // Optional: Client-side HoneyPot check
        // If you register a hidden field 'hp' and it has a value, it's likely a bot.
        if (data.hp) return; 

        try {
            const templateParams = {
               name: data.name,
                email: data.email,
                title: data.address,
                message: data.message,
                to_name: "Admin", // Or whoever receives the email
            };

            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            reset();
            toast.success(t('contact.form.success') || 'Message sent successfully!');

        } catch (error) {
            console.error('EmailJS Error:', error);
            toast.error(t('contact.form.error') || 'Failed to send message.');
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(handleFormSubmit),
        errors,
        isSubmitting,
    };
};