import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/elements/ScrollToTop";
import { Loading } from "../components/elements/Loading";
import { Loading3 } from "../components/elements/Loading3";
import NotFoundPage from "@pages/error/404";

const Home = React.lazy(() => import("../pages/Index"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Project = React.lazy(() => import("../pages/SingleProject"));
const Services = React.lazy(() => import("../pages/Services"));
const SingleService = React.lazy(() => import("../pages/SingleService"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));

function AppRouter() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="*" element={<NotFoundPage />} />

                <Route path="/" element={<React.Suspense fallback={(<Loading />)}>
                    <Home />
                </React.Suspense>
                } />

                <Route path="/projects" element={<React.Suspense fallback={(<Loading3 />)}>
                    <Projects />
                </React.Suspense>
                } />

                <Route path="/projects/:slug" element={<React.Suspense fallback={(<Loading3 />)}>
                    <Project />
                </React.Suspense>
                } />

                <Route path="/services" element={<React.Suspense fallback={(<Loading3 />)}>
                    <Services />
                </React.Suspense>
                } />

                <Route
                    path="/services/:slug"
                    element={
                        <React.Suspense fallback={<Loading3 />}>
                            <SingleService />
                        </React.Suspense>
                    }
                />

                <Route path="/about-us" element={<React.Suspense fallback={(<Loading3 />)}>
                    <About />
                </React.Suspense>
                } />

                <Route path="/contact" element={<React.Suspense fallback={(<Loading3 />)}>
                    <Contact />
                </React.Suspense>
                } />

            </Routes>
        </Router >
    )
}

export default AppRouter
