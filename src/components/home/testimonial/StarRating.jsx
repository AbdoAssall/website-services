/* eslint-disable react/prop-types */
// @ts-nocheck
import { memo } from 'react';

export const StarRating = memo(({ rating, t, clientName }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <div
            key={index}
            className={`mask mask-star bg-primary-one`}
            aria-label={`${index + 1} star`}
            aria-current={index < rating ? "true" : "false"}
            role="img"
        />
    ));

    return (
        <div
            className="rating rating-xs gap-2"
            role="img"
            aria-label={`${rating} ${t('testimonials.rating.alt')}`}
            title={`${clientName} - ${rating}/5 ${t('testimonials.rating.star')}`}
        >
            {stars}
        </div>
    );
});
StarRating.displayName = 'StarRating';