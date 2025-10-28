import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 px-6 py-4">
      <div className="w-full max-w-[1500px] mx-auto flex justify-between items-center">

        {/* Left - Logo */}
        <a href="#home" className="text-2xl font-bold hover:text-gray-400">
          Avi Chauhan
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-gray-400">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu popup card */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full px-6">
          <div className="bg-[#1f1f1f] rounded-lg shadow-lg p-6 space-y-4 transition-all duration-300">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-white hover:text-purple-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
