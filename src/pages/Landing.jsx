import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const resetInterval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 20000);

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        navigate("/info");
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      clearInterval(resetInterval);
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [navigate]);

  const handleGetStarted = () => {
    navigate("/info");
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
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
            animation: "hello-draw 7s ease forwards",
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
      <div className="absolute bottom-8 flex flex-col items-center space-y-2">
        <div
          onClick={handleGetStarted}
          className="group cursor-pointer w-10 h-10 rounded-full bg-gray-500/5 flex items-center justify-center transition-all duration-300 hover:bg-gray-500/10"
        >
          <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              />
            </svg>
          </div>
        </div>
        <span className="text-white/90 text-s font-light">Get Started</span>
      </div>

      <style jsx>{`
        @keyframes hello-draw {
          0% {
            stroke-dashoffset: 5800;
          }
          40% {
            stroke-dashoffset: 5800;
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
