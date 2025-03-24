import HeroSlider from "../components/home/hero/HeroSlider";
import About from "../components/home/about/About";
import { PageLayout } from "../layouts/PageLayout";

const Index = () => {
    return (
        <PageLayout>
            <HeroSlider />
            <About />
        </PageLayout>
    );
};

export default Index;
