import { Navbar } from "../components/home/header/Navbar";
import PropTypes from "prop-types";
import { useLanguage } from "../contexts/LanguageContext";
import ScrollProgressCircle from "../components/elements/ScrollProgressCircle";

export function PageLayout({children}) {
    const { direction } = useLanguage();

    return (
        <div dir={direction} className="relative flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="max-w-full">{children}</main> {/* px-2 md:px-4 */}
            <ScrollProgressCircle />
        </div>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired
}