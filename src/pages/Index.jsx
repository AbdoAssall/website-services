import HeroSlider from "../components/home/hero/HeroSlider";
import About from "../components/home/about/About";
import { Brands } from "../components/home/services/Brands";
import Services from "../components/home/services/Services";
import Choices from "../components/home/chooseUs/Choices";
import { PageLayout } from "../layouts/PageLayout";
import Projects from "../components/home/projects/Projects";
import Testimonial from "../components/home/testimonial/Testimonial";
import Contact from "../components/home/contactUs/Contact";
import Plans from "../components/home/plans/Plans";
import Questions from "../components/home/faq/Questions";
import Footer from "../components/home/footer/Footer";
import MetaTags from "../components/MetaTags";

const Index = () => {
    return (
        <PageLayout>
            <MetaTags
                titleKey="head.home.title"
                descriptionKey="head.home.meta.description"
            />
            <HeroSlider />
            <About />
            <Brands />
            <Services />
            <Choices />
            <Projects />
            <Testimonial />
            <Contact />
            <Plans />
            <Questions />
            <Footer />
        </PageLayout>
    );
};

export default Index;
