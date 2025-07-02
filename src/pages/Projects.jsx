import { PageLayout } from "../layouts/PageLayout";
import MetaTags from "../components/MetaTags";

const Index = () => {
    return (
        <PageLayout>
            <MetaTags
                titleKey="head.projects.title"
                descriptionKey="head.projects.meta.description"
            />
            <h1>Projects</h1>
        </PageLayout>
    );
};

export default Index;
