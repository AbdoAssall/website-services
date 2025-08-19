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
        const viewAllLabel = categories[0]; // "عرض الكل" أو "View All" باللغة الحالية

        // **new logic for handling language change**
        // إذا كان هناك فلتر نشط في الحالة، ولكنه غير موجود في قائمة التصنيفات الحالية
        if (filters.category && !categories.includes(filters.category)) {
            // هذا يعني أن اللغة تغيرت والفلتر القديم لم يعد صالحًا
            // الحل: قم بإعادة التعيين إلى "عرض الكل"
            setFilters({ category: viewAllLabel });

            // وقم بتنظيف الرابط من التصنيف القديم
            setSearchParams(params => {
                params.delete('category');
                return params;
            });
        }
        // إذا كان هناك تصنيف في الرابط وهو يختلف عن الفلتر الحالي، قم بتطبيقه
        else if (categoryFromUrl && categoryFromUrl !== filters.category) {
            setFilters({ category: categoryFromUrl });
        }
        // إذا لم يكن هناك تصنيف في الرابط، تأكد أن الفلتر هو "عرض الكل"
        else if (!categoryFromUrl && filters.category !== viewAllLabel) {
            setFilters({ category: viewAllLabel });
        }

        // التعامل مع رقم الصفحة يبقى كما هو
        if (pageNum && pageNum !== currentPage) {
            setCurrentPage(pageNum);
        }

    }, [searchParams, categories, filters.category, currentPage, setFilters, setCurrentPage, setSearchParams]);

    // Step 4: Update the tab change function
    const handleTabChange = (category = '') => {
        // Do nothing if the active tab is already clicked.
        if (category === (filters.category || categories[0])) return;

        setIsAnimating(true); // Start the animation

        // عند تغيير الفلتر، قم بتحديث الرابط
        setSearchParams(params => {
            if (category === categories[0]) { // إذا كان "View All"
                params.delete('category'); // احذف التصنيف من الرابط
            } else {
                params.set('category', category); // أضف التصنيف للرابط
            }
            params.delete('page'); // احذف رقم الصفحة دائمًا عند تغيير الفلتر
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