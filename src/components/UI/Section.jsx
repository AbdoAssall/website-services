import PropTypes from "prop-types";

export default function Section ({ children }) {
    return (
        <section className="py-12">
            <div className="mx-auto px-2 lg:px-0 max-w-6xl">
                {children}
            </div>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node.isRequired
}