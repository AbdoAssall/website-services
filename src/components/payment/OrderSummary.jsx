/* eslint-disable react/prop-types */
// @ts-nocheck
import { MessageCircle } from 'lucide-react';

const OrderSummary = ({ plan, selectedPayment, paymentMethods, onProceed, currencyFormatter, t }) => {
    const selectedMethodName = paymentMethods.find(m => m.id === selectedPayment)?.name;

    return (
        <div className="border-t pt-6" style={{ borderColor: 'var(--color-border-dark-one)' }}>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                    <span style={{ color: 'var(--color-dark-one)' }}>{plan.name}</span>
                    <span className="font-semibold" style={{ color: 'var(--color-primary-two)' }}>
                        {currencyFormatter(plan.price)}
                    </span>
                </div>
                <div className="flex justify-between items-center text-sm" style={{ color: 'var(--color-dark-two)' }}>
                    <span>{t('payment.selectedMethod')}:</span>
                    <span>{selectedMethodName}</span>
                </div>
                <div className="border-t mt-3 pt-3 flex justify-between items-center font-bold" style={{ borderColor: 'var(--color-border-dark-one)' }}>
                    <span style={{ color: 'var(--color-heading-dark)' }}>{t('payment.total')}</span>
                    <span className="text-xl" style={{ color: 'var(--color-primary-one)' }}>
                        {currencyFormatter(plan.price)}
                    </span>
                </div>
            </div>

            <button
                onClick={onProceed}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label={t('payment.proceedToWhatsApp')}
                style={{ backgroundColor: 'var(--color-primary-one)' }}
            >
                <MessageCircle size={24} />
                {t('payment.proceedToWhatsApp')}
            </button>

            <p className="text-center text-sm mt-4" style={{ color: 'var(--color-dark-two)' }}>
                {t('payment.whatsappMessage')}
            </p>
        </div>
    );
};

export default OrderSummary;