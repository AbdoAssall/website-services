// @ts-nocheck
import { Link } from "react-router-dom";
import Section from "../../UI/Section";
import SectionShape from "../../UI/SectionShape";
import "../../../styles/scss/projects.scss";
import { ArrowRight, CircleFadingPlus } from 'lucide-react';
import { useState, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/src/api/projects.json');
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
                        "close",
                        // "download"
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


    return (
        <Section
            className="py-30 bg-sky"
            contentStyle="justify-start rtl:justify-end ltr:text-start rtl:text-right"
            innerContentStyle="flex-row justify-between itetms-center"
            subTitle="مشاريعنا"
            sectionTitle="لمحة عن أعمالنا"
            button="المزيد من المشاريع"
            buttonLink="#"
        >
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                {loading ? (
                    <span className="loading loading-spinner text-success inline-block mx-auto"></span>
                ) : (
                    projects.map((project) => (
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
                                        <a
                                            href={project.img}
                                            data-caption={project.name}
                                            data-fancybox="gallery"
                                            data-download-src={project.img}
                                            className="zm-btn hover:!text-white/75"
                                        >
                                            <CircleFadingPlus strokeWidth={1.75} size={30} />
                                        </a>
                                    </div>
                                    <div className="content-box">
                                        <div className="content-box-inner">
                                            <h2>
                                                <Link to={project.url} className="block text-xl font-bold leading-7.5 mb-3 hover:!text-primary-one">
                                                    {project.name}
                                                </Link>
                                            </h2>
                                            <p>
                                                <Link to="" className="cat !text-light-gray text-lg leading-6.5 inline-block hover:!text-primary-one">Category</Link>
                                            </p>
                                            <Link to={project.url} className="read-more-link w-12.5 h-12.5 leading-12.5 rounded-full hover:!text-white">
                                                <ArrowRight className="w-6 h-6 mx-auto" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))
                )}
            </div>
            <SectionShape direction="top" />
            <SectionShape />
        </Section>
    );
}
export default Projects;