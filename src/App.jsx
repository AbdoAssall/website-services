import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
const Home = React.lazy(() => import("./pages/Index"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={(
            <div className="bg-gray-100 shadow-lg w-full h-screen flex items-center justify-center">
              <div className="bg-gray-100 shadow-lg w-10 h-10 text-center flex items-center">
                <span className="loading loading-spinner loading-xl text-success inline-block mx-auto"></span>
              </div>
            </div>)}>
            <Home />
          </React.Suspense>
        } />
      </Routes>
    </Router >
  )
}

export default App
