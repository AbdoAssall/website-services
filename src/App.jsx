import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/elements/ScrollToTop";
import { Loading } from "./components/elements/Loading";
import { Loading3 } from "./components/elements/Loading3";
const Home = React.lazy(() => import("./pages/Index"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Project = React.lazy(() => import("./pages/SingleProject"));
const Services = React.lazy(() => import("./pages/Services"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
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

      </Routes>
    </Router >
  )
}

export default App
