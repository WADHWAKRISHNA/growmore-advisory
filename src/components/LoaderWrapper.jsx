"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("loaderShown");

    if (alreadyVisited) {
      setLoading(false);
      return;
    }

    sessionStorage.setItem("loaderShown", "true");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return children;
}