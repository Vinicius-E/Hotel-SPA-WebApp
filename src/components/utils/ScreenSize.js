import { useState, useEffect } from "react";

function ScreenSize() {
  const [screenSize, setScreenSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleResize = () => {
    setScreenSize([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

export default ScreenSize;