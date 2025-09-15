// @ts-nocheck
/* eslint-disable react/prop-types */

const PaymentOptions = ({ paymentMethods, selectedPayment, onSelectPayment, t }) => {
    return (
        <>
            <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--color-heading-dark)' }}>
                {t('payment.selectPayment')}
            </h2>
            <div className="grid gap-4 mb-8">
                {paymentMethods.map((method) => (
                    <label
                        key={method.id}
                        className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${selectedPayment === method.id
                            ? 'border-primary-one bg-primary-three'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                        style={{
                            borderColor: selectedPayment === method.id ? 'var(--color-primary-one)' : 'var(--color-border-dark-one)',
                            backgroundColor: selectedPayment === method.id ? 'var(--color-primary-three)' : 'white'
                        }}
                    >
                        <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={selectedPayment === method.id}
                            onChange={(e) => onSelectPayment(e.target.value)}
                            className="sr-only"
                        />
                        <div className="flex items-center gap-4 flex-1">
                            <div className={`p-2 rounded-lg ${method.color}`} style={{ backgroundColor: 'var(--color-primary-four)' }}>
                                <method.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold" style={{ color: 'var(--color-heading-dark)' }}>
                                        {method.name}
                                    </span>
                                    {method.recommended && (
                                        <span
                                            className="px-2 py-1 rounded text-xs font-medium text-white"
                                            style={{ backgroundColor: 'var(--color-primary-one)' }}
                                        >
                                            {t('payment.recommended')}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm mt-1" style={{ color: 'var(--color-dark-two)' }}>
                                    {method.description}
                                </p>
                            </div>
                        </div>

                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPayment === method.id ? 'border-primary-one' : 'border-gray-300'
                            }`}
                            style={{
                                borderColor: selectedPayment === method.id ? 'var(--color-primary-one)' : 'var(--color-light-gray)'
                            }}>
                            {selectedPayment === method.id && (
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-primary-one)' }}></div>
                            )}
                        </div>
                    </label>
                ))}
            </div>
        </>
    );
};

export default PaymentOptions;