// @ts-nocheck
import PropTypes from 'prop-types';
import Section from '@components/UI/Section';
import ProjectContent from './subcomponents/ProjectContent';
import ProjectSidebar from './subcomponents/ProjectSidebar';
import ProjectImages from './subcomponents/ProjectImages';
import { useLanguage } from "@store/LanguageContext";

/**
 * Renders a single project page, organizing the layout into main content and a sidebar.
 * It displays project details, images, and supplementary information.
 *
 * @component
 * @param {object} props - The component props.
 * @param {object} [props.project={}] - The project object containing all its details. If not provided, a "not found" message is displayed.
 * @returns {JSX.Element} The rendered Project component.
 */
const Project = ({ project }) => {
    const { t } = useLanguage();

    if (!project) {
        return (
            <Section className='py-16 projects-section'>
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-heading-dark">
                            {t('projects.notFound')}
                        </h2>
                        <p className="mt-4 text-dark-two">
                            {t('projects.notFoundDescription')}
                        </p>
                    </div>
                </div>
            </Section>
        );
    }

    return (
        <Section className='py-16 lg:py-20 projects-section'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <ProjectContent project={project} />
                        <ProjectImages project={project} />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <ProjectSidebar project={project} />
                    </div>
                </div>
            </div>
        </Section>
    );
};

Project.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
        client: PropTypes.string,
        date: PropTypes.string,
        website: PropTypes.string,
        challenge: PropTypes.string,
        solution: PropTypes.shape({
            description: PropTypes.string,
            efficiency: PropTypes.string,
            innovation: PropTypes.string
        }),
        result: PropTypes.string,
        img: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string,
            caption: PropTypes.string
        })),
        files: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
            type: PropTypes.string
        }))
    })
};

export default Project;