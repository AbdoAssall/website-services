import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useLanguage } from '@store/LanguageContext';

// Get the base URL from environment variables
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Centralized API client for making requests
const apiClient = {
    // @ts-ignore
    get: (url) => fetch(url, { credentials: 'include' }),
    // @ts-ignore
    post: (url, data, csrfToken) => fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
        },
        credentials: 'include',
        body: JSON.stringify(data)
    })
};

/**
 * A custom hook to manage all the logic for the contact form.
 * This includes form state, CSRF token handling, and submission.
 */
export const useContactForm = () => {
    const { t } = useLanguage();
    const [csrfToken, setCsrfToken] = useState('');

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

    // Effect to fetch the CSRF token when the hook is first used
    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await apiClient.get('/api/csrf-token');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setCsrfToken(data.csrfToken);
            } catch (error) {
                // console.error('Failed to fetch CSRF token:', error);
                // toast.error('A security error occurred. Please refresh the page.');
            }
        };

        fetchCsrfToken();
    }, []);

    // Submission handler
    // @ts-ignore
    const handleFormSubmit = async (data) => {
        if (!csrfToken) {
            toast.error('Cannot send message. Security token is missing.');
            return;
        }

        try {
            const payload = { ...data, hp: '' }; // Add honeypot field
            const response = await apiClient.post('/api/contact', payload, csrfToken);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to send message');
            }

            reset();
            toast.success(t('contact.form.success') || 'Message sent successfully!');

        } catch (error) {
            console.error('Submission error:', error);
            // @ts-ignore
            toast.error(error.message || t('contact.form.error') || 'Failed to send message.');
        }
    };

    // Return everything the component needs
    return {
        register,
        handleSubmit: handleSubmit(handleFormSubmit), // Wrap the submit handler
        errors,
        isSubmitting,
    };
};
