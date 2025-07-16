import React from 'react'
import { Home, Settings, Users, MessageCircle, Phone } from 'lucide-react'

export const SimpleNav = () => {
  const [isDarkSection, setIsDarkSection] = React.useState(true)

  React.useEffect(() => {
    const handleScroll = () => {
      // Check if we're on the hero section (dark background)
      const heroSection = document.querySelector('#hero')
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        const isInHeroSection = heroRect.bottom > 100 // Menu is in hero section if hero bottom is below menu position
        setIsDarkSection(isInHeroSection)
      }
    }
    
    // Check on initial load
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const menuItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: Settings, label: 'Services', href: '#services' },
    { icon: Users, label: 'Process', href: '#process' },
    { icon: MessageCircle, label: 'About', href: '#about' },
    { icon: Phone, label: 'Contact', href: '#contact' }
  ]

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <nav className={`px-4 py-3 rounded-2xl backdrop-blur-lg shadow-2xl transition-all duration-300 ${
        isDarkSection 
          ? 'bg-black/90 border border-white/20' 
          : 'bg-white/90 border border-gray-200/60'
      }`}>
        <div className="flex items-center gap-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                  isDarkSection
                    ? 'text-gray-400 hover:text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-black/10'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
          
          <div className={`ml-2 pl-2 border-l ${
            isDarkSection ? 'border-white/20' : 'border-gray-300/60'
          }`}>
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium text-sm rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}