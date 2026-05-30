"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the device is mobile/tablet
    const checkDevice = () => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch || window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    // Listen for mousemove on window
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Dynamic hover scaling on links and interactive elements
    const handleMouseOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOverInteractive);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOverInteractive);
    };
  }, [visible, isMobile]);

  if (isMobile || !visible) return null;

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
      }}
      className="fixed pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference transition-transform duration-200 ease-out"
      className-disabled="custom-cursor-glow"
    >
      <div 
        className="w-7 h-7 rounded-full bg-white"
        style={{
          boxShadow: "0 0 100px 15px #ffffff",
        }}
      />
    </div>
  );
}
