// @ts-nocheck
import PostItem from "./PostItem";
import { Loading2 as Spinner } from '../../../elements/Loading2';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../store/LanguageContext';

/**
 * ProjectsSection component props
 * @typedef {Object} ProjectsSectionProps
 * @property {Array<{id: string|number, date: string, name: string, img: string}>} projects - List of project objects.
 * @property {boolean} loading - Loading state for projects.
 */

/**
 * Renders the projects section in the footer.
 * @param {ProjectsSectionProps} props
 */

export const ProjectsSection = ({ projects, loading }) => {
    const { t } = useLanguage();

    return (
        <div className="md:w-[30.40%] flex">
            <div className="md:mb-7.5 md:pt-7 md:pr-7.5 md:pl-[0.938rem] flex flex-wrap flex-col content-start w-full relative">
                <div className="pb-4.5 mb-6">
                    <div className="relative before:absolute before:w-14 before:h-0.5 before:bg-primary-one before:inset-x-0 before:-bottom-3">
                        <h3 className="!text-white font-bold text-xl">
                            {t('footer.projects')}
                        </h3>
                    </div>
                </div>
                <ul className="md:mb-7.5">
                    {loading ? (
                        <Spinner />
                    ) : (
                        projects.slice(0, 3).map((project) => (
                            <li key={project.id} className="!mb-[1.563rem] group">
                                <PostItem
                                    date={project.date}
                                    title={project.name}
                                    imagePath={project.img}
                                />
                            </li>
                        ))
                    )}
                    {!loading && projects.length === 0 && (
                        <li className="text-gray-400">{t('footer.available')}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

ProjectsSection.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            date: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        })
    ).isRequired,
    loading: PropTypes.bool.isRequired,
};