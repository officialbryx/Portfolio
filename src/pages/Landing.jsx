import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [key, setKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showUI, setShowUI] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const resetInterval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 7500);

    // Show UI elements after 2 seconds
    const uiTimer = setTimeout(() => {
      setShowUI(true);
    }, 2000);

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      clearInterval(resetInterval);
      clearTimeout(uiTimer);
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [navigate]);

  const handleGetStarted = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate("/info");
    }, 800); // Delay to allow transition animation
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsTransitioning(true);
      setTimeout(() => {
        navigate("/info");
      }, 800); // Delay to allow transition animation
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center relative transition-all duration-700 ease-out ${
        isTransitioning ? "scale-110 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{
        background: `linear-gradient(
          to bottom,
          rgb(255, 0, 0) 0%,
          rgb(255, 0, 84) 20%,
          rgb(255, 0, 118) 40%,
          rgb(201, 0, 163) 60%,
          rgb(126, 0, 147) 80%,
          rgb(71, 0, 147) 100%
        )`,
      }}
    >
      {/* Overlay for transition effect */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-700 ease-out ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* Apple-style menu bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-8 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 text-white text-sm font-medium z-10 transition-all duration-700 ease-out select-none ${
          showUI ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center space-x-4">
          {/* Empty left side */}
        </div>
        <div className="flex items-center space-x-4 text-white/80">
          {/* Wifi icon */}
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.076 13.308-5.076 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.415 5 5 0 017.07 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>

          {/* Battery percentage and icon close together */}
          <div className="flex items-center space-x-1">
            <span>22%</span>
            <svg className="w-6 h-4" fill="currentColor" viewBox="0 0 24 16">
              <rect
                x="1"
                y="4"
                width="18"
                height="8"
                rx="2"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <rect
                x="2"
                y="5"
                width="4.4"
                height="6"
                rx="1"
                fill="currentColor"
              />
              <rect
                x="20"
                y="6"
                width="2"
                height="4"
                rx="1"
                fill="currentColor"
              />
            </svg>
          </div>

          <span>
            {new Date()
              .toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })
              .replace(",", "")}
          </span>
          <span>
            {new Date().toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
      <div
        key={key}
        className="flex items-center justify-center w-full max-w-[800px] mx-8"
      >
        <svg
          className="w-full h-full"
          viewBox="-300 -400 2000 1000"
          style={{
            strokeDasharray: "5800",
            strokeDashoffset: "5800",
            animation: "hello-draw 8s ease forwards",
          }}
        >
          <path
            d="M-293.58-104.62S-103.61-205.49-60-366.25c9.13-32.45,9-58.31,0-74-10.72-18.82-49.69-33.21-75.55,31.94-27.82,70.11-52.22,377.24-44.11,322.48s34-176.24,99.89-183.19c37.66-4,49.55,23.58,52.83,47.92a117.06,117.06,0,0,1-3,45.32c-7.17,27.28-20.47,97.67,33.51,96.86,66.93-1,131.91-53.89,159.55-84.49,31.1-36.17,31.1-70.64,19.27-90.25-16.74-29.92-69.47-33-92.79,16.73C62.78-179.86,98.7-93.8,159-81.63S302.7-99.55,393.3-269.92c29.86-58.16,52.85-114.71,46.14-150.08-7.44-39.21-59.74-54.5-92.87-8.7-47,65-61.78,266.62-34.74,308.53S416.62-58,481.52-130.31s133.2-188.56,146.54-256.23c14-71.15-56.94-94.64-88.4-47.32C500.53-375,467.58-229.49,503.3-127a73.73,73.73,0,0,0,23.43,33.67c25.49,20.23,55.1,16,77.46,6.32a111.25,111.25,0,0,0,30.44-19.87c37.73-34.23,29-36.71,64.58-127.53C724-284.3,785-298.63,821-259.13a71,71,0,0,1,13.69,22.56c17.68,46,6.81,80-6.81,107.89-12,24.62-34.56,42.72-61.45,47.91-23.06,4.45-48.37-.35-66.48-24.27a78.88,78.88,0,0,1-12.66-25.8c-14.75-51,4.14-88.76,11-101.41,6.18-11.39,37.26-69.61,103.42-42.24,55.71,23.05,100.66-23.31,100.66-23.31"
            transform="translate(400.00 300.00)"
            className="fill-none stroke-white stroke-[48px] stroke-round"
          />
        </svg>
      </div>

      {/* Get Started button positioned at bottom */}
      <div
        className={`absolute bottom-8 flex flex-col items-center space-y-3 transition-all duration-700 ease-out ${
          showUI ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Profile image */}
        <div
          onClick={handleGetStarted}
          className="w-15 h-15 rounded-full overflow-hidden cursor-pointer"
        >
          <img
            src="/tiamzondp.JPG"
            alt="Bryan Tiamzon"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 5%" }}
          />
        </div>

        <div onClick={handleGetStarted} className="cursor-pointer">
          <span className="text-white font-bold text-lg">Bryan Tiamzon</span>
        </div>
        <span className="text-white/50 text-xs font-medium">
=======
        <span className="text-white/90 text-s font-light select-none">
>>>>>>> 935418cde44e8650981e372dd99b24e682190672
          Press ENTER to Get Started
        </span>
      </div>

      <style jsx>{`
        @keyframes hello-draw {
          0% {
            stroke-dashoffset: 5800;
          }
          25% {
            stroke-dashoffset: 5800;
          }
          70% {
            stroke-dashoffset: 0;
          }
          85% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Landing;
