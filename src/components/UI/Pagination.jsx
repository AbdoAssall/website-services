// @ts-nocheck
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../store/LanguageContext';
import { PaginationButton } from './PaginationButton';

/**
 * @param {{ 
 *   currentPage?: number, 
 *   totalPages?: number, 
 *   onPageChange?: (page: number) => void, 
 *   maxVisiblePages?: number, 
 *   showFirstLast?: boolean, 
 *   className?: string,
 * }} props
 */

const Pagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange = () => { },
    maxVisiblePages = 5,
    showFirstLast = true,
    className = ''
}) => {
    const { isRTL, t } = useLanguage();

    // Don't render pagination if there's only one page or no pages
    if (totalPages <= 1) return null;

    const getVisiblePages = () => {
        const pages = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // Adjust start page if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const visiblePages = getVisiblePages();
    const showStartEllipsis = visiblePages[0] > 2;
    const showEndEllipsis = visiblePages[visiblePages.length - 1] < totalPages - 1;

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            onPageChange(page);
        }
    };

    const Ellipsis = () => (
        <span className="relative inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 py-2 text-sm font-medium text-gray-500">
            ...
        </span>
    );

    return (
        <div className={`flex items-center justify-center space-x-1 mt-12 ${className}`}>
            <nav className="flex items-center gap-x-1" role="navigation" aria-label="Pagination">
                {/* Previous Button */}
                <PaginationButton
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    ariaLabel={t('pagination.previous')}
                    className="!rounded-md"
                >
                    <ChevronLeft
                        className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                    />
                    <span className="sr-only">{t('pagination.previous')}</span>
                </PaginationButton>

                {/* First Page */}
                {showFirstLast && visiblePages[0] > 1 && (
                    <>
                        <PaginationButton
                            onClick={() => handlePageChange(1)}
                            active={currentPage === 1}
                            ariaLabel={`Page ${currentPage}`}
                        >
                            1
                        </PaginationButton>
                        {showStartEllipsis && <Ellipsis />}
                    </>
                )}

                {/* Visible Page Numbers */}
                {visiblePages.map((page) => (
                    <PaginationButton
                        key={page}
                        onClick={() => handlePageChange(page)}
                        active={currentPage === page}
                        ariaLabel={`Page ${page}`}
                        className="min-w-[2.5rem]"
                    >
                        {page}
                    </PaginationButton>
                ))}

                {/* Last Page */}
                {showFirstLast && visiblePages[visiblePages.length - 1] < totalPages && (
                    <>
                        {showEndEllipsis && <Ellipsis />}
                        <PaginationButton
                            onClick={() => handlePageChange(totalPages)}
                            active={currentPage === totalPages}
                            ariaLabel={`Page ${totalPages}`}
                        >
                            {totalPages}
                        </PaginationButton>
                    </>
                )}

                {/* Next Button */}
                <PaginationButton
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    ariaLabel={t('pagination.next')}
                    className="!rounded-md"
                >
                    <ChevronRight
                        className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                    />
                    <span className="sr-only">{t('pagination.next')}</span>
                </PaginationButton>
            </nav>

            {/* Page Info */}
            <div className="hidden sm:flex items-center text-sm text-dark-two ms-8">
                <span>
                    {t('pagination.page')} {currentPage} {t('pagination.of')} {totalPages}
                </span>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    maxVisiblePages: PropTypes.number,
    showFirstLast: PropTypes.bool,
    className: PropTypes.string
};

export default Pagination;