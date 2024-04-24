'use client'
import React, { useEffect, useRef, useState } from 'react';

interface CursorColors {
  [key: string]: string;
}

const CURSOR_COLORS: CursorColors = {
  h1: "green-400",
  button: "orange-500",
  default: "blue-500"
};

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorColor, setCursorColor] = useState<string>("green-700");
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    const moveCursor = (x: number, y: number) => {
      if (cursorRef.current && dotRef.current) {
        const hideCursor = x <= 0 || y <= 0 || x >= window.innerWidth || y >= window.innerHeight;
        const displayStyle = hideCursor ? 'none' : 'block';

        // Apply the display style only if the screen is medium or larger
        cursorRef.current.style.display = displayStyle;
        dotRef.current.style.display = displayStyle;

        cursorRef.current.style.transform = `translate(${x - cursorRef.current.clientWidth / 2}px, ${y - cursorRef.current.clientHeight / 2}px)`;
        dotRef.current.style.transform = `translate(${x - dotRef.current.clientWidth / 2}px, ${y - dotRef.current.clientHeight / 2}px)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => moveCursor(e.clientX, e.clientY));
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 300);
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className='lg:block hidden'>
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-50 ease-linear duration-50 rounded-full w-1 h-1 bg-${cursorColor} opacity-40 lg:block md:block hidden`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorRef}
        className={`p-0 fixed pointer-events-none ease-linear duration-200 rounded-full w-12 h-12 border-2 bg-black opacity-5 border-${cursorColor} lg:block md:block hidden`}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div
          className={`w-20 h-20 ${clicked ? "scale-100 opacity-10" : "scale-0 opacity-0"} rounded-full bg-${cursorColor} ease-out transition-all duration-500 -z-10 lg:block md:block hidden`}
        />
      </div>
    </div>
  );
};

export default Cursor;
