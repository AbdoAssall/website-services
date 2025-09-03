import Section from "@components/UI/Section";
import ContactForm from "./subcomponents/ContactForm";
import ContactInfo from "./subcomponents/ContactInfo"

const ContactPage = () => {
    return (
        <Section className="py-18">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                {/* Contact Form Section */}
                <div className="lg:w-1/2">
                    <ContactForm />
                </div>
                <div className="h-full w-8 bg-transparent"></div>

                {/* Contact Information Section */}
                <div className="lg:w-1/2">
                    <ContactInfo />
                </div>

            </div>
        </Section>
    );
}
export default ContactPage;