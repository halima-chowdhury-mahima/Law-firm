"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const heroWords = ["Protecting", "Defending"];

type CounterProps = {
  start: number;
  end: number;
  suffix?: string;
  delay?: number;
  duration?: number;
};

function AnimatedCounter({
  start,
  end,
  suffix = "",
  delay = 0,
  duration = 1100,
}: CounterProps) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let frameId = 0;
    let startTime: number | null = null;

    const timer = window.setTimeout(() => {
      const animate = (time: number) => {
        if (startTime === null) {
          startTime = time;
        }

        const progress = Math.min(
          (time - startTime) / duration,
          1
        );

        const eased = 1 - Math.pow(1 - progress, 3);

        const current =
          start + (end - start) * eased;

        setValue(Math.round(current));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      frameId = window.requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frameId);
    };
  }, [start, end, delay, duration]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

const stats = [
  {
    start: 2020,
    end: 2026,
    suffix: "",
    label: "Chamber Established",
  },
  {
    start: 0,
    end: 20,
    suffix: "+",
    label: "Years of Legal Experience",
  },
  {
    start: 0,
    end: 500,
    suffix: "+",
    label: "Cases Handled",
  },
  {
    start: 0,
    end: 3,
    suffix: "",
    label: "Global Awards",
  },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const gavelRef = useRef<HTMLDivElement>(null);

  // Protecting <-> Defending
  useEffect(() => {
    let changeTimer: number | undefined;

    const interval = window.setInterval(() => {
      setChanging(true);

      changeTimer = window.setTimeout(() => {
        setWordIndex(
          (previous) =>
            (previous + 1) % heroWords.length
        );

        setChanging(false);
      }, 450);
    }, 3200);

    return () => {
      window.clearInterval(interval);

      if (changeTimer !== undefined) {
        window.clearTimeout(changeTimer);
      }
    };
  }, []);

  // Gavel mouse ONLY inside Hero
  useEffect(() => {
    const hero = heroRef.current;
    const cursor = cursorRef.current;
    const gavel = gavelRef.current;

    if (!hero || !cursor || !gavel) return;

    const pointer = window.matchMedia("(pointer: fine)");

    if (!pointer.matches) return;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let frameId = 0;

    const animateCursor = () => {
      currentX += (mouseX - currentX) * 0.32;
      currentY += (mouseY - currentY) * 0.32;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      frameId =
        window.requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.style.opacity = "1";
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    const handleMouseDown = () => {
      gavel.classList.remove("hero-gavel-strike");

      void gavel.offsetWidth;

      gavel.classList.add("hero-gavel-strike");
    };

    const handleMouseUp = () => {
      window.setTimeout(() => {
        gavel.classList.remove("hero-gavel-strike");
      }, 190);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);
    hero.addEventListener("mousedown", handleMouseDown);
    hero.addEventListener("mouseup", handleMouseUp);

    frameId =
      window.requestAnimationFrame(animateCursor);

    return () => {
      hero.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      hero.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      hero.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      hero.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      hero.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="law-hero relative min-h-[790px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/hero-law.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,27,50,0.98)_0%,rgba(8,27,50,0.93)_46%,rgba(8,27,50,0.72)_100%)]" />

      {/* Blue Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_45%,rgba(46,112,180,0.22),transparent_44%)]" />

      {/* Hero Only Gavel Cursor */}
      <div
        ref={cursorRef}
        className="hero-gavel-cursor pointer-events-none fixed left-0 top-0 z-[99999] hidden lg:block"
        aria-hidden="true"
      >
        <div
          ref={gavelRef}
          className="hero-gavel"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="heroHead"
                x1="15"
                y1="8"
                x2="34"
                y2="20"
              >
                <stop
                  offset="0"
                  stopColor="#efc568"
                />
                <stop
                  offset="0.35"
                  stopColor="#c48735"
                />
                <stop
                  offset="0.7"
                  stopColor="#81431f"
                />
                <stop
                  offset="1"
                  stopColor="#522516"
                />
              </linearGradient>

              <linearGradient
                id="heroHandle"
                x1="9"
                y1="37"
                x2="24"
                y2="18"
              >
                <stop
                  offset="0"
                  stopColor="#30110a"
                />
                <stop
                  offset="0.45"
                  stopColor="#6c2f1d"
                />
                <stop
                  offset="0.75"
                  stopColor="#93492a"
                />
                <stop
                  offset="1"
                  stopColor="#35130b"
                />
              </linearGradient>

              <filter
                id="heroShadow"
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

            <g filter="url(#heroShadow)">
              {/* Handle */}
              <path
                d="M20.5 19.5L9 36"
                stroke="url(#heroHandle)"
                strokeWidth="4.3"
                strokeLinecap="round"
              />

              {/* Handle highlight */}
              <path
                d="M19.8 21L10.8 34"
                stroke="#d98954"
                strokeOpacity="0.4"
                strokeWidth="0.7"
                strokeLinecap="round"
              />

              {/* Bottom */}
              <ellipse
                cx="8.7"
                cy="36.4"
                rx="3"
                ry="2.3"
                transform="rotate(-55 8.7 36.4)"
                fill="#38150d"
              />

              {/* Left */}
              <rect
                x="14"
                y="9"
                width="5"
                height="12"
                rx="1.8"
                fill="#572021"
              />

              {/* Main head */}
              <rect
                x="18"
                y="10"
                width="16"
                height="10"
                rx="2.2"
                fill="url(#heroHead)"
              />

              {/* Right */}
              <rect
                x="33"
                y="9"
                width="5"
                height="12"
                rx="1.8"
                fill="#572021"
              />

              {/* Highlight */}
              <path
                d="M21 11.6H30"
                stroke="#ffe8ae"
                strokeOpacity="0.55"
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

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto grid min-h-[790px] max-w-[1650px] items-center gap-16 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        {/* Left Side */}
        <div>
          <p className="hero-intro mb-7 text-xs font-bold uppercase tracking-[0.32em] text-[#d2aa4f]">
            Chowdhury Law Chamber
          </p>

          <h1 className="font-serif text-[63px] leading-[0.89] text-[#f7f2e8] sm:text-[78px] md:text-[92px] xl:text-[108px]">
            {/* Protecting / Defending */}
            <span className="block h-[0.97em] overflow-hidden">
              <span
                className={`changing-word block ${
                  changing
                    ? "word-leave"
                    : "word-enter"
                }`}
              >
                {heroWords[wordIndex]}
              </span>
            </span>

            <span className="hero-static-line hero-line-1 block">
              your
            </span>

            <span className="hero-static-line hero-line-2 block">
              Tomorrow,
            </span>

            <span className="hero-static-line hero-line-3 block italic text-[#d2aa4f]">
              Today..
            </span>
          </h1>

          <div className="hero-description">
            <p className="mt-10 max-w-[590px] text-[17px] leading-8 text-white/60">
              Professional legal services for
              individuals, businesses and
              organisations with a commitment to
              strategy, integrity and trusted legal
              representation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#expertise"
                className="flex items-center gap-3 bg-[#d2aa4f] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#081b32] transition duration-300 hover:bg-[#e6bd64]"
              >
                Our Expertise
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#contact"
                className="border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[#d2aa4f] hover:text-[#d2aa4f]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:self-end lg:pb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`stat-reveal stat-${
                index + 1
              } border-l-2 border-[#d2aa4f] pl-6`}
            >
              <p className="font-serif text-5xl leading-none text-[#f7f2e8] md:text-7xl">
                <AnimatedCounter
                  start={stat.start}
                  end={stat.end}
                  suffix={stat.suffix}
                  delay={750 + index * 350}
                  duration={1100}
                />
              </p>

              <p className="mt-4 max-w-[200px] text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 md:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}