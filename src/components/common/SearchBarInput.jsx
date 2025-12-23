// @ts-nocheck
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@store/LanguageContext";
import { useSmartSearch } from "@hooks/search/useSmartSearch";
import { useKeyboardNavigation } from "@hooks/search/useKeyboardNavigation";
import PropTypes from "prop-types";
import TextInput from "../UI/TextInput";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

export const SearchBarInput = function ({ openSearchBar, styleSearchBtn }) {
    const { direction, t } = useLanguage();
    const navigate = useNavigate();

    // --- Refs ---
    const inputRef = useRef(null);
    const resultsContainerRef = useRef(null);

    // --- UI State ---
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(true);

    // --- Hooks ---
    const results = useSmartSearch(query);
    const flatResults = useMemo(() => {
        const projectResults = results.projects.map(p => ({ type: 'project', path: `/projects/${p.slug}`, categoryPath: `/projects?category=${encodeURIComponent(p.category)}`, ...p }));
        const serviceResults = results.services.map(s => ({ type: 'service', path: `/services/${s.slug}`, ...s }));
        return [...projectResults, ...serviceResults];
    }, [results]);

    const handleEnter = useCallback((index) => {
        if (flatResults[index]) {
            navigate(flatResults[index].path);
            handleLinkClick();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flatResults, navigate]);

    // <-- 2. Call the new hook and pass the necessary settings
    const [activeIndex, setActiveIndex] = useKeyboardNavigation({
        itemCount: flatResults.length,
        onEnter: handleEnter,
        scrollRef: resultsContainerRef,
    });

    // --- Auto-focus on component mount ---
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            inputRef.current?.focus();
        }
    }, []);

    // --- Event Handlers ---
    const handleLinkClick = () => {
        setQuery('');
        openSearchBar();
    };

    const clearSearch = () => {
        setQuery('');
        setActiveIndex(-1); // <-- 3. use the setter function from the hook
        inputRef.current?.focus();
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const targetIndex = activeIndex > -1 ? activeIndex : 0;
        if (flatResults.length > targetIndex) {
            handleEnter(targetIndex);
        }
    };

    const hasResults = flatResults.length > 0;

    return (
        <form className="relative w-full" onSubmit={handleSearchSubmit} autoComplete="off">
            <TextInput
                ref={inputRef}
                name="search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // <-- 3. Update the query status only
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                className="!px-5 !m-0"
                placeholder={t('navbar.search')}
                dir={direction}
            />

            {/* Clear button */}
            {query && (
                <button
                    type="button"
                    aria-label="Clear search"
                    onClick={clearSearch}
                    className={`absolute top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors ${direction === 'ltr' ? 'right-16' : 'left-16'}`}
                >
                    <X className="w-5 h-5" />
                </button>
            )}

            {/* Search button */}
            <button
                type="submit"
                aria-label="search"
                className={`inline-block bg-primary-two p-3 rounded-md ${styleSearchBtn} absolute top-1/2 -translate-y-1/2 ${direction === 'ltr' ? 'right-4' : 'left-4'}`}
            >
                <Search strokeWidth={1.5} className="h-5 w-5 text-white" />
            </button>

            {/* Results Box */}
            {isFocused && hasResults && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden z-100 border border-gray-200 text-left"
                >
                    <ul className="divide-y divide-gray-100">
                        {/* Projects Department */}
                        {/* {results.projects.length > 0 && (
                                        <li className="px-4 pt-3 pb-2">
                                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('navbar.projects')}</h3>
                                        </li>
                                    )} */}
                        {flatResults.map((item, index) => (
                            item.type === 'project' ? (
                                <li key={`proj-${item.id}`} className={index === activeIndex ? '!bg-primary-one/10' : ''}>
                                    <div className="flex items-center justify-between p-4 hover:!bg-primary-one/10 transition-colors duration-150">
                                        <Link
                                            to={item.path}
                                            onClick={handleLinkClick}
                                            aria-label={`View project: ${item.name}`}
                                        >
                                            <span className="!text-dark-one !text-sm !font-medium">{item.name}</span>
                                        </Link>
                                        <Link
                                            to={item.categoryPath}
                                            onClick={(e) => { e.stopPropagation(); handleLinkClick(); }}
                                            className="!text-xs !bg-primary-one/10 !text-primary-one !font-bold py-1 px-2 rounded-full hover:!bg-primary-one/20"
                                            aria-label={`View project category: ${item.category}`}
                                        >
                                            {item.category}
                                        </Link>
                                    </div>
                                </li>
                            ) : (
                                // Services Department
                                // {results.services.length > 0 && (
                                //     <li className="px-4 pt-3 pb-2">
                                //         <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t('navbar.services')}</h3>
                                //     </li>
                                // )}
                                <li key={`serv-${item.id}`} className={index === activeIndex ? '!bg-primary-one/10' : ''}>
                                    <Link
                                        to={item.path}
                                        onClick={handleLinkClick}
                                        className="block p-4 !text-dark-one !text-sm font-medium hover:!bg-primary-one/10 transition-colors duration-150"
                                        aria-label={`View service: ${item.name}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </motion.div>
            )}
        </form>
    );
};

SearchBarInput.propTypes = {
    openSearchBar: PropTypes.func.isRequired,
    styleSearchBtn: PropTypes.string,
}