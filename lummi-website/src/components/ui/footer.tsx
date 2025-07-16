import { Button } from "./button"
import { Twitter, Linkedin, Mail, Globe } from 'lucide-react'

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-8 lg:pb-8 lg:pt-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold text-xl text-gray-900">{brandName}</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-6 md:mt-8 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-blue-600 underline-offset-4 hover:underline font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 underline-offset-4 hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-gray-600 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div className="text-gray-500">{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Default footer configuration for Luumi Media
export const LuumiFooter = () => {
  const socialLinks = [
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/luumimedia",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/luumimedia",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:hello@luumimedia.com",
      label: "Email",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      href: "https://luumimedia.com",
      label: "Website",
    },
  ]

  const mainLinks = [
    { href: "#services", label: "Services" },
    { href: "#how-we-work", label: "How We Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ]

  const copyright = {
    text: "© 2024 Luumi Media",
    license: "All rights reserved",
  }

  return (
    <Footer
      logo={
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">L</span>
        </div>
      }
      brandName="Luumi Media"
      socialLinks={socialLinks}
      mainLinks={mainLinks}
      legalLinks={legalLinks}
      copyright={copyright}
    />
  )
}