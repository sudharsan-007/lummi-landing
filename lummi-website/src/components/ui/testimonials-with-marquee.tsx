import { cn } from "../../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "./testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-white text-gray-900",
      "py-8 sm:py-12 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:gap-16">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            {title && (
              <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
        </div>
      </div>
    </section>
  )
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

export function LuumiTestimonialsSection() {
  return (
    <TestimonialsSection
      title=""
      description=""
      testimonials={luumiTestimonials}
    />
  )
}