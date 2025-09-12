// @ts-nocheck

export const getNavItems = (t) => [
    { id: 1, title: t("navbar.services"), to: "/services", isScrollLink: false, hasSubmenu: true },
    { id: 2, title: t("navbar.articles"), to: "#", isScrollLink: false, hasSubmenu: false },
    { id: 3, title: t("navbar.projects"), to: "/projects", isScrollLink: false, hasSubmenu: false },
    { id: 4, title: t("navbar.prices"), to: "#plans", isScrollLink: true, hasSubmenu: false },
    { id: 5, title: t("navbar.contactUs"), to: "/contact", isScrollLink: false, hasSubmenu: false },
];