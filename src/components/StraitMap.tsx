"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";

export default function StraitMap({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const { t } = useLocale();
  const animated = !reduceMotion;

  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      role="img"
      aria-label={t("common.abstractMap")}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="routeStraitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#275e92" stopOpacity="0.28" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#9a3a3a" stopOpacity="0.2" />
        </linearGradient>
        <filter id="routeSoftBlur">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>
      <rect width="1440" height="900" fill="url(#routeStraitGradient)" />
      <path
        d="M149 164 C310 248 340 409 273 552 C225 657 255 760 365 832"
        fill="none"
        stroke="currentColor"
        className="text-ink-950/10 dark:text-white/10"
        strokeWidth="84"
        strokeLinecap="round"
        filter="url(#routeSoftBlur)"
      />
      <path
        d="M1049 206 C1124 270 1176 378 1162 492 C1148 611 1071 701 997 754"
        fill="none"
        stroke="currentColor"
        className="text-ink-950/10 dark:text-white/10"
        strokeWidth="58"
        strokeLinecap="round"
        filter="url(#routeSoftBlur)"
      />
      {[0, 1, 2, 3, 4].map((line) => (
        <path
          key={line}
          d={`M${430 + line * 44} ${170 + line * 44} C ${610 + line * 32} ${260 + line * 25}, ${720 - line * 12} ${
            520 - line * 14
          }, ${920 - line * 34} ${740 - line * 22}`}
          fill="none"
          stroke={line % 2 === 0 ? "#275e92" : "#9a3a3a"}
          strokeOpacity={0.18 + line * 0.04}
          strokeWidth={line === 2 ? 1.8 : 1.1}
          className={animated ? "map-line" : ""}
        />
      ))}
      <motion.ellipse
        cx="944"
        cy="466"
        rx="42"
        ry="112"
        fill="#f7f7f8"
        fillOpacity="0.24"
        stroke="#275e92"
        strokeOpacity="0.5"
        strokeWidth="2"
        animate={animated ? { opacity: [0.62, 0.9, 0.62] } : undefined}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="836" cy="578" r="8" fill="#9a3a3a" fillOpacity="0.42" />
      <circle cx="483" cy="446" r="10" fill="#275e92" fillOpacity="0.3" />
    </svg>
  );
}
