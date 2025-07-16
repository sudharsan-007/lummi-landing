"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { 
  Home, 
  Settings, 
  Users, 
  MessageCircle, 
  Phone 
} from "lucide-react"

interface MenuItem {
  icon: React.FC<{ className?: string }>
  label: string
  href: string
  gradient: string
  iconColor: string
}

interface FloatingNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: MenuItem[]
  activeItem?: string
  onItemClick?: (label: string, href: string) => void
  ctaButton?: {
    label: string
    href: string
    onClick?: () => void
  }
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export const FloatingNav = React.forwardRef<HTMLDivElement, FloatingNavProps>(
  ({ className, items, activeItem, onItemClick, ctaButton, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true) // Always visible for debugging
    
    // Debug log
    React.useEffect(() => {
      console.log('FloatingNav rendered with items:', items)
      console.log('CTA Button:', ctaButton)
    }, [items, ctaButton])

    React.useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 50) { // Reduced threshold
          setIsVisible(true)
        } else {
          setIsVisible(true) // Keep visible for now
        }
      }

      window.addEventListener('scroll', toggleVisibility)
      return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const handleItemClick = (label: string, href: string) => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.location.href = href
      }
      onItemClick?.(label, href)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
          className,
        )}
        {...props}
      >
        <nav
          className="px-4 py-3 rounded-2xl bg-black/90 backdrop-blur-lg border border-white/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-yellow-500/10 rounded-3xl z-0 pointer-events-none" />
          
          <div className="flex items-center gap-3 relative z-10">
            {/* Debug indicator */}
            <div className="text-white text-xs mr-2">NavMenu</div>
            {/* Menu Items */}
            {items.map((item) => {
              const Icon = item.icon
              const isActive = item.label === activeItem

              return (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => handleItemClick(item.label, item.href)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 group",
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5",
                    )}
                  >
                    <Icon className={cn("h-4 w-4", isActive ? item.iconColor : "text-gray-400 group-hover:text-white")} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                </div>
              )
            })}

            {/* CTA Button */}
            {ctaButton && (
              <div className="ml-2 pl-2 border-l border-white/20">
                <button
                  onClick={() => {
                    if (ctaButton.onClick) {
                      ctaButton.onClick()
                    } else if (ctaButton.href) {
                      handleItemClick(ctaButton.label, ctaButton.href)
                    }
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium text-sm rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
                >
                  {ctaButton.label}
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    )
  },
)

FloatingNav.displayName = "FloatingNav"

// Default menu items for Luumi Media
export const luumiMenuItems: MenuItem[] = [
  {
    icon: Home,
    label: "Home",
    href: "#hero",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-400",
  },
  {
    icon: Settings,
    label: "Services",
    href: "#services",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-400",
  },
  {
    icon: Users,
    label: "Process",
    href: "#process",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-400",
  },
  {
    icon: MessageCircle,
    label: "About",
    href: "#about",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "text-purple-400",
  },
  {
    icon: Phone,
    label: "Contact",
    href: "#contact",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-400",
  },
]