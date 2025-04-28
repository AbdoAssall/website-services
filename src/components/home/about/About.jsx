import Section from "../../UI/Section";
import { Briefcase, Play } from "lucide-react";
import PrimaryLink from "../../UI/PrimaryLink";
import '../../../styles/about.css'
const About = () => {
    return (
        <Section>
            <div dir="ltr" className="flex w-full flex-col md:flex-row">
                <div className="relative md:-top-5 image-full rounded-md grid md:w-1/2 grow">
                    <figure>
                        <img
                            src="assets/images/home-about-2-1.jpg"
                            alt="Shoes"
                            className="rounded-md min-h-9/10 object-cover"
                            loading="lazy"
                        />
                    </figure>
                    <div className="absolute -bottom-20 md:-bottom-8 left-5">
                        <figure>
                            <img
                                src="assets/images/home-1-about-2.jpg"
                                alt="Shoes"
                                className="rounded-md object-cover"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                    <div className="absolute -bottom-8 md:bottom-5 right-5 z-2">
                        <div className="w-17.5 h-17.5 rounded-full mx-auto bg-primary-one">
                            <Play className="w-9 h-9 text-white mx-auto relative top-1/2 -translate-y-1/2" />
                        </div>
                        <span className="scale-in-center"></span>
                    </div>
                    <div className="absolute top-5 left-5 px-7 py-2 rounded-tr-[0.625rem] rounded-bl-[0.625rem] bg-primary-one text-white text-lg font-bold">
                        أكثر من 10 سنوات من الخبرة
                    </div>
                </div>
                <div className="divider md:divider-horizontal"></div>
                <div className="grid md:w-1/2 grow mt-21 md:mt-0 ltr:text-start rtl:text-right">
                    <div className="flex gap-3 justify-start rtl:justify-end">
                        <Briefcase className="text-primary-one w-5 h-5" />
                        <h5 className="section-title">معلومات عنا</h5>
                    </div>
                    <div className="mt-1 md:mt-4.5">
                        <h2 className="text-3xl md:text-[2.75rem] font-bold ltr:!leading-12.5 md:rtl:!leading-15 text-primary-two capitalize">خذ عملك إلى المستوى التالي</h2>
                        <p className="mt-4 text-dark-one">
                            بخبرة تزيد عن 20 عامًا، نضمن لكم دائمًا الحصول على الأفضل.
                            نخدم عملائنا على جميع مستويات مؤسساتهم، ونقدم لهم أقصى استفادة،
                            .سواءً كمستشارين موثوقين أو كأعضاء في إدارتنا العليا
                        </p>
                    </div>
                    <div className="flex gap-2 flex-col sm:flex-row justify-start rtl:justify-end">
                        <div className="mt-3">
                            <div className="mb-3">
                                <span className="inline-block w-20 h-20 rounded-full bg-primary-three">
                                    <img src="assets/images/icons/idea.png" className="w-15 h-15" alt="Idea icon" loading="lazy" />
                                </span>
                            </div>
                            <h2 className="text-[1.375rem] font-bold capitalize">العمل الإبداعي</h2>
                            <p className="mt-3 text-dark-one">
                                العمل الإبداعي هو مظهر من مظاهر الجهد الإبداعي بما في ذلك الأعمال الفنية الجميلة
                            </p>
                        </div>
                        <div className="mt-3">
                            <div className="mb-3">
                                <span className="inline-block w-20 h-20 rounded-full bg-primary-three">
                                    <img src="assets/images/icons/solution.png" className="w-15 h-15" alt="Idea icon" loading="lazy" />
                                </span>
                            </div>
                            <h2 className="text-[1.375rem] font-bold capitalize">الحل الأفضل</h2>
                            <p className="mt-3 text-dark-one">
                                حلول استشارية هي شركة ديناميكية، متعددة الأغراض، أنيقة وحديثة للأعمال التجارية
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-12 flex gap-10 flex-col-reverse sm:flex-row-reverse sm:rtl:flex-row justify-end">
                        <div className="rtl:self-end">
                            <img src="assets/images/sign.png" className="w-34 lg:w-auto h-auto object-contain" alt="Sign" loading="lazy" />
                        </div>
                        <div>
                            <PrimaryLink ariaLabel="read more">لمعرفة المزيد</PrimaryLink>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
export default About;