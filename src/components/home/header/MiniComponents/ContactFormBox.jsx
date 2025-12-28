// @ts-nocheck
import { Link } from "react-router-dom";
import { Loading2 as Spinner } from '../../../elements/Loading2';
import { useLanguage } from '../../../../store/LanguageContext';
import useProjects from "../../../../hooks/useProjects";
import ContactForm from "@components/contact/subcomponents/ContactForm";

export const ContactFormBox = () => {
    const { isRTL, t, direction } = useLanguage();
    const { projects, loading } = useProjects();

    // Get last 5 projects (excluding the last one)
    const filterProjects = projects.slice(Math.max(0, projects.length - 6), projects.length - 1);
    const date = new Date().getFullYear();

    // Function to close the modal
    const closeModal = () => {
        const modal = document.getElementById('my_modal_2');
        if (modal) modal.close();
    };

    return (
        <dialog id="my_modal_2" className="modal">
            <div dir="rtl" className={`modal-box max-w-17/20 max-h-22/25 p-0 ${isRTL ? 'text-right' : 'text-left'} bg-white`}>
                {/* Logo and Contact Form */}
                <div className="card lg:card-side flex-col-reverse bg-primary-three shadow-sm">
                    <div className={`card-body p-10 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <div className={`w-full flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                            <figure className="logo w-48.5 h-auto">
                                <img
                                    src="https://storge.scopehub.net/images/logo.png"
                                    className="w-full !h-full object-cover"
                                    alt={t('navbar.logoAlt')}
                                    loading="lazy"
                                />
                            </figure>
                        </div>
                        <div dir={direction} className="my-4">
                            <p className="!mb-5">{t('contact.form.description')}</p>
                            <Link
                                to="#"
                                aria-label={t('contact.form.readMore')}
                                className="!text-dark-one font-bold font-spartan text-base uppercase"
                            >
                                {t('contact.form.readMore')}
                            </Link>
                        </div>
                        <hr className="text-dark-one/15" />
                        <div className="my-3">
                            <h3 className="text-xl">{t('contact.form.latestProjects')}</h3>
                            {loading ? (
                                <Spinner />
                            ) : (
                                <div className={`mt-3 flex items-center flex-wrap gap-3 ${isRTL ? 'justify-start' : 'justify-end'}`}>
                                    {filterProjects?.map((project) => (
                                        <div key={project.id} className='relative overflow-hidden'>
                                            <Link
                                                to={`/projects/${project.slug}`}
                                                aria-label={project.name}
                                                onClick={closeModal}
                                            >
                                                <div className="absolute inset-0 bg-primary-one opacity-0 hover:opacity-70 transition-all duration-500 z-2 rounded-lg"></div>
                                                <img src={project.img} alt={project.name} className="w-26 h-26 rounded-lg object-cover" loading="lazy" />
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <hr className="text-dark-one/15" />
                        <div dir={direction} className="mt-6 mb-3">
                            @ {date} {t('contact.form.copyright')}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm
                        isPlaceholder={false}
                        icon={false}
                        className="lg:w-3/5 !rounded-none !rounded-r-xl"
                    />
                </div>

                {/* Close Button */}
                <form method="dialog">
                    <button
                        aria-label={t('contact.form.close')}
                        className="btn btn-sm btn-circle btn-ghost bg-primary-one text-white p-4 absolute right-2 top-2"
                    >
                        ✕
                    </button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop"><button aria-label={t('contact.form.close')} ></button></form>
        </dialog>
    );
}