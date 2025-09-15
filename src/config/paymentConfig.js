// @ts-nocheck
import { CreditCard, Building2, Smartphone, Zap } from 'lucide-react';

export const getPaymentMethods = (t) => [
    {
        id: 'payoneer',
        name: t('payment.payoneer'),
        icon: CreditCard,
        color: 'text-orange-600',
        description: t('payment.payoneerDescription'),
    },
    {
        id: 'paypal',
        name: t('payment.paypal'),
        icon: CreditCard,
        color: 'text-blue-600',
        description: t('payment.paypalDescription'),
        recommended: true
    },
    {
        id: 'bank',
        name: t('payment.bankTransfer'),
        icon: Building2,
        color: 'text-green-600',
        description: t('payment.bankDescription')
    },
    {
        id: 'vodafone',
        name: t('payment.vodafoneCash'),
        icon: Smartphone,
        color: 'text-red-600',
        description: t('payment.egyptianOnly'),
        region: 'egypt'
    },
    {
        id: 'instapay',
        name: t('payment.instaPay'),
        icon: Zap,
        color: 'text-purple-600',
        description: t('payment.egyptianOnly'),
        region: 'egypt'
    }
];