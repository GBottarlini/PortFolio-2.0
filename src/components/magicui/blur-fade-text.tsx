"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, Variants } from "motion/react";
import { useMemo } from "react";

interface BlurFadeTextProps {
  as?: "div" | "h1" | "p";
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  as = "div",
  text,
  className,
  variant,
  duration = 0.4,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionElement = as === "h1" ? motion.h1 : as === "p" ? motion.p : motion.div;
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <MotionElement className={cn("flex", className)}>
        {characters.map((char, i) => {
          const charVariants: Variants = {
            hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
            visible: { y: 0, opacity: 1, filter: "blur(0px)" },
          };
          return (
            <motion.span
              key={i}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              variants={charVariants}
              transition={{
                duration: shouldReduceMotion ? 0 : duration,
                delay: shouldReduceMotion ? 0 : delay + i * characterDelay,
                ease: "easeOut",
              }}
              className="inline-block"
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          );
        })}
      </MotionElement>
    );
  }

  return (
    <MotionElement
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      variants={combinedVariants}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={cn("flex", className)}
    >
      <span
        className="inline-block"
      >
        {text}
      </span>
    </MotionElement>
  );
};

export default BlurFadeText;
