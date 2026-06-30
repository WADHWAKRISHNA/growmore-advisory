"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  end,
  duration = 2000,
  suffix = "",
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setStarted(true);

        }

      },

      {
        threshold: .5,
      }

    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, []);

  useEffect(() => {

    if (!started) return;

    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {

        setCount(end);

        clearInterval(timer);

      } else {

        setCount(Math.floor(start));

      }

    }, 16);

    return () => clearInterval(timer);

  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}