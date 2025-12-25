import { useState, useEffect } from 'react';
import { ChevronUp  } from 'lucide-react';

const ScrollProgressCircle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / scrollHeight;
      
      // Update scroll progress (0 to 1)
      setScrollProgress(Math.min(progress, 1));
      
      // Show/hide based on scroll position (100px threshold)
      setIsVisible(scrollTop > 50);
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate circle properties
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - scrollProgress);

  return (
    <button 
      className={`fixed bottom-18 sm:bottom-14 right-6 z-50 cursor-pointer transition-opacity duration-300 bg-transparent border-none p-0 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="50" height="50" viewBox="0 0 50 50">
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="transparent"
          stroke="rgba(22, 93, 245, 0.2)"
          strokeWidth="2"
        />
        
        {/* Progress circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="transparent"
          stroke="var(--color-primary-one)"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90, 25, 25)"
          strokeLinecap="round"
        />
        
        {/* Arrow icon */}
          {/* <path
          d="M18 28l7-7 7 7" 
          fill="transparent"
          stroke="var(--color-primary-one)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        /> */}
      </svg>
      <ChevronUp strokeWidth="3" className="w-5 h-5 text-primary-one absolute left-1/2 top-1/2 -translate-1/2" />
    </button>
  );
};

export default ScrollProgressCircle;
