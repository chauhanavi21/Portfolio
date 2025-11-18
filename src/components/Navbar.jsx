import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// A dark themed navigation bar inspired by the original portfolio.  It
// contains links to the various sections on the home page as well as a
// persistent link to the blog.  The mobile menu collapses into a
// dropdown when the viewport is narrow.  Colors are kept in a dark
// palette to match the rest of the site.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Achievements', href: '/#achievements' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Blog', href: '/blog' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1b1b1b] bg-opacity-95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Avi Chauhan
        </a>
        <ul className="hidden md:flex space-x-6 font-medium text-gray-300">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith('/#') || item.href === '/' ? (
                <a href={item.href} className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              ) : (
                <a href={item.href} className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? (
            <XMarkIcon className="w-7 h-7 text-gray-300" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-gray-300" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1b1b1b] bg-opacity-95 backdrop-blur-md border-t border-gray-700">
          <ul className="flex flex-col p-6 space-y-4 text-gray-300">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith('/#') || item.href === '/' ? (
                  <a href={item.href} className="block hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <a href={item.href} className="block hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar