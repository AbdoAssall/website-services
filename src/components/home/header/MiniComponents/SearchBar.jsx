import TextInput from "../../../UI/TextInput";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import PropTypes from "prop-types";

export const SearchBar = function ({ openSearchBar }) {
    const { direction, t } = useLanguage();

    const containerVariants = {
        hidden: { y: -100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 25,
                duration: 0.8,
                staggerChildren: 0.3,
                delayChildren: 0.5
            }
        },
        exit: {
            y: -100,
            opacity: 0,
            transition: {
                duration: 0.4,
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        }
    };

    const searchBarVariants = {
        hidden: { y: 50, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.8
            }
        },
        exit: {
            y: 50,
            opacity: 0,
            scale: 0,
            transition: { duration: 0.3 }
        }
    };

    const closeButtonVariants = {
        hidden: { x: 100, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
                delay: 0.9,
                duration: 0.8
            }
        },
        exit: {
            x: 100,
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="search-window"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="bg-primary-one w-full h-34 fixed top-0 left-0 z-99"
            >
                <motion.div
                    key="search-bar"
                    variants={searchBarVariants}
                    className="relative flex items-center justify-center mx-auto w-4xl h-full"
                >
                    <TextInput
                        name="search"
                        type="search"
                        className="inline-block !px-5 w-full !m-0 bg-white !text-dark-one"
                        placeholder={t('navbar.search')}
                        dir={direction}
                    />
                    <button
                        type="button"
                        aria-label="find"
                        className={`inline-block bg-primary-two p-3 rounded-md absolute ${direction === 'ltr' ? 'right-4' : 'left-4 top-1/2 -translate-y-1/2'}`}
                    >
                        <Search strokeWidth={1.5} className="h-5 w-5 text-white" />
                    </button>
                </motion.div>

                <motion.button
                    onClick={openSearchBar}
                    aria-label="close"
                    variants={closeButtonVariants}
                    className="btn btn-ghost w-10 h-10 rounded-full bg-primary-one text-white absolute right-2 top-2"
                >
                    <span>
                        <X className="w-7 h-7 !text-white" />
                    </span>
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
};

SearchBar.propTypes = {
    openSearchBar: PropTypes.func.isRequired,
}