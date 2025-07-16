"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  username: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  { 
    id: 1, 
    quote: "Luumi Media transformed our entire marketing approach. Their message-led strategy increased our conversion rates by 300% in just 4 months.", 
    name: "Sarah Chen", 
    username: "CEO, TechFlow Solutions", 
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b67a5e8c?fm=jpg&q=80&w=400&h=400&fit=crop&crop=face" 
  },
  { 
    id: 2, 
    quote: "The team at Luumi doesn't just run campaigns - they build systems that scale. Our revenue has tripled since working with them.", 
    name: "Marcus Rodriguez", 
    username: "Founder, ScaleUp Ventures", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=80&w=400&h=400&fit=crop&crop=face" 
  },
  { 
    id: 3, 
    quote: "From scattered marketing efforts to a cohesive growth machine. Luumi Media's strategic approach delivered results we never thought possible.", 
    name: "Emma Thompson", 
    username: "CMO, GrowthLabs", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=80&w=400&h=400&fit=crop&crop=face" 
  },
  { 
    id: 4, 
    quote: "Their fractional CMO service is game-changing. We get C-level strategy without the C-level price tag. ROI speaks for itself.", 
    name: "David Park", 
    username: "CEO, InnovateTech", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=80&w=400&h=400&fit=crop&crop=face" 
  },
  { 
    id: 5, 
    quote: "Luumi Media doesn't just understand marketing - they understand business. Their growth systems approach has revolutionized our entire company.", 
    name: "Jennifer Kim", 
    username: "Founder, NextGen Solutions", 
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?fm=jpg&q=80&w=400&h=400&fit=crop&crop=face" 
  },
];

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      
      const oldVisibleCount = getVisibleCount(windowWidth);
      const newVisibleCount = getVisibleCount(newWidth);
      
      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = testimonials.length - newVisibleCount;
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth));
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth);
        const maxIndex = testimonials.length - visibleCount;

        if (currentIndex >= maxIndex) {
          setDirection(-1);
          setCurrentIndex((prev) => prev - 1);
        } else if (currentIndex <= 0) {
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex((prev) => prev + direction);
        }
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, windowWidth, direction]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goNext = () => {
    if (canGoNext) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      pauseAutoPlay();
    }
  };

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      pauseAutoPlay();
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDragEnd = (event: any, info: any) => {
    const { offset } = info;
    const swipeThreshold = 30;

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext();
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  return (
    <div className="px-4 py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative" ref={containerRef}>
          <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-8 sm:mb-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`p-3 rounded-full ${
                canGoPrev 
                  ? 'bg-white shadow-lg hover:bg-gray-50 text-blue-600 hover:text-blue-700' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={!canGoNext}
              className={`p-3 rounded-full ${
                canGoNext 
                  ? 'bg-white shadow-lg hover:bg-gray-50 text-blue-600 hover:text-blue-700' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              } transition-all duration-300`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          <div className="overflow-hidden relative px-2 sm:px-0">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
              transition={{ 
                type: 'spring', 
                stiffness: 70, 
                damping: 20 
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 w-full ${
                    visibleCount === 3 ? 'md:w-1/3' : 
                    visibleCount === 2 ? 'md:w-1/2' : 'w-full'
                  } p-3`}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98, cursor: 'grabbing' }}
                  style={{ cursor: 'grab' }}
                >
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl p-6 h-full bg-white border border-gray-100 shadow-lg"
                    whileHover={{
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div className="absolute -top-4 -left-4 opacity-10">
                      <Quote size={windowWidth < 640 ? 40 : 60} className="text-blue-600" />
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-sm sm:text-base text-gray-700 font-medium mb-6 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D';
                              }}
                            />
                            <motion.div 
                              className="absolute inset-0 rounded-full bg-blue-500/20"
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.3, 0] 
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1
                              }}
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-semibold text-sm sm:text-base text-gray-900">{testimonial.name}</h4>
                            <p className="text-blue-600 text-xs sm:text-sm font-medium">{testimonial.username}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
              
          <div className="flex justify-center mt-8">
            {Array.from({ length: testimonials.length - visibleCount + 1 }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative mx-1 focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300'
                  }`}
                  animate={{ 
                    scale: index === currentIndex ? [1, 1.2, 1] : 1
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: index === currentIndex ? Infinity : 0,
                    repeatDelay: 1
                  }}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-600/30"
                    animate={{ 
                      scale: [1, 1.8],
                      opacity: [1, 0] 
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;