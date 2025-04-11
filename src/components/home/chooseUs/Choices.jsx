import Section from "../../UI/Section";

const Choices = () => {
    const Choices = [
        {
            title: "حلول ذكية",
            description: "يحتوي مكون البطاقة على شكل وجزء من الجسم، وداخل الجسم توجد أجزاء العنوان والأفعال",
            image: "assets/images/choices/solution.png"
        },
        {
            title: "فريق الخبرة",
            description: "يحتوي مكون البطاقة على شكل وجزء من الجسم، وداخل الجسم توجد أجزاء العنوان والأفعال",
            image: "assets/images/choices/team-management.png"
        },
        {
            title: "الاستجابة السريعة",
            description: "يحتوي مكون البطاقة على شكل وجزء من الجسم، وداخل الجسم توجد أجزاء العنوان والأفعال",
            image: "assets/images/choices/email-marketing.png"
        },
        {
            title: "دعم 24/7",
            description: "يحتوي مكون البطاقة على شكل وجزء من الجسم، وداخل الجسم توجد أجزاء العنوان والأفعال",
            image: "assets/images/choices/24-hours-support.png"
        },
    ];

    return (
        <Section
            className="pt-16 pb-30"
            subTitle="الاختيارات والأحداث"
            sectionTitle="لماذا يختارنا الناس"
            description="سأشرح لك كيف نشأت كل هذه الفكرة الخاطئة المتمثلة في إدانة المتعة والإشادة بالألم، وسأقدم لك وصفًا كاملاً للنظام."
        >
            <div className="flex justify-center items-center mt-18 md:flex-wrap flex-col md:flex-row gap-x-6 gap-y-24">
                {Choices.map((choice, index) => (
                    <div key={index} className="relative group">
                        <div className="card bg-white w-full md:w-65.5 h69 shadow-md md:shadow-lg hover:bg-primary-one hover:rounded-tr-none overflow-hidden border border-gray-100 transition-all duration-300">
                            <div className="card-bod px-7.5 pb-3 pt-19 justify-end">
                                <h2 className="card-title text-2xl !text-primary-two font-bold font-spartan group-hover:!text-white transition-colors duration-300">
                                    {choice.title}
                                </h2>
                                <p className="text-dark-one grow-0 group-hover:text-white transition-colors !duration-300">
                                    {choice.description}
                                </p>
                            </div>
                            <div className="absolute -top-2 -right-2 z-2 w-[3.063rem] h-12 bg-primary-one rounded-full text-center leading-12 shadow-lg group-hover:bg-white text-white group-hover:text-dark-one font-medium transition-colors duration-300">
                                <span>0{index + 1}</span>
                            </div>
                        </div>
                        <div className="absolute -top-12.5 left-7.5 z-2 w-25 h-25 bg-white rounded-full border border-gray-100 shadow-xl content-center">
                            <img src={choice.image} alt={choice.title} className="w-15 h-15 object-cover mx-auto" role="presentation" loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
export default Choices;