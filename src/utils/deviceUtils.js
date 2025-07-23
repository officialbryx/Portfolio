// Utility functions for device detection and mobile prevention

export const isMobileDevice = () => {
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
    "tablet",
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
  return (
    screenWidth < 1024 ||
    isMobileUserAgent ||
    (isTouchDevice && screenWidth < 1200)
  );
};

export const preventMobileAccess = () => {
  // Additional mobile prevention measures
  if (isMobileDevice()) {
    // Disable zoom
    document.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    document.addEventListener(
      "touchend",
      (e) => {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          e.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );

    let lastTouchEnd = 0;

    // Disable double-tap zoom
    document.addEventListener("touchstart", (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    });

    // Disable pinch zoom
    document.addEventListener("gesturestart", (e) => {
      e.preventDefault();
    });
  }
};

export const getDeviceType = () => {
  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  if (
    userAgent.includes("ipad") ||
    (userAgent.includes("macintosh") && "ontouchend" in document)
  ) {
    return "tablet";
  }

  if (
    userAgent.includes("mobile") ||
    userAgent.includes("android") ||
    userAgent.includes("iphone")
  ) {
    return "mobile";
  }

  if (width < 768) {
    return "mobile";
  } else if (width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};
