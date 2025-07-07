import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BsBriefcase, BsInfoCircle } from "react-icons/bs";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Landing from "./pages/Landing";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  // Only show navigation and header on info and work pages
  const showNav =
    location.pathname === "/info" || location.pathname === "/work";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-1 h-32 bg-white animate-pulse"></div>
      </div>

      {/* Navigation */}
      {showNav && (
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-40 py-6">
          <div className="flex bg-zinc-900/90 backdrop-blur-md px-1 py-1 rounded-full border border-zinc-800/50 shadow-2xl">
            <Link
              to="/work"
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full relative ${
                location.pathname === "/work"
                  ? "text-white bg-zinc-800 shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {location.pathname === "/work" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full shadow-lg shadow-white/50"></div>
              )}
              <BsBriefcase className="text-xl" />
            </Link>
            <Link
              to="/info"
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full relative ${
                location.pathname === "/info"
                  ? "text-white bg-zinc-800 shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {location.pathname === "/info" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full shadow-lg shadow-white/50"></div>
              )}
              <BsInfoCircle className="text-xl" />
            </Link>
          </div>
        </nav>
      )}

      {/* Header */}
      {showNav && (
        <header className="fixed top-0 left-0 z-40 p-8">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">BT</span>
            </div>
            <div>
              <h1 className="text-lg font-large">Bryan Tiamzon</h1>
              <p className="text-gray-400 text-s font-medium">Data Science</p>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`relative ${showNav ? "pt-32" : ""}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/info" element={<Info />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
