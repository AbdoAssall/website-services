// @ts-nocheck
import PropTypes from 'prop-types';
import SocialIcons from '../../elements/SocialIcons';
import PrimaryLink from '../../UI/PrimaryLink';
import { useLanguage } from "@store/LanguageContext";

/**
 * Renders the sidebar for the project page, displaying project metadata,
 * social sharing icons, downloadable files, and a call-to-action.
 *
 * @component
 * @param {object} props - The component props.
 * @param {object} props.project - The project data object.
 * @param {string} [props.project.client] - The client's name.
 * @param {string} [props.project.category] - The project's category.
 * @param {string} [props.project.date] - The project's completion date.
 * @param {string} [props.project.website] - The project's live URL.
 * @param {string} [props.project.location] - The project's location.
 * @param {Array<object>} [props.project.files] - An array of downloadable files.
 * @returns {JSX.Element} The rendered ProjectSidebar component.
 */
const ProjectSidebar = ({ project }) => {
    const { t, language, isRTL } = useLanguage();

    /**
     * Handles the download of a single file.
     * Creates a temporary anchor element to trigger the browser's download functionality.
     * @param {object} file - The file object to download.
     * @param {string} file.url - The URL of the file.
     * @param {string} file.name - The desired name for the downloaded file.
     */
    const handleDownload = (file) => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = file.url;
        link.download = file.name;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    /**
    * Handles the download of all project files with a slight delay between each
    * to prevent browser issues with multiple simultaneous downloads.
    */
    const handleDownloadAll = () => {
        if (project.files && project.files.length > 0) {
            project.files.forEach((file, index) => {
                setTimeout(() => {
                    handleDownload(file);
                }, index * 500); // Stagger downloads
            });
        }
    };

    return (
        <aside className="project-sidebar">
            <div className="sticky top-8 space-y-8">
                {/* Project Information Card */}
                <div className="bg-white border border-border-dark-one rounded-lg p-6 lg:p-8 shadow-sm">
                    <h3 className="text-xl lg:text-2xl font-bold text-heading-dark !mb-6 pb-4 border-b border-border-dark-one">
                        {t('projects.projectInfo')}
                    </h3>

                    <div className="space-y-6">
                        {/* Client */}
                        {project.client && (
                            <div>
                                <h4 className="text-sm font-semibold text-dark-two uppercase tracking-wider mb-2">
                                    {t('projects.client')}
                                </h4>
                                <p className="text-heading-dark font-medium text-lg">
                                    {project.client}
                                </p>
                            </div>
                        )}

                        {/* Category */}
                        {project.category && (
                            <div>
                                <h4 className="text-sm font-semibold text-dark-two uppercase tracking-wider !mb-2">
                                    {t('projects.category')}
                                </h4>
                                <span className="inline-block px-3 py-1 bg-primary-one/10 text-primary-one rounded-full text-sm font-medium">
                                    {project.category}
                                </span>
                            </div>
                        )}

                        {/* Location */}
                        {project.location && (
                            <div>
                                <h4 className="text-sm font-semibold text-dark-two uppercase tracking-wider mb-2">
                                    {t('projects.location')}
                                </h4>
                                <p className="text-heading-dark font-medium text-lg">
                                    {project.location}
                                </p>
                            </div>
                        )}

                        {/* Date */}
                        {project.date && (
                            <div>
                                <h4 className="text-sm font-semibold text-dark-two uppercase tracking-wider !mb-2">
                                    {t('projects.date')}
                                </h4>
                                <time
                                    dateTime={project.date}
                                    className="text-heading-dark font-medium"
                                >
                                    {new Date(project.date).toLocaleDateString(language, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                        )}

                        {/* Website */}
                        {project.website && (
                            <div>
                                <h4 className="text-sm font-semibold text-dark-two uppercase tracking-wider !mb-2">
                                    {t('projects.website')}
                                </h4>
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-one hover:text-primary-one/80 font-medium transition-colors duration-300 break-all"
                                    aria-label={`Visit project website: ${project.website}`}
                                >
                                    {project.website.replace(/^https?:\/\//, '')}
                                </a>
                            </div>
                        )}

                        {/* Social Share */}
                        <div>
                            <h4 className="text-sm font-semibold text-dark-two uppercase tracking-wider !mb-2">
                                {t('projects.share')}
                            </h4>
                            <SocialIcons
                                className="flex gap-2"
                                iconClassName="w-8 h-8 text-xs !bg-sky hover:!bg-primary-one hover:!text-white rounded-md flex items-center justify-center border border-border-dark-one transition-all duration-300"
                                showTitle={true}
                            />
                        </div>

                        {/* Download Files */}
                        {project.files && project.files.length > 0 && (
                            <div>
                                <h4 className="text-sm font-semibold text-dark-two uppercase tracking-wider !mb-4">
                                    {t('projects.downloads')}
                                </h4>

                                {/* Individual Files */}
                                <div className="space-y-3 mb-4">
                                    {project.files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-sky/50 rounded-lg border border-border-dark-one"
                                        >
                                            <div className="flex items-center min-w-0 flex-1">
                                                <div className={`flex-shrink-0 w-9 h-9 bg-primary-one/10 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                                                    <span className="text-xs font-semibold text-primary-one uppercase">
                                                        {file.type || 'file'}
                                                    </span>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-sm font-medium text-heading-dark truncate">
                                                        {file.name}
                                                    </p>
                                                    <p className="text-xs text-dark-two">
                                                        {file.type?.toUpperCase() || 'FILE'}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDownload(file)}
                                                className="flex-shrink-0 p-2 text-primary-one hover:bg-primary-one hover:text-white rounded-md transition-all duration-300"
                                                aria-label={`Download ${file.name}`}
                                                title={`Download ${file.name}`}
                                            >
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Download All Button */}
                                <button
                                    onClick={handleDownloadAll}
                                    className="w-full px-5 py-3 text-center border border-primary-one rounded-none rounded-tl-[0.625rem] rounded-br-[0.625rem] bg-primary-one text-white font-semibold capitalize tracking-widest hover:bg-transparent hover:text-primary-one hover:rounded-none hover:rounded-tr-[0.625rem] hover:rounded-bl-[0.625rem] active:bg-transparent active:text-primary-one active:rounded-none active:rounded-tr-[0.625rem] active:rounded-bl-[0.625rem] transition-all duration-500 ease-in-out cursor-pointer"
                                    aria-label="Download all project files"
                                >
                                    {t('projects.downloadAll')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Call to Action Card */}
                <div className="bg-gradient-to-br from-primary-two to-primary-two/90 text-white rounded-lg p-6 lg:p-8">
                    <h3 className="text-xl font-bold !text-white mb-4">
                        {t('projects.interestedProject')}
                    </h3>
                    <p className="text-sm opacity-90 mb-6 leading-relaxed">
                        {t('projects.getInTouchDescription')}
                    </p>
                    <PrimaryLink
                        to="/contact"
                        className="!inline-block !min-w-full !bg-transparent !border-white/20 !text-white hover:!bg-white hover:!text-primary-two"
                        ariaLabel="Contact us for similar project"
                    >
                        {t('projects.getInTouch')}
                    </PrimaryLink>
                </div>
            </div>
        </aside>
    );
};

ProjectSidebar.propTypes = {
    project: PropTypes.shape({
        client: PropTypes.string,
        category: PropTypes.string,
        date: PropTypes.string,
        website: PropTypes.string,
        location: PropTypes.string,
        files: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            type: PropTypes.string
        }))
    }).isRequired
};

export default ProjectSidebar;