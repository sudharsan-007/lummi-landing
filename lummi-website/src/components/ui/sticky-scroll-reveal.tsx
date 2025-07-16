import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyScrollRevealProps {
  content: Array<{
    title: string;
    description: string;
    content?: React.ReactNode;
    badge?: string;
    timeframe?: string;
    subtitle?: string;
  }>;
  contentClassName?: string;
}

export const StickyScrollReveal = ({
  content,
  contentClassName,
}: StickyScrollRevealProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          return distance < Math.abs(latest - cardsBreakpoints[acc])
            ? index
            : acc;
        },
        0
      );
      setActiveCard(closestBreakpointIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, cardLength]);

  const backgroundColors = [
    "bg-gradient-to-br from-yellow-50 to-orange-50",
    "bg-gradient-to-br from-blue-50 to-indigo-50",
    "bg-gradient-to-br from-purple-50 to-pink-50",
    "bg-gradient-to-br from-green-50 to-teal-50",
  ];

  const linearGradients = [
    "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
    "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
    "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
    "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        background: backgroundGradient,
      }}
      className="h-[30rem] overflow-hidden relative p-10 rounded-xl"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={`hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden ${contentClassName}`}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};