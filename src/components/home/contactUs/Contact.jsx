import Section from "../../UI/Section";
import PrimaryLink from "../../UI/PrimaryLink";
import { Briefcase, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {

    return (
        <Section
            className="pb:6 md:!py-0 bg-cover bg-no-repeat w-full h-full"
            style={{ backgroundImage: 'url("assets/images/consult-bg.jpg")' }}
        >
            <div dir="ltr" className="flex w-full flex-col md:flex-row items-center">
                {/* Left side with image */}
                <div className="md:w-1/2 md:h-120">
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
                <div className="divider md:!w-[calc(0.25rem*5)] md:divider-horizontal"></div>
                {/* Right side with content */}
                <div className="md:w-1/2 ltr:text-start rtl:text-right">
                    <div className="flex gap-3 items-center justify-start rtl:justify-end">
                        <Briefcase className="text-primary-one w-5 h-5" />
                        <h5 className="section-title">الاستشارات في أي وقت وفي أي مكان</h5>
                    </div>
                    <div className="mt-1 md:mt-3">
                        <h2 className="text-3xl md:text-[2.75rem] font-bold ltr:!leading-12.5 rtl:!leading-15 text-primary-two capitalize">
                            احصل على استشارة مجانية الآن هنا
                        </h2>
                        <p className="mt-3 !mb-6 md:!mb-0 text-dark-one">
                            <bdi>نحن نساعدك على رؤية العالم بشكل مختلف، واكتشاف الفرص التي ربما لم تتخيلها أبدًا.</bdi>
                        </p>
                    </div>
                    <div className="border border-dashed border-t-primary-one/60 h-fit md:!mt-6"></div>
                    <div className="mt-10 flex gap-12 sm:gap-10 flex-col-reverse sm:flex-row-reverse sm:rtl:flex-row justify-end sm:items-center h-fit">
                        <div className="flex items-center gap-3 rtl:flex-row-reverse">
                            <div className="w-12.5 h-12.5 content-center rounded-full bg-primary-one text-white">
                                <Phone className="w-6 h-6 mx-auto" />
                            </div>
                            <div className="">
                                <h6 className="text-lg !font-semibold text-primary-two">Phone</h6>
                                <Link to="tel:+(1 800) – 5554400" aria-label="phone number" className="!text-light-gray">+(1 800) – 5554400</Link>
                            </div>
                        </div>
                        <div className="">
                            <PrimaryLink ariaLabel="read more">تواصل معنا</PrimaryLink>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
export default Contact;