import React, { useEffect, useRef, useState } from "react";
import { TestimonialCard, TestimonialAuthor } from "./testimonial-card";

interface TestimonialsScrollingProps {
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  speed?: number
  className?: string
}

export function TestimonialsScrolling({ 
  testimonials,
  speed = 50, // pixels per second
  className = ""
}: TestimonialsScrollingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number>();

  // Create extended array for seamless loop
  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const animate = () => {
      if (!isHovered && containerRef.current) {
        setTranslateX(prev => {
          const containerWidth = containerRef.current?.scrollWidth || 0;
          const viewportWidth = containerRef.current?.clientWidth || 0;
          const maxTranslate = -(containerWidth / 2); // Half because we duplicated items
          
          if (prev <= maxTranslate) {
            return 0; // Reset to start for seamless loop
          }
          return prev - (speed / 60); // 60fps
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, speed]);

  return (
    <section className={`bg-white py-8 sm:py-12 px-0 ${className}`}>
      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isHovered ? 'transform 0.3s ease' : 'none',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}

// Luumi Media testimonials
const luumiTestimonials = [
  {
    author: {
      name: "Sarah Chen",
      handle: "CEO, TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Luumi Media transformed our messaging from confused to compelling. We went from struggling to explain our value to having prospects say 'this is exactly what we need' within the first month."
  },
  {
    author: {
      name: "Marcus Rodriguez",
      handle: "Founder, GrowthLabs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, a marketing team that gets it. No fluff, no buzzwords - just clear strategy and execution that delivers real results. Our lead quality improved 3x in 60 days."
  },
  {
    author: {
      name: "Emily Thompson",
      handle: "CMO, ScaleUp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with Luumi Media feels like having a CMO extension of our team. They bring strategic thinking and fast execution - exactly what we needed to break through our growth plateau."
  },
  {
    author: {
      name: "David Kim",
      handle: "CEO, InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "The messaging framework they built became our north star. Every campaign, every page, every post now has clarity and purpose. Our conversion rates doubled almost immediately."
  },
  {
    author: {
      name: "Jennifer Walsh",
      handle: "VP Marketing, B2B Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Luumi Media doesn't just execute - they think like partners. They challenged our assumptions, refined our strategy, and delivered campaigns that actually move the needle."
  }
];

export function LuumiTestimonialsScrolling() {
  return (
    <TestimonialsScrolling
      testimonials={luumiTestimonials}
      speed={30} // Adjust speed as needed
    />
  );
}