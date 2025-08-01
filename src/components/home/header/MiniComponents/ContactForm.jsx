// @ts-nocheck
import { Link } from "react-router-dom";
import InputLabel from "../../../UI/InputLabel";
import TextInput from "../../../UI/TextInput";
import Textarea from "../../../UI/Textarea";
import PrimaryButton from "../../../UI/PrimaryButton";
import { Loading2 as Spinner } from '../../../elements/Loading2';
import { useLanguage } from '../../../../store/LanguageContext';
import useProjects from "../../../../hooks/useProjects";

export const ContactForm = () => {
    const { isRTL, t, direction } = useLanguage();
    const { projects, loading } = useProjects();

    // Get last 5 projects (excluding the last one)
    const filterProjects = projects.slice(Math.max(0, projects.length - 6), projects.length - 1);
    const date = new Date().getFullYear();

    return (
        <dialog id="my_modal_2" className="modal">
            <div dir="rtl" className={`modal-box max-w-17/20 max-h-22/25 p-0 ${isRTL ? 'text-right' : 'text-left'} bg-white`}>
                {/* Logo and Contact Form */}
                <div className="card lg:card-side flex-col-reverse bg-primary-three shadow-sm">
                    <div className={`card-body p-10 ${isRTL ? 'text-right' : 'text-left'}`}>
                        <div className={`w-full flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                            <figure className="logo w-36 h-auto">
                                <img
                                    src="/assets/images/logo-default.png"
                                    className="w-full h-full object-cover"
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
                                            <Link to={project.url} aria-label={project.name} >
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
                    <div className={`card-body p-10 lg:w-3/5 drop-shadow-lg rounded-r-xl bg-white ${isRTL ? 'text-right' : 'text-left'}`}>
                        <form>
                            <div>
                                <InputLabel htmlFor="name" className={`uppercase ${isRTL ? '!text-base' : ''}`} value={t('contact.form.name')} />
                                <TextInput
                                    id="name"
                                    name="name"
                                    className={`block w-full !mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                                />
                            </div>
                            <div className="mt-3">
                                <InputLabel htmlFor="email" className={`uppercase ${isRTL ? '!text-base' : ''}`} value={t('contact.form.email')} />
                                <TextInput
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`block w-full !mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                                />
                            </div>
                            <div className="mt-3">
                                <InputLabel htmlFor="address" className={`uppercase ${isRTL ? '!text-base' : ''}`} value={t('contact.form.address')} />
                                <TextInput
                                    id="address"
                                    name="address"
                                    className={`block w-full !mt-1 ${isRTL ? 'text-right' : 'text-left'}`}
                                />
                            </div>
                            <div className="mt-3">
                                <InputLabel htmlFor="message" className={`uppercase ${isRTL ? '!text-base' : ''}`} value={t('contact.form.message')} />
                                <Textarea
                                    id="message"
                                    name="message"
                                    className={`block w-full !mt-2 ${isRTL ? 'text-right' : 'text-left'}`}
                                >
                                </Textarea>
                            </div>
                        </form>
                        <div className="grid">
                            <PrimaryButton type="submit" disabled={false} className="hover:!bg-primary-one/95 hover:!text-white ltr:!uppercase">
                                {t('contact.form.submit')}
                            </PrimaryButton>
                        </div>
                    </div>
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