// @ts-nocheck
import { Link } from "react-router-dom";
import Section from "../../UI/Section";
import SectionShape from "../../UI/SectionShape";
import "../../../styles/scss/projects.scss";
import { ArrowRight, CircleFadingPlus } from 'lucide-react';
import { useState, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useLanguage } from "../../../contexts/LanguageContext";

const Projects = () => {
    const { t, direction } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('api/projects.json');
                const data = await response.json();
                setProjects(data);
                setLoading(false);

            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();

        Fancybox.bind("[data-fancybox]", {
            Toolbar: {
                display: {
                    left: ["infobar"],
                    // middle: [
                    //     "zoomIn",
                    //     "zoomOut",
                    //     "toggle1to1",
                    //     "rotateCCW",
                    //     "rotateCW",
                    //     "flipX",
                    //     "flipY",
                    // ],
                    right: [
                        "slideshow",
                        "fullscreen",
                        "iterateZoom",
                        "thumbs",
                        "share",
                        "download",
                        "close"
                    ],
                },
            },
            Thumbs: {
                showOnStart: false,
                type: "modern",
            },
            Slideshow: {
                autoStart: false,
                speed: 3000,
            },
        });

        const delegate = "[data-fancybox]";

        return () => {
            Fancybox.unbind(delegate);
            Fancybox.close();
        };
    }, [])

    // Helper function to get translated project data
    const translatedProjects = projects?.map((project) => ({
        ...project,
        name: t(`projects.items.${project?.id}.name`),
        category: t(`projects.items.${project?.id}.category`),
    }));

    return (
        <Section
            className="py-30 bg-sky"
            contentStyle={`${direction === 'rtl' ? 'items-center sm:items-start sm:justify-end text-right' : 'items-center sm:items-start sm:justify-start text-start'}`}
            innerContentStyle="sm:flex-row sm:justify-between itetms-center gap-5 sm:gap-0"
            btnStyle="w-auto mx-auto sm:mx-0"
            subTitle={t("projects.title")}
            sectionTitle={t("projects.mainTitle")}
            button={t("projects.moreProjects")}
            buttonLink="#"
        >
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {loading ? (
                    <span className="loading loading-spinner text-success inline-block mx-auto"></span>
                ) : (
                    translatedProjects.map((project) => {
                        return (
                            <div key={project.id} className="project-box card bg-white">
                                <article>
                                    <div className="image-box rounded-md shadow w-full">
                                        <img
                                            alt={project.name}
                                            loading="lazy"
                                            src={project.img}
                                            className="w-full !h-87.5 object-cover object-center block"
                                            width="731"
                                            height="488"
                                            srcSet={`${project.img} 731w, ${project.img} 600w, ${project.img} 300w`}
                                            sizes="(max-width: 731px) 100vw, 731px"
                                        />
                                        <div className="overlay">
                                            {/* Handle multiple images if available */}
                                            {project.images && project.images.length > 0 ? (
                                                <>
                                                    <a
                                                        href={project.images[0].url}
                                                        data-caption={project.name}
                                                        data-fancybox={`gallery-${project.id}`}
                                                        data-download-src={project.images[0].url}
                                                        className="zm-btn hover:!text-white/75"
                                                    >
                                                        <CircleFadingPlus strokeWidth={1.75} size={30} />
                                                    </a>
                                                    {/* Hidden images for gallery */}
                                                    {project.images.slice(1).map((image, index) => (
                                                        <a
                                                            key={index}
                                                            href={image.url}
                                                            data-caption={project.name}
                                                            data-fancybox={`gallery-${project.id}`}
                                                            data-download-src={image.url}
                                                            style={{ display: 'none' }}
                                                        />
                                                    ))}
                                                </>
                                            ) : (
                                                <a
                                                    href={project.img}
                                                    data-caption={project.name}
                                                    data-fancybox={`gallery-${project.id}`}
                                                    data-download-src={project.img}
                                                    className="zm-btn hover:!text-white/75"
                                                >
                                                    <CircleFadingPlus strokeWidth={1.75} size={30} />
                                                </a>
                                            )}
                                        </div>
                                        <div className="content-box">
                                            <div className="content-box-inner">
                                                <h2>
                                                    <Link
                                                        to={project.url}
                                                        className={`block ${direction === 'rtl' ? 'text-lg' : 'text-xl'} font-bold leading-7.5 mb-3 hover:!text-primary-one`}
                                                        title={project.name}
                                                    >
                                                        {project.name}
                                                    </Link>
                                                </h2>
                                                <p>
                                                    <Link
                                                        className={`cat !text-light-gray text-lg leading-6.5 inline-block hover:!text-primary-one  ${direction === 'rtl' ? 'font-semibold' : ''}`}
                                                        to="#"
                                                        aria-label={project.category}
                                                    >
                                                        {project.category}
                                                    </Link>
                                                </p>
                                                <Link
                                                    to={project.url}
                                                    className="read-more-link w-12.5 h-12.5 leading-12.5 rounded-full hover:!text-white"
                                                    title={t("projects.viewProject")}
                                                >
                                                    <ArrowRight
                                                        className={`w-6 h-6 mx-auto ${direction === 'rtl' ? 'rotate-180' : ''}`}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })
                )}
            </div>
            <SectionShape direction="top" />
            <SectionShape />
        </Section>
    );
}
export default Projects;