"use client";

import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile-sized on initial load
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Run once on mount
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}
