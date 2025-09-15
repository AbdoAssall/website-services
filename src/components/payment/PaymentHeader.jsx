/* eslint-disable react/prop-types */
// @ts-nocheck
import { ArrowLeft } from 'lucide-react';

const PaymentHeader = ({ goBack, t }) => {
    return (
        <header className="bg-white border-b border-border-dark-one">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-gray-50"
                            style={{ color: 'var(--color-primary-two)' }}
                            onClick={goBack}
                        >
                            <ArrowLeft size={20} />
                            {t('payment.backToPlans')}
                        </button>
                        <div className="h-6 w-px bg-gray-300"></div>
                        <h1 className="!text-2xl font-bold !text-heading-dark">
                            {t('payment.title')}
                        </h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary-one"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PaymentHeader;