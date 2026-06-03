import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TbTruckDelivery } from 'react-icons/tb';
import { IoReturnDownBack, IoDiamondOutline } from 'react-icons/io5';
import { FaShieldAlt } from 'react-icons/fa';
import straightBlonde from '../assets/StraightBlonde.jpeg'
import WavyBrownWig from '../assets/WavyBrownWig.jpeg'
import CurlyWaterWeave from '../assets/CurlyWaterWeave.jpeg'
import StraightChocolateBrown from '../assets/StraightChocolateBrown.jpeg'
import WavyGluelessWig from '../assets/WavyGluelessWig.jpeg'
import CurlyAfroKinky from '../assets/CurlyAfroKinky.jpeg'
import CurlyBlackHairLaceFrontWig from '../assets/CurlyBlackHairLaceFrontWig.jpeg'
import StraightFringeBlendWig from '../assets/StraightFringeBlendWig.jpeg'
import StraightShoulderLength from '../assets/StraightShoulderLength.jpeg'
import WavyShoulderLengthWig from '../assets/WavyShoulderLengthWig.jpeg'
import WavyWig from '../assets/WavyWig.jpeg'

const ALL_WIGS = [
  { id: 1, 
    name: 'Silky Straight Blonde', 
    price: 1299, 
    category: 'Straight', 
    length: '18"', 
    img: straightBlonde, 
    badge: 'Bestseller' 
  },
  { id: 2, 
    name: 'Body Wave Brown', 
    price: 1499, 
    category: 'Wavy', 
    length: '20"', 
    img: WavyBrownWig, 
    badge: 'New' 
  },
  { id: 3, 
    name: 'Deep Curl', 
    price: 1599, 
    category: 'Curly', 
    length: '16"', 
    img: CurlyWaterWeave, 
    badge: null 
  },
  { id: 4, 
    name: 'Bone Straight', 
    price: 1199, 
    category: 'Straight', 
    length: '22"', 
    img: StraightChocolateBrown, 
    badge: null 
  },
  { id: 5, 
    name: 'Loose Wave', 
    price: 1349, 
    category: 'Wavy', 
    length: '18"', 
    img: WavyGluelessWig, 
    badge: 'New' 
  },
  { id: 6, 
    name: 'Afro Kinky', 
    price: 1649, 
    category: 'Curly', 
    length: '14"', 
    img: CurlyAfroKinky, 
    badge: null 
  },
  { id: 7, 
    name: 'Curly Black', 
    price: 1449, 
    category: 'Curly', 
    length: '20"', 
    img: CurlyBlackHairLaceFrontWig, 
    badge: 'Bestseller' 
  },
  { id: 8, 
    name: 'Fringe Wig', 
    price: 1549, 
    category: 'Straight', 
    length: '18"', 
    img: StraightFringeBlendWig, 
    badge: null 
  },
  { id: 9, 
    name: 'Straight Shoulder Wig', 
    price: 1549, 
    category: 'Straight', 
    length: '18"', 
    img: StraightShoulderLength, 
    badge: null 
  },
  { id: 10, 
    name: 'Wavy Shoulder Wig', 
    price: 1549, 
    category: 'Wavy', 
    length: '18"', 
    img: WavyShoulderLengthWig, 
    badge: null 
  },
  { id: 11, 
    name: 'Wavy Wig', 
    price: 1549, 
    category: 'Wavy', 
    length: '18"', 
    img: WavyWig, 
    badge: null 
  },
]

const CATEGORIES = ['All', 'Straight', 'Wavy', 'Curly']
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low']

function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (id) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id])

  const filtered = ALL_WIGS
    .filter((w) => activeCategory === 'All' || w.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price
      if (sortBy === 'Price: High to Low') return b.price - a.price
      return 0
    })

  return (
    <div className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="bg-[#1a1218] px-6 py-16 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-pink-300">
          — The Collection —
        </p>
        <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-6xl">
          Shop our <span className="italic text-pink-300">wigs</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
          Premium human hair and high-grade synthetic wigs, ready to install or ship to your door.
        </p>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-20 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-4 sm:flex-row sm:items-center">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-1.5 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#1a1218] text-white'
                    : 'border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort + count */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">{filtered.length} styles</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border-0 bg-transparent text-xs font-medium text-gray-700 outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

        </div>
      </div>

      {/* PRODUCT GRID */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((wig) => (
            <div key={wig.id} className="group relative cursor-pointer">

              {/* Image */}
              <div className="relative overflow-hidden rounded-sm bg-gray-100 aspect-[3/4]">
                <img
                  src={wig.img}
                  alt={wig.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
                {wig.badge && (
                  <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${
                    wig.badge === 'New' ? 'bg-pink-600 text-white' : 'bg-[#1a1218] text-white'
                  }`}>
                    {wig.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(wig.id)}
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white"
                  aria-label="Save to wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill={wishlist.includes(wig.id) ? '#db2777' : 'none'}
                    viewBox="0 0 24 24"
                    stroke={wishlist.includes(wig.id) ? '#db2777' : '#9ca3af'}
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>

                {/* Quick actions overlay */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-[#1a1218]/90 p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <Link
                    to="/booking"
                    className="block w-full rounded-full bg-pink-600 py-2 text-center text-xs font-medium text-white hover:bg-pink-700"
                  >
                    Book Install
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div className="mt-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{wig.name}</p>
                    <p className="mt-0.5 text-xs text-gray-400">{wig.category} · {wig.length}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">R{wig.price.toLocaleString()}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CARE BANNER */}
      <section className="border-y border-gray-100 bg-gray-50 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px bg-gray-200 md:grid-cols-4">
          {[
            { icon: TbTruckDelivery, label: 'Free Delivery', sub: 'Orders over R800' },
            { icon: IoReturnDownBack, label: 'Easy Returns', sub: '7-day policy' },
            { icon: IoDiamondOutline, label: 'Authentic Hair', sub: '100% real & synthetic' },
            { icon: FaShieldAlt, label: 'Secure Payment', sub: 'EFT accepted' },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex flex-col items-center bg-gray-50 py-8 text-center">
              
              <Icon className='text-3xl text-black' />

              <p className="mt-2 text-xs font-medium text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-400">{item.sub}</p>
            </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-pink-600 py-20 text-center">
        <p
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[160px] font-light text-white/5 whitespace-nowrap"
          aria-hidden="true"
        >
          MANEVA
        </p>
        <div className="relative mx-auto max-w-xl px-6">
          <h2 className="font-serif text-4xl font-light text-white">
            Want a professional install?
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Our certified stylists will have you looking flawless. Book your slot today.
          </p>
          <Link
            to="/booking"
            className="mt-7 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-pink-600 hover:opacity-90"
          >
            Book Appointment
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Shop;
