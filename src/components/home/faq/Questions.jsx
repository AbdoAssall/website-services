import { useState } from 'react';
import { ArrowRight, ArrowUp, ArrowLeft, Briefcase } from 'lucide-react';
import SectionShape2 from "../../UI/SectionShape2";
import { useLanguage } from '../../../contexts/LanguageContext';
import "/src/styles/scss/questions.css"

const Questions = () => {
    const { direction, isRTL } = useLanguage();
    const [activeQuestion, setActiveQuestion] = useState(1);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    const questions = [
        {
            id: 1,
            question: "كيف يمكن استخدام التسويق بالمحتوى لزيادة الكفاءة؟",
            answer: "كما هو الحال مع القول من خلال الانكماش من التعب والألم فإن هذه الحالات بسيطة تمامًا ويسهل التمييز بينها."
        },
        {
            id: 2,
            question: "How can content marketing help purchase journey?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 3,
            question: "How do we measure content's on sales and revenue?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 4,
            question: "Pain these cases are perfectly simple and easy to distinguish.",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ];

    return (
        <section
            className="relative bg-cover bg-no-repeat bg-center w-full h-full bg-primary-two"
            style={{ backgroundImage: 'url("assets/images/footer-bg-two.jpg")' }}
        >
            <div dir={direction} id="faq" className="flex flex-col md:flex-row mx-auto relative">
                {/* Right side with content */}
                <div className="md:w-1/2">
                    <div className={`py-27 px-25 relative w-full flex flex-col content-start text-start`}>
                        <div className="mb-5 w-full">
                            <div className="flex gap-3 items-center justify-start">
                                <Briefcase className="text-primary-one w-5 h-5" />
                                <h5 className="section-title">الأسئلة الشائعة العامة</h5>
                            </div>
                            <div className="mt-1 md:mt-4">
                                <h2 className={`text-3xl md:text-[2.75rem] font-bold ${isRTL ? '!leading-12.5' : '!leading-15 capitalize'} !text-white`}>
                                    هل لديك أي أسئلة؟
                                </h2>
                            </div>
                        </div>
                        <div className="faq-accordion w-full">
                            {questions.map((item) => (
                                <div
                                    key={item.id}
                                    className={`faq-item mb-2 transition-all duration-600`}
                                >
                                    <div
                                        className={`question-header ${activeQuestion === item.id ? '!bg-primary-one !border-primary-one' : ''}`}
                                        onClick={() => activeQuestion !== item.id ? toggleQuestion(item.id) : null}
                                    >
                                        <div className="question-title">
                                            <span className="faq-number">
                                                {item.id}
                                            </span>
                                            <span className="inline-block">{item.question}</span>

                                            <span className='faq-icon'>
                                                {activeQuestion === item.id ? (
                                                    <ArrowUp className="w-5 h-5" />
                                                ) : (
                                                    isRTL ? (
                                                        <ArrowLeft className="w-5 h-5 hover:-rotate-90" />
                                                    ) : (
                                                        <ArrowRight className="w-5 h-5 hover:rotate-90" />
                                                    )
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={`transition-all duration-600 overflow-hidden ${activeQuestion === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="answer">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Left side with image */}
                <div className="md:w-1/2">
                    <div className="faq-image relative z-1 w-full h-full flex flex-wrap content-start">
                    </div>
                </div>
            </div>
            <SectionShape2 direction="top" />
            <SectionShape2 />
        </section>
    );
}
export default Questions;