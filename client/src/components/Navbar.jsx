import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MdMenu, MdClose, MdOutlineShoppingCart, MdOutlineSearch } from 'react-icons/md'

const navLinks = [
  { to: '/', label: 'Home'},
  { to: '/about', label: 'About'},
  { to: '/shop', label: 'Shop'},
  { to: '/services', label: 'Services'},
  { to: '/gallery', label: 'Gallery'},
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const activeLinks = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive
      ? 'text-pink-600 font-medium border-b border-pink-600 pb-0.5'
      : 'text-gray-500 hover:text-gray-900'
    }`

  const mobileLinks = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive
      ? 'font-medium text-pink-600' : 'text-gray-600 hover:gray-900'
    }`

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="font-serif text-2xl font-light tracking-wide text-[#1a1218]">
          Maneva <span className="italic text-pink-600">Hair</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={activeLinks}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 md:flex">

          <Link
            to="/booking"
            className="rounded-full bg-pink-600 px-5 py-2 text-sm text-white hover:bg-pink-700 transition-colors"
          >
            Book Now
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-gray-100 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">
             {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={mobileLinks}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6">

            <Link
              to="/booking"
              className="rounded-full bg-pink-600 px-5 py-3 text-center text-sm text-white hover:bg-pink-700"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>

          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar