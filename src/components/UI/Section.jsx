import PropTypes from "prop-types";
import { Briefcase } from "lucide-react";
import '/src/styles/section.css'

export default function Section({
    children,
    className,
    style,
    contentStyle,
    titleStyle,
    descriptionStyle,
    subTitle,
    sectionTitle,
    description
}) {
    return (
        <section className={`relative py-12 ${className}`} style={style}>
            <div className="fle flex-col justify-center items-center mx-auto px-2 lg:px-0 max-w-[73.125rem]">
                <div className={`flex flex-col justify-center items-center text-center ${contentStyle}`}>
                    {subTitle && (
                        <div className="flex gap-3 justify-start rtl:justify-end">
                            <Briefcase className="text-primary-one w-5 h-5" />
                            <h5 className="section-title">{subTitle}</h5>
                        </div>
                    )}
                    <div className="mt-4.5">
                        {sectionTitle && (
                            <h2 className={`text-3xl md:text-[3.13rem] font-bold leading-13.5 text-primary-two capitalize ${titleStyle}`}>
                                {sectionTitle}
                            </h2>
                        )}
                        {description && (
                            <p className={`w-2xl mt-4 text-dark-one ${descriptionStyle}`}>
                                {description}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-3">
                    {children}
                </div>
            </div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    contentStyle: PropTypes.string,
    titleStyle: PropTypes.string,
    descriptionStyle: PropTypes.string,
    subTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    description: PropTypes.string
};

Section.defaultProps = {
    children: null,
    className: '',
    style: {},
    contentStyle: '',
    titleStyle: '',
    descriptionStyle: '',
    subTitle: '',
    sectionTitle: '',
    description: ''
};