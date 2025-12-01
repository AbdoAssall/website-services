// @ts-nocheck
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectsTabsNavigation from './ProjectsTabsNavigation';
import ProjectsGrid from './ProjectsGrid';
import Section from '@components/UI/Section';
import useProjects from '@hooks/useProjects';

const ProjectsTabs = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const {
        categories,
        currentProjects,
        currentPage,
        totalPages,
        filteredProjects,
        startIndex,
        endIndex,
        filters,
        setFilters,
        setCurrentPage,
    } = useProjects();

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // if categories are not loaded yet, do nothing
        if (!categories || categories.length === 0) return;

        const categoryFromUrl = searchParams.get('category');
        const pageFromUrl = searchParams.get('page');
        const pageNum = parseInt(pageFromUrl, 10);
        const viewAllLabel = categories[0]; // assuming the first category is "View All"

        // **new logic for handling language change**
        // if the current filter is not in the categories (due to language change), reset it to "View All"
        if (filters.category && !categories.includes(filters.category)) {
            setFilters({ category: viewAllLabel }); // reset to "View All"

            // update the URL to remove the invalid category
            setSearchParams(params => {
                params.delete('category');
                return params;
            });
        }
        // if there is cat in the url then appled it
        else if (categoryFromUrl && categoryFromUrl !== filters.category) {
            setFilters({ category: categoryFromUrl });
        }
        // if there is no category in the URL, ensure the filter is "View All"
        else if (!categoryFromUrl && filters.category !== viewAllLabel) {
            setFilters({ category: viewAllLabel });
        }

        // Handle page number from URL
        if (pageNum && pageNum !== currentPage) {
            setCurrentPage(pageNum);
        }

    }, [searchParams, categories, filters.category, currentPage, setFilters, setCurrentPage, setSearchParams]);

    // Step 4: Update the tab change function
    const handleTabChange = (category = '') => {
        // Do nothing if the active tab is already clicked.
        if (category === (filters.category || categories[0])) return;

        setIsAnimating(true); // Start the animation

        // when filter changes, update the URL params
        setSearchParams(params => {
            if (category === categories[0]) { // If "View All" is selected
                params.delete('category'); // clear the category from the URL
            } else {
                params.set('category', category); // set the selected category
            }
            params.delete('page'); // 
            return params;
        });

        // After a short while, change the filter in the store.
        setTimeout(() => {
            setFilters({ category });
            // The hook will automatically reset the page to 1.
        }, 250);

        // After the animation is over, stop it.
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    // Step 5: Simplify the page change function
    // Now it's just a direct call to the function coming from the hook.
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Update the 'page' parameter in the URL
        setSearchParams(params => {
            params.set('page', page.toString());
            return params;
        });
    };

    // If categories are still loading, we can temporarily display nothing.
    if (!categories || categories.length === 0) {
        return null;
    }

    // activeTab is the current filter, or the first category (View All) if no filter is specified.
    const activeTab = filters.category || categories[0];

    return (
        <Section className='py-16 projects-page'>
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

export default ProjectsTabs;