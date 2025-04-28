import React from "react";
// import HeroSlider from "../components/home/hero/HeroSlider";
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

const SliderLazy = React.lazy(() => import("../components/home/hero/HeroSlider"));

const Index = () => {
    return (
        <PageLayout>
            <React.Suspense fallback={(<div className="bg-gray-100 shadow-lg w-9 h-9 text-center flex items-center">
                <span className="loading loading-spinner text-success inline-block mx-auto"></span>
            </div>)}>
                <SliderLazy />
            </React.Suspense>
            <About />
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
