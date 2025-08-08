// @ts-nocheck
import PropTypes from 'prop-types';
import ProjectsTabsNavigation from './ProjectsTabsNavigation';
import ProjectsGrid from './ProjectsGrid';
import useProjectsFilter from '../hooks/useProjectsFilter';
import Section from '@components/UI/Section';

/**
 * Main Projects Tabs Component - Now acts as a container component
 * @param {{ projects?: Array<{
 *   category: string;
 *   name: string;
 *   description: string;
 *   img: string;
 *   date: string;
 *   client: string;
 *   url?: string;
 * }>, 
 * itemsPerPage?: number
 *  }} props
 */
const ProjectsTabs = ({ projects = [], itemsPerPage = 6 }) => {
    // Use custom hook for all the logic
    const {
        activeTab,
        categories,
        isAnimating,
        currentPage,
        totalPages,
        filteredProjects,
        currentProjects,
        startIndex,
        endIndex,
        handleTabChange,
        handlePageChange
    } = useProjectsFilter(projects, itemsPerPage);

    return (
        <Section className='py-16 projects-section'>
            {/* Tabs Navigation Component */}
            <ProjectsTabsNavigation
                categories={categories}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />

            {/* Projects Grid Component */}
            <ProjectsGrid
                currentProjects={currentProjects}
                isAnimating={isAnimating}
                activeTab={activeTab}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                filteredProjects={filteredProjects}
                startIndex={startIndex}
                endIndex={endIndex}
            />
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