import PropTypes from 'prop-types';
import { useLanguage } from "@store/LanguageContext";

/**
 * Displays the main textual content of a project, including its name,
 * description, challenges, solution, and results.
 *
 * @component
 * @param {object} props - The component props.
 * @param {object} props.project - The project data object.
 * @param {string} props.project.name - The name of the project.
 * @param {string} [props.project.category] - The category of the project.
 * @param {string} [props.project.date] - The completion date of the project.
 * @param {string} [props.project.description] - The detailed description of the project.
 * @param {string} [props.project.challenge] - The challenges encountered in the project.
 * @param {object} [props.project.solution] - The solution provided for the project.
 * @param {string} [props.project.solution.description] - The main description of the solution.
 * @param {string} [props.project.solution.efficiency] - A note on the efficiency of the solution.
 * @param {string} [props.project.solution.innovation] - A note on the innovation of the solution.
 * @param {string} [props.project.result] - The results and impact of the project.
 * @param {string[]} [props.project.technologies] - An array of technologies used.
 * @returns {JSX.Element} The rendered ProjectContent component.
 */
const ProjectContent = ({ project }) => {
    const { language, isRTL, t } = useLanguage();

    return (
        <article className="project-content">
            {/* Project Title */}
            <header className="mb-8">
                <h1 className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-heading-dark mb-4 ${isRTL ? '!leading-12' : '!leading-10'}`}>
                    {project.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-dark-two">
                    <span className="flex items-center">
                        <span className={`inline-block w-2 h-2 bg-primary-one rounded-full ${isRTL ? 'ml-2' : 'mr-2'}`}></span>
                        {project.category}
                    </span>
                    <span>•</span>
                    <time dateTime={project.date} className="text-dark-two">
                        {project.date
                            ? new Date(project.date).toLocaleDateString(language, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })
                            : 'Date not available'}
                    </time>
                </div>
            </header>

            {/* Project Description */}
            <section className="mb-10">
                <p className="!text-lg leading-relaxed text-dark-one">
                    {project.description}
                </p>
            </section>

            {/* Challenge Section */}
            {project.challenge && (
                <section className="mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-heading-dark !mb-4">
                        {t('projects.challenge')}
                    </h2>
                    <div className="bg-sky/50 border-l-4 border-primary-one p-6 lg:p-8 rounded-tr-lg rounded-br-lg">
                        <p className="text-dark-one leading-relaxed !text-base lg:!text-lg">
                            {project.challenge}
                        </p>
                    </div>
                </section>
            )}

            {/* Solution Section */}
            {project.solution && (
                <section className="mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-heading-dark !mb-4">
                        {t('projects.solution')}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-dark-one leading-relaxed mb-6">
                            {project.solution.description}
                        </p>

                        {/* Solution Benefits List (if needed) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-start p-4 bg-white border border-border-dark-one rounded-lg shadow-sm">
                                <div className={`flex-shrink-0 w-8 h-8 bg-primary-one/10 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                                    <span className="w-2 h-2 bg-primary-one rounded-full"></span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-heading-dark mb-1">{t('projects.efficiency')}</h4>
                                    <p className="text-sm text-dark-two">{project.solution.efficiency}</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-white border border-border-dark-one rounded-lg shadow-sm">
                                <div className={`flex-shrink-0 w-8 h-8 bg-primary-one/10 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                                    <span className="w-2 h-2 bg-primary-one rounded-full"></span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-heading-dark mb-1">{t('projects.innovation')}</h4>
                                    <p className="text-sm text-dark-two">{project.solution.innovation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Results Section */}
            {project.result && (
                <section className="mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-heading-dark !mb-6">
                        {t('projects.results')}
                    </h2>
                    <div className="bg-gradient-to-r from-primary-one/5 to-primary-one/10 border border-primary-one/20 p-6 lg:p-8 rounded-lg">
                        <div className="flex items-start">
                            <div className={`flex-shrink-0 w-12 h-12 bg-primary-one rounded-full flex items-center justify-center ${isRTL ? 'ml-4' : 'mr-4'}`}>
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-heading-dark mb-3">
                                    {t('projects.success')}
                                </h3>
                                <p className="text-dark-one leading-relaxed text-lg">
                                    {project.result}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Technologies or Methods Used */}
            {project.technologies && (
                <section className="mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-heading-dark !mb-6">
                        {t('projects.technologies')}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-sky border border-border-dark-one text-dark-one rounded-full text-sm font-medium hover:bg-primary-one hover:text-white active:bg-primary-one active:text-white transition-colors duration-300"
                                tabIndex={0}
                                onFocus={e => { e.target.style.backgroundColor = '#078586'; e.target.style.color = '#fff'; }}
                                onBlur={e => { e.target.style.backgroundColor = ''; e.target.style.color = ''; }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
};

ProjectContent.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        challenge: PropTypes.string,
        solution: PropTypes.shape({
            description: PropTypes.string,
            efficiency: PropTypes.string,
            innovation: PropTypes.string
        }),
        result: PropTypes.string,
        technologies: PropTypes.arrayOf(PropTypes.string)
    }).isRequired
};

export default ProjectContent;