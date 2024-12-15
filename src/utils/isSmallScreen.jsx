import { useEffect, useState } from "react";

export const useIsSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", updateSize);
    updateSize(); // Initialize
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return isSmallScreen;
};
