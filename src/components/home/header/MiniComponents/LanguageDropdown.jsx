import { useLanguage } from "../../../../contexts/LanguageContext";

export const LanguageDropdown = () => {
  const { direction, changeDirection, t } = useLanguage();

  return (
    <div className="dropdown relative">
      <div
        tabIndex={0}
        role="button"
        className="btn bg-primary-one border-primary-one m-1 flex items-center gap-2"
      >
        {/* Language flag */}
        <img
          src={`/assets/images/flags/${direction === "rtl" ? "ar" : "en"}.png`}
          alt={direction === "rtl" ? "Arabic" : "English"}
          className="w-5 h-5 rounded-full object-cover"
        />
        {/* Language code */}
        <span>{direction === "rtl" ? "AR" : "EN"}</span>
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-white rounded-box z-10 w-32 p-2 shadow-2xl absolute left-0 right-0 top-17 lg:top-19"
      >
        <li className="p-2 hover:bg-gray-100 active:bg-gray-100 rounded-md cursor-pointer flex items-center gap-2" onClick={() => changeDirection("rtl")}>
          <img src="/assets/images/flags/ar.png" alt="Arabic" className="w-5 h-5 rounded-full object-cover" />
          <span>{t("language.arabic")}</span>
        </li>
        <li className="p-2 hover:bg-gray-100 active:bg-gray-100 rounded-md cursor-pointer flex items-center gap-2" onClick={() => changeDirection("ltr")}>
          <img src="/assets/images/flags/en.png" alt="English" className="w-5 h-5 rounded-full object-cover" />
          <span>{t("language.english")}</span>
        </li>
      </ul>
    </div>
  );
};