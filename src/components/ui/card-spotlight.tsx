"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../lib/utils";
import { useTheme as useNextTheme } from 'next-themes';

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { theme } = useNextTheme();
  const isDark = theme === 'dark';
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  // Determine background and border colors based on theme
  const defaultColor = isDark ? "#1e1e1e" : "#262626";
  const cardColor = color || defaultColor;
  const borderColor = isDark ? "border-neutral-800" : "border-neutral-200";
  
  return (
    <div
      className={cn(
        `group/spotlight p-10 rounded-md relative border ${borderColor} bg-card`,
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: cardColor,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={isDark ? [
              [59, 130, 246],   // Blue
              [139, 92, 246]    // Purple
            ] : [
              [79, 150, 255],   // Lighter blue
              [159, 112, 255]   // Lighter purple
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
}; 