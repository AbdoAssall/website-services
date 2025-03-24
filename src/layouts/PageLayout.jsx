import { Navbar } from "../components/home/header/Navbar";
import PropTypes from "prop-types";

export function PageLayout({children}) {
    return (
        <div dir="rtl" className="relative flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="max-w-full">{children}</main> {/* px-2 md:px-4 */}
        </div>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired
}