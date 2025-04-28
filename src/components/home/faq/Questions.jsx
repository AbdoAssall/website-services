import Section from "../../UI/Section";
import SectionShape2 from "../../UI/SectionShape2";
import { Briefcase } from "lucide-react";
import { useDirection } from '../../../contexts/DirectionContext';
// import "/src/styles/scss/plans.css"

const Questions = () => {
    const { direction, isRTL } = useDirection();
    return (
        <section
            className="py16 relative bg-cover bg-no-repeat bg-center w-full h-full"
            style={{ backgroundImage: 'url("assets/images/footer-bg-two.jpg")' }}
        >
            <div dir={direction} className="flex flex-col md:flex-row mx-auto relative">
                {/* Right side with content */}
                <div className="md:w-1/2">
                    <div className={`py-27 px-25 relative w-full flex flex-col content-start ${isRTL ? 'text-start' : 'text-start'}`}>
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
                </div>
                {/* Left side with image */}
                <div className="md:w-1/2">
                    <div className="-mt-22 flex justify-center md:justify-end">
                        <img
                            src="assets/images/cosnsult-bg.png"
                            alt="Contact"
                            className="align-middle object-contain inline-block"
                            loading="lazy"
                            width="382"
                            height="570"
                            srcSet="assets/images/cosnsult-bg.png 382w, assets/images/cosnsult-bg-201x300.png 201w"
                            sizes="(max-width: 382px) 100vw, 382px"
                            data-label="img.attachment-large"
                        />
                    </div>
                </div>
            </div>
            <SectionShape2 direction="top" />
            <SectionShape2 />
        </section>
    );
}
export default Questions;