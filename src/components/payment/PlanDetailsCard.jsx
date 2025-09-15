// @ts-nocheck
/* eslint-disable react/prop-types */
import { CheckCircle, CircleX } from 'lucide-react';

const PlanDetailsCard = ({ plan, currencyFormatter, t }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-border-dark-one p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="!text-xl font-bold" style={{ color: 'var(--color-heading-dark)' }}>
                    {t('payment.planDetails')}
                </h2>
                {plan.recommended && (
                    <span
                        className="px-3 py-1 rounded-full text-sm font-medium text-white"
                        style={{ backgroundColor: 'var(--color-primary-one)' }}
                    >
                        {t('payment.recommended')}
                    </span>
                )}
            </div>
            <div className="space-y-4">
                <div>
                    <h3 className="!text-lg font-semibold mb-1" style={{ color: 'var(--color-primary-two)' }}>
                        {plan.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-dark-two)' }}>
                        {plan.description}
                    </p>
                </div>
                <div className="border-t pt-4" style={{ borderColor: 'var(--color-border-dark-one)' }}>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold" style={{ color: 'var(--color-primary-two)' }}>
                            {currencyFormatter(plan.price)}
                        </span>
                        <span className="text-lg" style={{ color: 'var(--color-dark-two)' }}>
                            /{t('payment.period')}
                        </span>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3" style={{ color: 'var(--color-heading-dark)' }}>
                            {t('payment.features')}:
                        </h4>
                        <ul className="space-y-2">
                            {plan.features.map((feature, index) => {
                                const isIncluded = index < plan.check;
                                return (
                                    <li key={index} className="flex items-start gap-3">
                                        {isIncluded ? (
                                            <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-primary-one" />
                                        ) : (
                                            <CircleX size={16} className="mt-0.5 flex-shrink-0 text-red-500" />
                                        )}
                                        <span className={`${!isIncluded ? 'line-through' : ''} !text-sm text-dark-one`}>
                                            {feature}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanDetailsCard;