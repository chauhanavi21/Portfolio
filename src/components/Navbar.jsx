import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 px-6 py-4">
      {/* Custom wider container */}
      <div className="w-full max-w-[1500px] mx-auto flex justify-between items-center">
        
        {/* Left: Logo/Name */}
        <a href="#home" className="text-2xl font-bold hover:text-gray-400">
          Avi Chauhan
        </a>

        {/* Right: Nav Links */}
        <ul className="flex items-center space-x-6 font-medium text-white">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
