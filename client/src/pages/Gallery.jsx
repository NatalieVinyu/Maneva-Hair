import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Artist1 from '../assets/Artist1.jpeg'
import Artist2 from '../assets/Artist2.jpeg'
import Artist3 from '../assets/Artist3.jpeg'
import Model1 from '../assets/Model1.jpeg'
import Model2 from '../assets/Model2.jpeg'
import Model3 from '../assets/Model3.jpeg'
import Model4 from '../assets/Model4.jpeg'
import Model5 from '../assets/Model5.jpeg'
import Model6 from '../assets/Model6.jpeg'
import Model7 from '../assets/Model7.jpeg'
import Model8 from '../assets/Model8.jpeg'
import Model9 from '../assets/Model9.jpeg'
import Model10 from '../assets/Model10.jpeg'
import Model11 from '../assets/Model11.jpeg'

const GALLERY_ITEMS = [
  { id: 1, category: 'Installs', title: 'Curly Water Weave', stylist: 'Aisha', img: Model1 },
  { id: 2, category: 'Colour', title: 'Black with Blonde Highlights', stylist: 'Lerato', img: Model2 },
  { id: 3, category: 'Styling', title: 'Cornrow Braid Style', stylist: 'Nandi', img: Model3 },
  { id: 4, category: 'Installs', title: 'Curly Glueless Install', stylist: 'Aisha', img: Model4 },
  { id: 5, category: 'Styling', title: 'Blonde Curly Ends', stylist: 'Lerato', img: Model5 },
  { id: 6, category: 'Installs', title: 'Straight Fringe', stylist: 'Nandi', img: Model6 },
  { id: 7, category: 'Installs', title: 'Bob Lace Install', stylist: 'Aisha', img: Model7 },
  { id: 8, category: 'Styling', title: 'Jet Black Tint', stylist: 'Lerato', img: Model8 },
  { id: 9, category: 'Colour', title: 'Brown Tint', stylist: 'Nandi', img: Model9 },
  { id: 10, category: 'Installs', title: 'Lace Melt + Baby Hairs', stylist: 'Aisha', img: Model10 },
  { id: 11, category: 'Styling', title: 'Dark Brown Wavy', stylist: 'Lerato', img: Model11 },
]

const CATEGORIES = ['All', 'Installs', 'Styling', 'Colour']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = GALLERY_ITEMS.filter(
    (g) => activeCategory === 'All' || g.category === activeCategory
  )

  return (
    <div className="min-h-screen bg-white">

      <section className="bg-[#1a1218] px-6 py-16 text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-pink-300" variants={fadeUp} custom={0}>— Our Work —</motion.p>
          <motion.h1 className="font-serif text-5xl font-light leading-tight text-white md:text-6xl" variants={fadeUp} custom={1}>
            The <span className="italic text-pink-300">gallery</span>
          </motion.h1>
          <motion.p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50" variants={fadeUp} custom={2}>
            Real clients. Real results. Browse our portfolio of installs, styling, and colour transformations.
          </motion.p>
        </motion.div>
      </section>

      <div className="sticky top-0 z-20 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)} whileTap={{ scale: 0.95 }}
                className={`rounded-full px-5 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat ? 'bg-[#1a1218] text-white' : 'border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900'}`}>
                {cat}
              </motion.button>
            ))}
          </div>
          <span className="text-xs text-gray-400">{filtered.length} looks</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 [column-fill:_balance]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            {filtered.map((item, i) => (
              <motion.div key={item.id}
                className="group relative mb-4 cursor-pointer overflow-hidden rounded-sm bg-gray-100 break-inside-avoid"
                onClick={() => setLightbox(item)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -2 }}>
                <motion.img src={item.img} alt={item.title} className="w-full object-cover"
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
                <motion.div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4"
                  initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.25 }}>
                  <span className="mb-1 self-start rounded-full bg-pink-600 px-2.5 py-0.5 text-xs font-medium text-white">{item.category}</span>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs text-white/70">by {item.stylist}</p>
                </motion.div>
                <motion.div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="mb-3 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">Meet The Team</span>
          <h2 className="font-serif text-4xl font-light md:text-5xl">The artists behind <span className="italic text-pink-600">the look</span></h2>
        </motion.div>
        <motion.div className="grid gap-6 sm:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          {[
            { name: 'Aisha Dlamini', role: 'Lead Installer', speciality: 'Lace installs & customisation', img: Artist1 },
            { name: 'Lerato Khumalo', role: 'Senior Stylist', speciality: 'Curl sets & colour work', img: Artist2 },
            { name: 'Nandi Zulu', role: 'Colour Specialist', speciality: 'Toning, balayage & tinting', img: Artist3 },
          ].map((stylist, i) => (
            <motion.div key={stylist.name} className="group text-center" variants={fadeUp} custom={i}>
              <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                <motion.img src={stylist.img} alt={stylist.name} className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }} transition={{ duration: 0.4 }} />
              </div>
              <p className="font-medium text-gray-900">{stylist.name}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-pink-600">{stylist.role}</p>
              <p className="mt-1 text-xs text-gray-400">{stylist.speciality}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-t border-gray-100 py-12">
        <motion.p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-gray-400"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Follow us · @manevawig
        </motion.p>
        <motion.div className="grid grid-cols-4 gap-px bg-gray-100 md:grid-cols-6 lg:grid-cols-8"
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {[Model1, Model2, Model3, Model4, Model5, Model6, Model7, Model8].map((img, i) => (
            <motion.div key={i} className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-100" variants={fadeUp} custom={i}>
              <motion.img src={img} alt="" className="h-full w-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} />
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black/0"
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.3)' }} transition={{ duration: 0.25 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-pink-600 py-24 text-center">
        <motion.p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[180px] font-light text-white/5 whitespace-nowrap"
          aria-hidden="true" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }}>MANEVA</motion.p>
        <motion.div className="relative mx-auto max-w-2xl px-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="font-serif text-5xl font-light text-white" variants={fadeUp} custom={0}>Want your own transformation?</motion.h2>
          <motion.p className="mt-4 text-white/60" variants={fadeUp} custom={1}>Book with one of our expert stylists and walk out looking flawless.</motion.p>
          <motion.div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row" variants={fadeUp} custom={2}>
            <Link to="/booking" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-pink-600 hover:opacity-90">Book Appointment</Link>
            <Link to="/services" className="rounded-full border border-white/50 px-7 py-3 text-sm text-white hover:border-white hover:bg-white/10">View Services</Link>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}>
            <motion.div className="relative max-h-[90vh] w-full max-w-xl overflow-hidden rounded-sm bg-white"
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}>
              <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[70vh] object-cover" />
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-sm font-medium text-gray-900">{lightbox.title}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{lightbox.category} · by {lightbox.stylist}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link to="/booking" className="rounded-full bg-pink-600 px-5 py-2 text-xs font-medium text-white hover:bg-pink-700" onClick={() => setLightbox(null)}>
                    Book this look
                  </Link>
                  <motion.button onClick={() => setLightbox(null)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-900 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Gallery