// @ts-nocheck
import PropTypes from 'prop-types';
import { useLanguage } from '@store/LanguageContext';

/**
 * Tabs Navigation Component for filtering projects by category
 * @param {{
 *   categories: Array<string>;
 *   activeTab: string;
 *   onTabChange: (category: string) => void;
 * }} props
 */
const ProjectsTabsNavigation = ({ categories, activeTab, onTabChange }) => {
    const { isRTL } = useLanguage();

    return (
        <div className="flex flex-wrap justify-center mb-12">
            <div className="tabs tabs-boxed gap-3 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        data-filter={`project_category_${category}`}
                        type="button"
                        className={`tab tabs-md px-5 rounded-md leading-10 transition-all duration-300 ${isRTL ? 'font-medium !text-sm' : '!text-md '
                            } ${activeTab === category
                                ? 'tab-active bg-primary-one !text-white'
                                : 'bg-primary-three !text-dark-one hover:bg-primary-one hover:!text-white'
                            }`}
                        onClick={() => onTabChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

ProjectsTabsNavigation.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
};

export default ProjectsTabsNavigation;