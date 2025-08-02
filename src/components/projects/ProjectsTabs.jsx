// @ts-nocheck
import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import Pagination from '../UI/Pagination';
import { useLanguage } from '../../store/LanguageContext';
import Section from '@components/UI/Section';

/**
 * @param {{ projects?: Array<{
 *   category: string;
 *   name: string;
 *   description: string;
 *   ing: string;
 *   date: string;
 *   client: string;
 *   url?: string;
 * }>, 
 * itemsPerPage?: number
 *  }} props
 */
const ProjectsTabs = ({ projects = [], itemsPerPage = 6 }) => {
    const { t, isRTL } = useLanguage();
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

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

    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // Reset to page 1 when changing tabs
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    // Handle tab change with animation
    const handleTabChange = (category = '') => {
        if (category === activeTab) return;

        setIsAnimating(true);

        // First phase: zoom out and fade out
        setTimeout(() => {
            setActiveTab(category);
        }, 250); // Half of the transition duration

        // Second phase: zoom in and fade in
        setTimeout(() => {
            setIsAnimating(false);
        }, 500); // Full transition duration
    };

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Section className='py-16 projects-section'>
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center mb-12">
                <div className="tabs tabs-boxed gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            data-filter={`project_category_${category}`}
                            type="button"
                            className={`tab tabs-md px-5 rounded-md leading-10 transition-all duration-300 ${isRTL ? 'font-medium !text-sm' : '!text-md '} ${activeTab === category
                                ? 'tab-active bg-primary-one text-white'
                                : 'bg-primary-three !text-dark-one hover:bg-primary-one hover:!text-white'
                                }`}
                            onClick={() => handleTabChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid with Animation */}
            <div className="max-w-4xl mx-auto">
                {currentProjects.length > 0 ? (
                    <>
                        <div
                            className={`space-y-8 transition-all duration-500 ease-in-out ${isAnimating
                                ? 'opacity-0 transform scale-30'
                                : 'opacity-100 transform scale-100'
                                }`}
                            style={{
                                transformOrigin: 'center center'
                            }}
                        >
                            {currentProjects.map((project, index) => (
                                <div
                                    key={`${activeTab}-${currentPage}-${index}`}
                                    className={`transition-all duration-500 ease-in-out ${isAnimating
                                        ? 'opacity-0 transform scale-30 translate-y-4'
                                        : 'opacity-100 transform scale-100 translate-y-0'
                                        }`}
                                    style={{
                                        transitionDelay: isAnimating ? '0ms' : `${index * 50}ms`,
                                        transformOrigin: 'center center'
                                    }}
                                >
                                    <ProjectCard
                                        category={project.category}
                                        title={project.name}
                                        description={project.description}
                                        image={project.img}
                                        date={project.date}
                                        client={project.client}
                                        link={project.url}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            maxVisiblePages={5}
                            showFirstLast={true}
                            element='.projects-section'
                            className={`transition-all duration-300 ease-in-out ${isAnimating
                                ? 'opacity-0 transform scale-95'
                                : 'opacity-100 transform scale-100'
                                }`}
                        />
                    </>
                ) : (
                    <div
                        className={`text-center py-12 transition-all duration-300 ease-in-out ${isAnimating
                            ? 'opacity-0 transform scale-95'
                            : 'opacity-100 transform scale-100'
                            }`}
                    >
                        <p className="text-gray-500 text-lg">{t('projects.noProjects')}</p>
                    </div>
                )}
            </div>

            {/* Results Info */}
            {/* {filteredProjects.length > 0 && (
                <div className="text-center mt-8">
                    <p className="text-sm text-dark-two">
                        {t('projects.showing', {
                            start: startIndex + 1,
                            end: Math.min(endIndex, filteredProjects.length),
                            total: filteredProjects.length,
                            defaultValue: `Showing ${startIndex + 1}-${Math.min(endIndex, filteredProjects.length)} of ${filteredProjects.length} projects`
                        })}
                    </p>
                </div>
            )} */}
        </Section>
    );
};

ProjectsTabs.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            client: PropTypes.string.isRequired,
            url: PropTypes.string,
        })
    ),
    itemsPerPage: PropTypes.number
};

export default ProjectsTabs;