// @ts-nocheck
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { containerVariants, searchBarVariants, closeButtonVariants } from "@utils/variants/searchVariants";
import { SearchBarInput } from "@components/common/SearchBarInput";

export const SearchBar = function ({ openSearchBar }) {
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
                    <SearchBarInput openSearchBar={openSearchBar} />
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