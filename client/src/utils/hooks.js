import { useState } from "react";

export const useLoadImage = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return { loaded, handleLoad };
};

export const fadeInClass = (loaded, duration) => `transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`;