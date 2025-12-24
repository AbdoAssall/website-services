// @ts-nocheck
import PostItem from "./PostItem";
import { Loading2 as Spinner } from '@components/elements/Loading2';
import { useLanguage } from '@store/LanguageContext';
import useProjects from "@hooks/useProjects";

export const ProjectsSection = () => {
    const { projects, loading } = useProjects();
    const { t } = useLanguage();

    return (
        <div className="w-auto lg:w-[30.40%] flex">
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
                        projects?.slice(0, 3).map((project) => (
                            <li key={project.id} className="!mb-[1.563rem] group">
                                <PostItem
                                    date={project.date}
                                    title={project.name}
                                    imagePath={project.img}
                                    url={`/projects/${project.slug}`}
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