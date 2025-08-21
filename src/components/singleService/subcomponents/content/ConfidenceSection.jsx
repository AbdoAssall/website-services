import { useState } from 'react';
import { useLanguage } from '@store/LanguageContext';
import { TargetAnalysisContent } from './TargetAnalysisContent';
import { Target, BarChart3, DollarSign } from 'lucide-react';

export const ConfidenceSection = () => {
    const { isRTL } = useLanguage();
    const [isActive, setIsActive] = useState('target-analysis');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const tabs = [
        {
            id: 'target-analysis',
            label: 'Target Analysis',
            title: 'How do you identify your target market?',
            description: "Target market analysis determines where, and how, your product fits into the real-life market. With this information, you can: Determine which markets are most and least valuable to your business. Develop accurate buyer personas.",
            icon: Target,
            active: true
        },
        {
            id: 'research-analysis',
            label: 'Research analysis',
            title: 'What is data analysis techniques in research?',
            description: "The most commonly used data analysis methods are: Content analysis: This is one of the most common methods to analyze qualitative data. ... Narrative analysis: This method is used to analyze content from various sources, such as interviews of respondents, observations from the field, or surveys.",
            icon: BarChart3,
            active: false
        },
        {
            id: 'financial-statement',
            label: 'Financial statement',
            title: 'What are the four basic financial statements?',
            description: 'A financial statement is the combination of the three major reports on a business. It will contain the cash flow statement, the income statement and the balance sheet of the business. All three together produce an overall picture of the health of the business.',
            icon: DollarSign,
            active: false
        }
    ];

    const activeTab = tabs.find((tab) => tab.id === isActive) || tabs[0];

    const handleActiveTabChange = (tabId = '') => {
        if (tabId === isActive) return; // Prevent re-setting the same tab

        setIsTransitioning(true);

        // Start fade out, then change content and fade in
        setTimeout(() => {
            setIsActive(tabId);
            setIsTransitioning(false);
        }, 300); // Half of transition duration for crossfade effect
    };

    return (
        <div className="space-y-6">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-heading-dark">
                Confidence in future
            </h2>

            {/* Description */}
            <p className="text-dark-one leading-relaxed">
                Denouncing pleasure and praising pain was will give you a complete who chooses to enjoy a
                pleasure that has no annoying consequences.
            </p>

            {/* Tabs */}
            <div className={`mt-8 flex flex-wrap gap-4 md:gap-2 justify-center md:justify-start`}>
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleActiveTabChange(tab.id)}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-out
                                transform hover:scale-105 hover:shadow-md
                                ${isActive === tab.id
                                    ? 'bg-primary-one text-white shadow-lg scale-105'
                                    : 'bg-primary-three text-dark-one hover:bg-primary-one hover:text-white'
                                }
                            `}
                            aria-pressed={isActive === tab.id}
                            disabled={isTransitioning}
                        >
                            <Icon size={16} />
                            <span className="text-sm font-medium">{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Active Tab Content */}
            {isActive && (
                <div
                    className={`
                        transition-all duration-600 ease-out transform
                        ${isTransitioning
                            ? 'opacity-0 scale-95 translate-y2 rotate-1'
                            : 'opacity-100 scale-100 translate-y0 rotate-0'
                        }
                    `}
                    style={{
                        transitionProperty: 'opacity, transform',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >
                    <TargetAnalysisContent
                        title={activeTab.title}
                        description={activeTab.description}
                    />
                </div>
            )}
        </div>
    );
};