import { Link } from "react-router-dom";
import { useState } from 'react';
import Section from "../../UI/Section";
import { CircleCheck, ArrowRight, CircleX } from 'lucide-react';
import "/src/styles/scss/plans.css"
import { useDirection } from '../../../contexts/DirectionContext';

const Plans = () => {
    const { direction, isLTR } = useDirection();
    const [plans] = useState([
        {
            title: 'Recommended',
            name: 'Basic Pack',
            price: 22,
            description: 'Power of choice is untrammeled and do what we like best.',
            features: [
                '4-5 Weeks from finish',
                'Organisational Strategy',
                '20 Days of support',
                'Data sprint Results revision',
                'Data sprint Results revision',
            ],
            recommended: false,
            check: 2,
        },
        {
            title: 'Most Recommended',
            name: 'Standard Pack',
            price: 59,
            description: 'Matters to principle of selection our pleasures to secure.',
            features: [
                '4-5 Weeks from finish',
                'Organisational Strategy',
                '20 Days of support',
                'Data sprint Results revision',
                'Data sprint Results revision',
            ],
            recommended: true,
            check: 4,
        },
        {
            title: 'Popular Pack',
            name: 'Advanced Pack',
            price: 99,
            description: 'These cases are perfectly simple & easy to distinguish.',
            features: [
                '4-5 Weeks from finish',
                'Organisational Strategy',
                '20 Days of support',
                'Data sprint Results revision',
                'Data sprint Results revision',
            ],
            recommended: false,
            check: 5,
        }
    ]);

    return (
        <Section
            id="plans"
            className="py-20 bg-primary-three"
            contentStyle="justify-start rtl:justify-end "
            innerContentStyle="md:flex-row justify-between itetms-start md:itetms-center rtl:text-right"
            descriptionStyle="md:w-xl ltr:text-start rtl:text-right"
            subTitle="اختر خطتك"
            sectionTitle="التسعير القابل للتكيف"
            description="وهذا يشبه قول 'الانكماش من التعب والألم'. هذه الحالات بسيطة للغاية ويسهل تمييزها. نحن نساعدك على رؤية العالم بشكل مختلف"
        >
            <div className="mt-7.5 flex flex-col md:flex-row gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-12 justify-center items-center flex-wrap">
                {plans.map((plan) => (
                    <div key={plan.name} className={`pricing-plan type-one ${plan.recommended ? 'type-two' : ''} max-w-85`}>
                        <div className="tag absolute -top-5 inset-x-0 z-1 mx-auto text-center text-base font-normal font-inter leading-10 rounded-md h-10 shadow-md">
                            {plan.title}
                        </div>
                        <div className={`pricing-plan-inner backdrop-blur-sm rounded-md shadow-lg border border-gray-200/60 flex flex-col items-center pt-12.5 pb-10 px-7.5 w-full max-w-85`}>
                            <div className="upper-plan mb-4.5 pb-3">
                                <h2 className="text-2xl mb-1.5">{plan.name}</h2>
                                <div className="price">
                                    <h6 className="block mb-1.5">
                                        <small>{plan.price}$</small>
                                        {" /"}
                                        <span className="text-[17px]">Year</span>
                                    </h6>
                                </div>
                                <p className="text-dark-one">
                                    {plan.description}
                                </p>
                            </div>
                            <div dir={direction} className="lower-plan">
                                <ul className={`!m-0 ${isLTR ? '!pr-8 !pl-0' : '!pl-8'} w-full`}>
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            {index < plan.check
                                                ? (
                                                    <CircleCheck className="text-primary-one" size={20} />
                                                )
                                                : (
                                                    <CircleX className="text-primary-one" size={20} />
                                                )}
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                to="#"
                                className={`w-full !text-primary-two !bg-white shadow-lg border border-gray-50 rounded-full py-3 font-semibold text-[0.938rem] hover:bg-gray-50 focus:shadow transition-all flex justify-center items-center gap-1 ${isLTR ? 'flex-row-reverse' : ''}`}
                            >
                                <ArrowRight size={16} />
                                Get Started
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </Section>
    );
}
export default Plans;