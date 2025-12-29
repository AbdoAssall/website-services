import { Award, Download } from "lucide-react";

/**
 * DownloadCTA Component - Download call-to-action section
 * @param {Object} props - Component props
 * @param {boolean} props.isRTL - RTL direction flag
 * @returns {JSX.Element} Download CTA component
 */
export const DownloadCTA = () => (
    <div className="bg-primary-one text-white rounded-lg p-6 text-center space-y-4">
        <h3 className="text-lg font-semibold">
            A Complete Guide to Employee Engagement
        </h3>

        <button
            className="
                bg-white text-primary-one px-6 py-2 rounded-md font-medium 
                hover:bg-gray-50 transition-colors duration-200 
                inline-flex items-center gap-2
            "
            aria-label="Download employee engagement guide"
        >
            <Download size={16} aria-hidden="true" />
            Download
        </button>

        {/* Thumbnail Image */}
        <div className="mt-4">
            <div className="w-full h-32 bg-white/10 rounded-md flex items-center justify-center">
                <img
                    src="/assets/images/guide-thumbnail.jpg"
                    alt="Employee Engagement Guide"
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                />
                <div className="w-full h-full bg-white/20 rounded-md hidden items-center justify-center">
                    <Award size={32} className="text-white/60" />
                </div>
            </div>
        </div>
    </div>
);