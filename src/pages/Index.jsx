import HeroSlider from "../components/home/hero/HeroSlider";
import About from "../components/home/about/About";
import { Brands } from "../components/home/services/Brands";
import Services from "../components/home/services/Services";
import { PageLayout } from "../layouts/PageLayout";

const Index = () => {
    return (
        <PageLayout>
            <HeroSlider />
            <About />
            <Brands />
            <Services />
        </PageLayout>
    );
};

export default Index;
