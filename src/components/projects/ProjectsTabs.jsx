import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../../contexts/LanguageContext';
import Section from '../../components/UI/Section';

/**
 * @param {{ projects?: Array<{
 *   category: string;
 *   title: string;
 *   description: string;
 *   image: string;
 *   date: string;
 *   client: string;
 *   link?: string;
 * }> }} props
 */
const ProjectsTabs = ({ projects = [] }) => {
    const { t, isRTL } = useLanguage();
    // Extract unique categories from projects
    const viewAllLabel = t('projects.viewAll');
    const categories = useMemo(() =>
        [viewAllLabel, ...new Set(projects.map(project => project.category))],
        [viewAllLabel, projects]
    );
    const [activeTab, setActiveTab] = useState(viewAllLabel);

    useEffect(() => {
        if (!categories.includes(activeTab) || activeTab === t('projects.viewAll', { lng: undefined, defaultValue: activeTab })) {
            setActiveTab(viewAllLabel);
        }
    }, [viewAllLabel, activeTab, categories, t]);

    // Filter projects based on active tab
    const filteredProjects = activeTab === viewAllLabel
        ? projects
        : projects.filter(project => project.category === activeTab);

    return (
        <Section className='py-16'>
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center mb-12">
                <div className="tabs tabs-boxed gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`tab tabs-md px-5 rounded-md leading-10 transition-all duration-600 ${isRTL ? 'font-medium !text-sm' : '!text-md '} ${activeTab === category
                                ? 'tab-active bg-primary-one text-white'
                                : 'bg-primary-three !text-dark-one hover:bg-primary-one hover:!text-white'
                                }`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-4xl mx-auto">
                {filteredProjects.length > 0 ? (
                    <div className="space-y-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                category={project.category}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                date={project.date}
                                client={project.client}
                                readMoreLink={project.link}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">{t('projects.noProjects')}</p>
                    </div>
                )}
            </div>
        </Section>

        // <section className="py-16 bg-gray-50">
        //     <div className="container mx-auto px-4">
        //     </div>
        // </section>
    );
};

ProjectsTabs.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            client: PropTypes.string.isRequired,
            link: PropTypes.string,
        })
    ),
};

export default ProjectsTabs;
