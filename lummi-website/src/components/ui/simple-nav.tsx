import React from 'react'
import { Home, Settings, Users, MessageCircle, Phone, Menu, X } from 'lucide-react'

export const SimpleNav = () => {
  const [isDarkSection, setIsDarkSection] = React.useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { icon: Home, label: 'Home', href: '#hero' },
    { icon: Settings, label: 'Services', href: '#services' },
    { icon: Users, label: 'Process', href: '#process' },
    { icon: MessageCircle, label: 'About', href: '#about' },
    { icon: Phone, label: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
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

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-3 rounded-xl backdrop-blur-lg transition-all duration-300 ${
            isDarkSection
              ? 'bg-black/90 border border-white/20 text-white'
              : 'bg-white/90 border border-gray-200/60 text-gray-900'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={`absolute top-16 right-0 w-64 rounded-2xl backdrop-blur-lg shadow-2xl transition-all duration-300 ${
            isDarkSection
              ? 'bg-black/95 border border-white/20'
              : 'bg-white/95 border border-gray-200/60'
          }`}>
            <div className="p-4">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 mb-2 ${
                      isDarkSection
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-black/10'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-base font-medium">{item.label}</span>
                  </button>
                )
              })}
              
              <div className={`mt-4 pt-4 border-t ${
                isDarkSection ? 'border-white/20' : 'border-gray-300/60'
              }`}>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium text-base rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}