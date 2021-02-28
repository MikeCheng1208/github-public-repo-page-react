import { useState, useEffect } from "react";
import { throttle } from "../lib/Throttle";

export const useScrollBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  const scrollBottom = throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight > scrollHeight - 100) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", scrollBottom);
    return () => {
      window.removeEventListener("scroll", scrollBottom);
    };
  }, []);

  return { isBottom };
};
