import { createContext } from 'react';

/**
 * @typedef {import('i18next').TFunction} TFunction
 */

/**
 * Describes the shape of the object provided by LanguageProvider.
 * @typedef {object} LanguageContextType
 * @property {'ltr' | 'rtl'} direction
 * @property {string} language
 * @property {boolean} isRTL
 * @property {boolean} isLTR
 * @property {() => void} toggleDirection
 * @property {(newDirection: 'rtl' | 'ltr') => void} changeDirection
 * @property {(newLanguage: string) => void} changeLanguage
 * @property {TFunction} t
 */

/**
 * The default value for the context.
 * This is used only when a component consumes the context outside of its provider.
 * This prevents the app from crashing and helps in debugging.
 * @type {LanguageContextType}
 */
const defaultValue = {
  direction: 'ltr',
  language: 'en',
  isRTL: false,
  isLTR: true,
  toggleDirection: () => console.warn("LanguageProvider not found"),
  changeDirection: () => console.warn("LanguageProvider not found"),
  changeLanguage: () => console.warn("LanguageProvider not found"),

  // ✅ The fix is here: We cast our simple function to the TFunction type.
  t: /** @type {TFunction} */ ((key) => String(key)),
};

/**
 * The context for the language.
 * It now takes a default value instead of null.
 * @type {import('react').Context<LanguageContextType>}
 */
export const LanguageContext = createContext(defaultValue);