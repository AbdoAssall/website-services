import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loading } from "./components/elements/Loading";
const Home = React.lazy(() => import("./pages/Index"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={(<Loading />)}>
            <Home />
          </React.Suspense>
        } />
      </Routes>
    </Router >
  )
}

export default App
