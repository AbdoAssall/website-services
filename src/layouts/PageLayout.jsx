// @ts-nocheck
import { Navbar } from "../components/home/header/Navbar";
import PropTypes from "prop-types";
import { useLanguage } from "../store/LanguageContext";
import ScrollProgressCircle from "../components/elements/ScrollProgressCircle";
import Footer from "../components/home/footer/Footer";
import WhatsAppWidget from "@components/common/WhatsAppWidget";

/**
 * @param {{ children: React.ReactNode }} props
*/

export function PageLayout({ children }) {
    const { direction } = useLanguage();

    return (
        <div dir={direction} className="relative flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="max-w-full">{children}</main> {/* px-2 md:px-4 */}
            <Footer />
            <ScrollProgressCircle />
            <WhatsAppWidget />
        </div>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node
}