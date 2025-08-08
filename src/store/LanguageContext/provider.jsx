import { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { setLanguageWithDirection } from "../../i18n";
import { LanguageContext } from "./context";

// Provider component
export function LanguageProvider({ children }) {
  const { t, i18n } = useTranslation();

  // Get current language and direction
  const currentLanguage = i18n.language;
  const direction = currentLanguage === "ar" ? "rtl" : "ltr";

  // Initialize direction on mount
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLanguage;
    document.body.dir = direction;
  }, [direction, currentLanguage]);

  // Change language with direction
  const changeLanguage = (newLanguage) => {
    setLanguageWithDirection(newLanguage);
  };

  // Toggle between RTL and LTR
  const toggleDirection = () => {
    const newLanguage = currentLanguage === "ar" ? "en" : "ar";
    changeLanguage(newLanguage);
  };

  // Change direction directly
  const changeDirection = (newDirection) => {
    if (newDirection === "rtl") {
      changeLanguage("ar");
    } else if (newDirection === "ltr") {
      changeLanguage("en");
    } else {
      console.warn('Invalid direction. Use "rtl" or "ltr".');
    }
  };

  // Context value
  const value = {
    direction,
    language: currentLanguage,
    isRTL: direction === "rtl",
    isLTR: direction === "ltr",
    toggleDirection,
    changeDirection,
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
