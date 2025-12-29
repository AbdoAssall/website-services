import Section from "@components/UI/Section";
import { useLanguage } from "../../../store/LanguageContext";
import useTeams from "@hooks/useTeams";
import { Loading2 as Spinner } from '../../elements/Loading2';

const Team = () => {
    const { t, isRTL } = useLanguage();
    const { teamMembers, loading } = useTeams();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Section
            className="pt-18 pb-0"
            subTitle={t('team.subtitle')}
            sectionTitle={t('team.title')}
            isSubTitle={true}
        >
            <div className={`mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mx-auto ${isRTL ? 'rtl' : 'ltr'}`}>
                {loading
                    ? (
                        <div className="col-span-full flex justify-center">
                            <Spinner />
                        </div>
                    ) : (
                        teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="group relative rounded-[0.625rem] overflow-hidden shadowsm hover:shadow-lg transition-all duration-300"
                            >
                                {/* Image Container with Hover Overlay */}
                                <div className="relative rounded-[0.625rem] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        loading="lazy"
                                        className="w-full !h-80 object-fill rounded-[0.625rem] transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Hover Overlay - appears from top-left */}
                                    <div
                                        className="absolute inset-0 rounded-[0.625rem] bg-gradient-to-br from-primary-one to-primary-one opacity-0 group-hover:opacity-80 transition-all duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"
                                        style={{
                                            background: 'linear-gradient(135deg, var(--color-primary-one) 0%, rgba(7, 133, 134, 0.9) 100%)'
                                        }}
                                    ></div>

                                    {/* Social Icons - appear on hover */}
                                    {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <div className="flex space-x-4">
                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                                            <svg className="w-5 h-5 text-primary-one" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                                            <svg className="w-5 h-5 text-[var(--color-primary-one)]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                                            <svg className="w-5 h-5 text-[var(--color-primary-one)]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.754-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div> */}
                                </div>

                                {/* Content */}
                                <div className={`p-6 text-center ${isRTL ? 'rtl' : 'ltr'}`}>
                                    <h3 className="!text-2xl !font-semibold !text-heading-dark mb-2 font-spartan">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary-one font-medium mb-3 text-md font-inter">
                                        {member.position}
                                    </p>
                                    <p className="text-dark-one text-sm leading-relaxed font-inter">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
            </div>
        </Section>
    );
}
export default Team;