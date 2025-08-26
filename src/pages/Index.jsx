import HeroSlider from "../components/home/hero/HeroSlider";
import AboutUs from "../components/home/about/AboutUs";
import { Brands } from "../components/home/services/Brands";
import Services from "../components/home/services/Services";
import Choices from "../components/home/chooseUs/Choices";
import { PageLayout } from "../layouts/PageLayout";
import Projects from "../components/home/projects/Projects";
import Testimonial from "../components/home/testimonial/Testimonial";
import Contact from "../components/home/contactUs/Contact";
import Plans from "../components/home/plans/Plans";
import Questions from "../components/home/faq/Questions";
import MetaTags from "../components/MetaTags";
import { useLanguage } from "@store/LanguageContext";

const Index = () => {
    const { t } = useLanguage();

    return (
        <PageLayout>
            <MetaTags
                titleKey={t("head.home.title")}
                descriptionKey="head.home.meta.description"
            />
            <HeroSlider />
            <AboutUs />
            <Brands />
            <Services />
            <Choices />
            <Projects />
            <Testimonial />
            <Contact />
            <Plans />
            <Questions />
        </PageLayout>
    );
};

export default Index;
