import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BsBriefcase, BsInfoCircle, BsEnvelope } from "react-icons/bs";
import Work from "./pages/Work";
import Info from "./pages/Info";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import MobileLockScreen from "./components/MobileLockScreen";
import useDeviceDetection from "./hooks/useDeviceDetection";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  const { isMobile } = useDeviceDetection();

  // If mobile device detected, show lock screen
  if (isMobile) {
    return <MobileLockScreen />;
  }

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Global protection against copying, dragging, and context menu
    const handleContextMenu = (e) => e.preventDefault();
    const handleDragStart = (e) => e.preventDefault();
    const handleSelectStart = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      // Prevent common copy shortcuts
      if (e.ctrlKey && (e.key === "a" || e.key === "c" || e.key === "s")) {
        e.preventDefault();
      }
      // Prevent F12 (Developer Tools)
      if (e.key === "F12") {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }
      // Prevent Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Only show navigation and header on info, work, and contact pages
  const showNav =
    location.pathname === "/info" ||
    location.pathname === "/work" ||
    location.pathname === "/contact";

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] overflow-x-hidden relative">
      {/* Navigation */}
      {showNav && (
        <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-40 py-6">
          <div className="flex bg-zinc-100/90 backdrop-blur-md px-1 py-1 rounded-full border border-zinc-200/50 shadow-2xl">
            <Link
              to="/info"
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full relative ${
                location.pathname === "/info"
                  ? "text-white bg-zinc-800 shadow-lg"
                  : "text-zinc-600 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {location.pathname === "/info" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full shadow-lg shadow-white/50"></div>
              )}
              <BsInfoCircle className="text-xl" />
            </Link>
            <Link
              to="/work"
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full relative ${
                location.pathname === "/work"
                  ? "text-white bg-zinc-800 shadow-lg"
                  : "text-zinc-600 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {location.pathname === "/work" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full shadow-lg shadow-white/50"></div>
              )}
              <BsBriefcase className="text-xl" />
            </Link>
            <Link
              to="/contact"
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full relative ${
                location.pathname === "/contact"
                  ? "text-white bg-zinc-800 shadow-lg"
                  : "text-zinc-600 hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {location.pathname === "/contact" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full shadow-lg shadow-white/50"></div>
              )}
              <BsEnvelope className="text-xl" />
            </Link>
          </div>
        </nav>
      )}
      {/* Main Content */}
      <main className={`relative ${showNav ? "" : ""}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/info" element={<Info />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
