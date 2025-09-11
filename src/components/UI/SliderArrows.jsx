/* eslint-disable react/prop-types */
// @ts-nocheck
import { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const NextArrow = memo((props) => {
    const { onClick, t } = props;
    return (
        <button
            type="button"
            aria-label={t ? t('testimonials.navigation.next') : 'Next'}
            onClick={onClick}
            className="absolute right-0 md:-right-4 top-1/2 z-30 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-full bg-primary-three text-heading-dark backdrop-blur-sm transition-colors hover:bg-primary-one hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-one focus:ring-offset-2"
        >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
    );
});
NextArrow.displayName = 'NextArrow';

export const PrevArrow = memo((props) => {
    const { onClick, t } = props;
    return (
        <button
            type="button"
            aria-label={t ? t('testimonials.navigation.previous') : 'Previous'}
            onClick={onClick}
            className="absolute left-0 md:-left-4 top-1/2 z-30 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-full bg-primary-three text-heading-dark backdrop-blur-sm transition-colors hover:bg-primary-one hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-one focus:ring-offset-2"
        >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
    );
});
PrevArrow.displayName = 'PrevArrow';