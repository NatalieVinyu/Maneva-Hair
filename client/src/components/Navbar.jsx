import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdMenu, MdClose, MdOutlineShoppingCart, MdOutlineSearch } from 'react-icons/md'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="font-serif text-2xl font-light tracking-wide text-[#1a1218]">
          Maneva <span className="italic text-pink-600">Hair</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">

          <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Home
          </Link>

          <Link to="/about" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            About
          </Link>

          <Link to="/shop" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Shop
          </Link>

          <Link to="/services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Services
          </Link>

          <Link to="/gallery" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Gallery
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 md:flex">

          <button className="text-gray-400 hover:text-gray-900 transition-colors">
            <MdOutlineSearch size={20} />
          </button>

          <Link to="/cart" className="relative text-gray-400 hover:text-gray-900 transition-colors">
            <MdOutlineShoppingCart size={22} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-pink-600 text-[10px] text-white">
              0
            </span>
          </Link>

          <Link
            to="/login"
            className="rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>

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

            <Link to="/" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link to="/shop" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Shop
            </Link>

            <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Services
            </Link>

            <Link to="/gallery" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>

            <Link to="/cart" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Cart
            </Link>

          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6">

            <Link
              to="/login"
              className="rounded-full border border-gray-200 px-5 py-3 text-center text-sm text-gray-600 hover:border-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>

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