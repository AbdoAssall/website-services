/* eslint-disable no-unused-vars */
// @ts-nocheck
import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard';
import Pagination from '../../UI/Pagination';
import { useLanguage } from '@store/LanguageContext';

/**
 * Projects Grid Component with pagination
 * @param {{
 *   currentProjects: Array<{
 *     category: string;
 *     name: string;
 *     description: string;
 *     img: string;
 *     date: string;
 *     client: string;
 *     slug?: string;
 *   }>;
 *   isAnimating: boolean;
 *   activeTab: string;
 *   currentPage: number;
 *   totalPages: number;
 *   onPageChange: (page: number) => void;
 *   filteredProjects: Array;
 *   startIndex: number;
 *   endIndex: number;
 * }} props
 */
const ProjectsGrid = ({
    currentProjects,
    isAnimating,
    activeTab,
    currentPage,
    totalPages,
    onPageChange,
    filteredProjects,
    startIndex,
    endIndex
}) => {
    const { t } = useLanguage();

    return (
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
                                    slug={project.slug}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
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

            {/* Results Info - Commented out in original, keeping for reference */}
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
        </div>
    );
};

ProjectsGrid.propTypes = {
    currentProjects: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            client: PropTypes.string.isRequired,
            slug: PropTypes.string,
        })
    ).isRequired,
    isAnimating: PropTypes.bool.isRequired,
    activeTab: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    filteredProjects: PropTypes.array.isRequired,
    startIndex: PropTypes.number.isRequired,
    endIndex: PropTypes.number.isRequired
};

export default ProjectsGrid;