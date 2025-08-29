import Section from "@components/UI/Section";
import About from "@components/home/about/About";
import CounterSection from "./subcomponents/CounterSection";

const AboutPage = () => {
    return (
        <div className="py-18">
            <Section className="py-0">
                <About btn={false} isSubTitle={true} />
            </Section>
            <CounterSection />
        </div>
    );
}
export default AboutPage;