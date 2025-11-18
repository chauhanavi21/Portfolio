import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      // Delay smooth scroll until route finishes changing
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const navItems = [
    { label: 'Home', onClick: handleHomeClick },
    { label: 'About', onClick: () => handleSectionClick('about') },
    { label: 'Experience', onClick: () => handleSectionClick('experience') },
    { label: 'Skills', onClick: () => handleSectionClick('skills') },
    { label: 'Projects', onClick: () => handleSectionClick('projects') },
    { label: 'Achievements', onClick: () => handleSectionClick('achievements') },
    { label: 'Contact', onClick: () => handleSectionClick('contact') },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#1b1b1b]/80 backdrop-blur-md z-50 px-6 py-4 border-b border-gray-700">
      <div className="w-full max-w-[1500px] mx-auto flex justify-between items-center">
        {/* Logo - works as home scroll */}
        <a
          href="/"
          onClick={handleHomeClick}
          className="text-2xl font-bold text-white hover:text-purple-400 cursor-pointer"
        >
          Avi Chauhan
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-white">
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={item.onClick}
              className="hover:text-purple-400 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
          <li>
            <Link to="/blog" className="hover:text-purple-400">
              Blog
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <XMarkIcon className="h-7 w-7 text-white" />
          ) : (
            <Bars3Icon className="h-7 w-7 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full px-6">
          <div className="bg-[#1f1f1f] rounded-lg shadow-lg p-6 space-y-4">
            {navItems.map((item, i) => (
              <p
                key={i}
                onClick={item.onClick}
                className="block text-white hover:text-purple-400 font-medium cursor-pointer"
              >
                {item.label}
              </p>
            ))}
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-purple-400 font-medium"
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
