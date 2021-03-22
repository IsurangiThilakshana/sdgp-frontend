import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// The useLocation hook returns the location object that represents the current URL

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}