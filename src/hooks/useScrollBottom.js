import { useState, useEffect } from "react";
import { debounce } from "../lib/Debounce";

export const useScrollBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  // debounce
  useEffect(() => {
    const scrollBottom = debounce(() => {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight > scrollHeight - 100) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    });

    window.addEventListener("scroll", scrollBottom);
    return () => {
      window.removeEventListener("scroll", scrollBottom);
    };
  }, []); // eslint-disable-line

  return { isBottom };
};
