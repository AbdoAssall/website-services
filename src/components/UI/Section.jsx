import PropTypes from "prop-types";
import { Briefcase } from "lucide-react";
import '/src/styles/section.css'
import PrimaryLink from "./PrimaryLink";

export default function Section({
    children = null,
    className = '',
    style = {},
    contentStyle = 'justify-center items-center text-center',
    titleStyle = '',
    descriptionStyle = '',
    innerContentStyle = '',
    subTitle = '',
    sectionTitle = '',
    description = '',
    button = '',
    buttonLink = '#',
}) {
    return (
        <section className={`relative py-12 ${className}`} style={style}>
            <div className="flex flex-col mx-auto !px-4 xl:!px-0 max-w-[72.125rem]">
                <div className={`flex flex-col ${contentStyle}`}>
                    {subTitle && (
                        <div className="flex gap-3 justify-start">
                            <Briefcase className="text-primary-one w-5 h-5" />
                            <h5 className="section-title">{subTitle}</h5>
                        </div>
                    )}
                    <div className={`mt-4.5 flex flex-col text-center w-full ${innerContentStyle}`}>
                        {sectionTitle && (
                            <h2 className={`text-3xl md:text-[3.13rem] font-bold leading-13.5 text-primary-two capitalize ${titleStyle}`}>
                                {sectionTitle}
                            </h2>
                        )}
                        {description && (
                            <p className={`w-full mdw-2xl mt-4 text-dark-one ${descriptionStyle}`}>
                                {description}
                            </p>
                        )}
                        {button && (
                            <div className="">
                                <PrimaryLink to={buttonLink} ariaLabel={button}>{button}</PrimaryLink>
                            </div>
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
    innerContentStyle: PropTypes.string,
    subTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.string,
    buttonLink: PropTypes.string,
};