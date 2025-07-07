import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const fullText = "Bryan Tiamzon";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8 text-white glitch-text">
          {typedText}
          <span className="animate-blink">|</span>
        </h1>

        <div
          className={`transition-opacity duration-500 ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => navigate("/info")}
            className="px-8 py-3 text-lg font-medium text-black bg-white rounded-full 
                     hover:bg-gray-200 transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-white/20"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
