"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "SAR 80M+", "38", "1,000+", "SAR 100M+"
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.4,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If reduced motion, show full value immediately
    return shouldReduceMotion ? value : "0";
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) return;

    // Parse the value string:
    // e.g. "SAR 80M+" -> prefix: "SAR ", num: 80, suffix: "M+"
    // e.g. "1,000+" -> prefix: "", num: 1000, suffix: "+"
    // e.g. "38" -> prefix: "", num: 38, suffix: ""
    const match = value.match(/^(.*?)(\d[\d,]*)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || "";
    const rawNumStr = match[2].replace(/,/g, "");
    const targetNum = parseInt(rawNumStr, 10);
    const suffix = match[3] || "";
    const hasCommas = match[2].includes(",");

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = Math.floor(easedProgress * targetNum);

      const formattedVal = hasCommas
        ? currentVal.toLocaleString("en-US")
        : currentVal.toString();

      setDisplayValue(`${prefix}${formattedVal}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {displayValue}
    </span>
  );
};
