import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loading } from "./components/elements/Loading";
import { Loading3 } from "./components/elements/Loading3";
const Home = React.lazy(() => import("./pages/Index"));
const Projects = React.lazy(() => import("./pages/Projects"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={(<Loading />)}>
            <Home />
          </React.Suspense>
        } />
        <Route path="/projects" element={
          <React.Suspense fallback={(<Loading3 />)}>
            <Projects />
          </React.Suspense>
        } />
      </Routes>
    </Router >
  )
}

export default App
