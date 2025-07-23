import React from "react";

const MobileLockScreen = () => {
  return (
    <div className="mobile-lock-screen min-h-screen w-full flex flex-col items-center justify-center text-white px-6 select-none">
      {/* Lock Icon */}
      <div className="mb-8 relative">
        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
          <svg
            className="w-12 h-12 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        {/* Animated pulse effect */}
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-white/5 animate-ping"></div>
      </div>

      {/* Main Message */}
      <div className="text-center max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Desktop Experience Only
        </h1>

        <div className="space-y-4">
          <p className="text-lg text-white/80 leading-relaxed">
            This portfolio is optimized for desktop and laptop viewing only.
          </p>

          <p className="text-white/60 text-base">
            Please visit this site on a desktop or laptop computer to explore my
            work and experience the full interactive features.
          </p>
        </div>

        {/* Device Icon */}
        <div className="flex justify-center space-x-6 mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-8 bg-white/20 rounded-sm flex items-center justify-center">
              <div className="w-8 h-5 bg-white/40 rounded-xs"></div>
            </div>
            <span className="text-xs text-white/60">Desktop</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-10 h-6 bg-white/20 rounded-sm flex items-center justify-center">
              <div className="w-6 h-4 bg-white/40 rounded-xs"></div>
            </div>
            <span className="text-xs text-white/60">Laptop</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-white/50">
            Questions? Contact me at{" "}
            <a
              href="mailto:brytiamzon@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              bryxph@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default MobileLockScreen;
