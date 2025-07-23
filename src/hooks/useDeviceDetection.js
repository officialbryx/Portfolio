import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check screen width
      const screenWidth = window.innerWidth;

      // Check user agent for mobile devices
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        "android",
        "webos",
        "iphone",
        "ipad",
        "ipod",
        "blackberry",
        "windows phone",
        "mobile",
      ];

      const isMobileUserAgent = mobileKeywords.some((keyword) =>
        userAgent.includes(keyword)
      );

      // Check for touch support
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      // Consider it mobile if:
      // 1. Screen width is less than 1024px (typical tablet/mobile breakpoint)
      // 2. OR user agent indicates mobile device
      // 3. OR it's a touch device with small screen (< 1200px)
      const isMobileDevice =
        screenWidth < 1024 ||
        isMobileUserAgent ||
        (isTouchDevice && screenWidth < 1200);

      setIsMobile(isMobileDevice);
    };

    // Check on initial load
    checkDevice();

    // Check on window resize
    window.addEventListener("resize", checkDevice);

    // Check on orientation change (mobile devices)
    window.addEventListener("orientationchange", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("orientationchange", checkDevice);
    };
  }, []);

  return { isMobile };
};

export default useDeviceDetection;
