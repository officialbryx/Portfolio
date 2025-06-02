import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Work from "./pages/Work";
import Info from "./pages/Info";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

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
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 py-6">
        <div className="flex space-x-8 bg-gray-900/50 backdrop-blur-sm px-8 py-3 rounded-full border border-gray-800">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Info
          </Link>
          <Link
            to="/work"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Work
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="fixed top-0 left-0 z-40 p-8">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">BT</span>
          </div>
          <div>
            <h1 className="text-lg font-light">Bryan Tiamzon</h1>
            <p className="text-gray-400 text-xs">Data Science</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-32">
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<Info />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Bryan Tiamzon</p>
          <p>Crafted with intention</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
