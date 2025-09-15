// @ts-nocheck
import MetaTags from "../components/MetaTags";
import { useLanguage } from "../store/LanguageContext";
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import usePlans from "@hooks/plans/usePlans";
import { getPaymentMethods } from "@config/paymentConfig";
import PaymentHeader from '../components/payment/PaymentHeader';
import PlanDetailsCard from '../components/payment/PlanDetailsCard';
import PaymentOptions from '../components/payment/PaymentOptions';
import OrderSummary from '../components/payment/OrderSummary';

const PaymentPage = () => {
    const { planId } = useParams();
    const { t } = useLanguage();
    const goBack = useNavigate();
    const { getPlanById } = usePlans();
    const [selectedPayment, setSelectedPayment] = useState('');

    const plan = getPlanById(planId);
    const paymentMethods = getPaymentMethods(t);

    const currencyFormatter = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    const handleWhatsAppRedirect = () => {
        if (!plan || !selectedPayment) return;

        const paymentMethodName = paymentMethods.find(method => method.id === selectedPayment)?.name;
        const message = `${t('payment.whatsappGreeting')} "${plan.name}" ${t('payment.whatsappPlanInfo')} ${currencyFormatter(plan.price)}/${t('payment.period')} ${t('payment.whatsappPaymentMethod')} ${paymentMethodName}. ${t('payment.whatsappAssistance')}`;

        const whatsappUrl = `https://wa.me/201065378259?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!plan) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-one"></div>
            </div>
        );
    }

    return (
        <>
            <MetaTags
                titleKey={t("head.payment.title")}
            />

            <div className="min-h-screen bg-primary-four">
                <PaymentHeader goBack={() => goBack('/')} t={t} />

                <main className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* View plan details */}
                        <div className="lg:col-span-1">
                            <PlanDetailsCard
                                plan={plan}
                                currencyFormatter={currencyFormatter}
                                t={t}
                            />
                        </div>

                        {/* Payment options and order summary */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-sm border p-6" style={{ borderColor: 'var(--color-border-dark-one)' }}>
                                <PaymentOptions
                                    paymentMethods={paymentMethods}
                                    selectedPayment={selectedPayment}
                                    onSelectPayment={setSelectedPayment}
                                    t={t}
                                />
                                {selectedPayment && (
                                    <OrderSummary
                                        plan={plan}
                                        selectedPayment={selectedPayment}
                                        paymentMethods={paymentMethods}
                                        onProceed={handleWhatsAppRedirect}
                                        currencyFormatter={currencyFormatter}
                                        t={t}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PaymentPage;
