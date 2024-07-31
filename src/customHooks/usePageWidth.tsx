import { useState, useEffect } from "react";

const usePageWidth = () => {
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function updateSize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return pageWidth;
};

export default usePageWidth;
