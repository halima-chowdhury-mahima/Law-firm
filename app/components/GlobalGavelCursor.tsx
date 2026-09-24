"use client";

import { useEffect, useRef } from "react";

export default function GlobalGavelCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const gavelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const gavel = gavelRef.current;

    if (!cursor || !gavel) return;

    const finePointer = window.matchMedia("(pointer: fine)");

    if (!finePointer.matches) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let animationFrame = 0;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.3;
      currentY += (mouseY - currentY) * 0.3;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.opacity = "1";
    };

    const handleMouseDown = () => {
      gavel.classList.remove("gavel-strike");

      void gavel.offsetWidth;

      gavel.classList.add("gavel-strike");
    };

    const handleMouseUp = () => {
      window.setTimeout(() => {
        gavel.classList.remove("gavel-strike");
      }, 200);
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="simple-gavel-cursor"
      aria-hidden="true"
    >
      <div ref={gavelRef} className="simple-gavel">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Golden wood head */}
            <linearGradient
              id="gavelHead"
              x1="15"
              y1="8"
              x2="34"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#f2c45b" />

              <stop offset="0.25" stopColor="#c8892e" />

              <stop offset="0.55" stopColor="#8f4d1f" />

              <stop offset="0.78" stopColor="#d9a540" />

              <stop offset="1" stopColor="#5d2c16" />
            </linearGradient>

            {/* Dark wooden handle */}
            <linearGradient
              id="gavelHandle"
              x1="10"
              y1="37"
              x2="25"
              y2="17"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#35130c" />

              <stop offset="0.4" stopColor="#6d2f1d" />

              <stop offset="0.7" stopColor="#91452a" />

              <stop offset="1" stopColor="#35130c" />
            </linearGradient>

            {/* Golden band */}
            <linearGradient
              id="gavelBand"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0" stopColor="#ffe296" />

              <stop offset="0.5" stopColor="#d2aa4f" />

              <stop offset="1" stopColor="#8b651e" />
            </linearGradient>

            <filter
              id="gavelShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="1.5"
                dy="2.5"
                stdDeviation="1.4"
                floodColor="#000000"
                floodOpacity="0.45"
              />
            </filter>
          </defs>

          <g filter="url(#gavelShadow)">
            {/* Handle */}

            <path
              d="M20.5 19.5L9 36"
              stroke="url(#gavelHandle)"
              strokeWidth="4.3"
              strokeLinecap="round"
            />

            {/* Handle highlight */}

            <path
              d="M19.8 21L10.7 34"
              stroke="#d88f5a"
              strokeOpacity="0.35"
              strokeWidth="0.8"
              strokeLinecap="round"
            />

            {/* Handle end */}

            <ellipse
              cx="8.7"
              cy="36.4"
              rx="3"
              ry="2.3"
              transform="rotate(-55 8.7 36.4)"
              fill="#38150d"
            />

            {/* Head left side */}

            <rect
              x="14"
              y="9"
              width="5"
              height="12"
              rx="1.8"
              fill="#5c2022"
            />

            {/* Head main */}

            <rect
              x="18"
              y="10"
              width="16"
              height="10"
              rx="2.2"
              fill="url(#gavelHead)"
            />

            {/* Head right */}

            <rect
              x="33"
              y="9"
              width="5"
              height="12"
              rx="1.8"
              fill="#5c2022"
            />

            {/* Gold bands */}

            <rect
              x="18.5"
              y="10"
              width="1.7"
              height="10"
              rx="0.8"
              fill="url(#gavelBand)"
            />

            <rect
              x="32"
              y="10"
              width="1.7"
              height="10"
              rx="0.8"
              fill="url(#gavelBand)"
            />

            {/* Top shine */}

            <path
              d="M21 11.6H30"
              stroke="#ffe8ae"
              strokeOpacity="0.6"
              strokeWidth="0.8"
              strokeLinecap="round"
            />

            {/* Connector */}

            <circle
              cx="20.5"
              cy="19.5"
              r="2.3"
              fill="#622818"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}