import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES = [
  { id: 1, category: 'Installation', name: 'Lace Front Install', duration: '2–3 hrs', price: 450, description: 'A seamless lace front application with glue or tape for a natural, undetectable hairline.', includes: ['Consultation', 'Prep & clean', 'Lace melt', 'Edge styling'], popular: true },
  { id: 2, category: 'Installation', name: 'Full Lace Install', duration: '3–4 hrs', price: 650, description: 'Full lace cap installation allowing versatile parting and styling in any direction.', includes: ['Consultation', 'Cap fit & prep', 'Full adhesion', 'Style finish'], popular: false },
  { id: 3, category: 'Installation', name: 'Glueless Install', duration: '1.5–2 hrs', price: 350, description: 'Secure, adhesive-free installation using adjustable straps and combs — perfect for sensitive scalps.', includes: ['Consultation', 'Strap fitting', 'Blend & lay', 'Edge styling'], popular: false },
  { id: 4, category: 'Styling', name: 'Wig Curl & Set', duration: '1–2 hrs', price: 280, description: 'Transform your wig with a custom curl pattern using heat or flexi rods for long-lasting definition.', includes: ['Wash & condition', 'Heat styling', 'Set & dry', 'Finishing spray'], popular: false },
  { id: 5, category: 'Styling', name: 'Colour & Toning', duration: '2–4 hrs', price: 550, description: 'Professional colouring, highlights, or toning to achieve your dream shade — no damage to your natural hair.', includes: ['Strand test', 'Colour application', 'Toner / gloss', 'Style finish'], popular: true },
  { id: 6, category: 'Styling', name: 'Blowout & Press', duration: '1 hr', price: 200, description: 'A silky smooth blowout and flat press to achieve a sleek, polished finish on any wig.', includes: ['Detangle', 'Heat protect', 'Blowout', 'Press & seal'], popular: false },
  { id: 7, category: 'Maintenance', name: 'Wig Wash & Condition', duration: '45 min', price: 150, description: 'Deep cleanse and conditioning treatment to restore softness, shine, and longevity to your wig.', includes: ['Clarifying wash', 'Deep condition', 'Detangle', 'Air/blow dry'], popular: false },
  { id: 8, category: 'Maintenance', name: 'Lace Repair & Re-glue', duration: '1 hr', price: 250, description: 'Lift, clean, and re-secure a lifted or worn lace install to restore a fresh, flawless look.', includes: ['Lace lift', 'Clean & prep', 'Re-adhesion', 'Edge lay'], popular: false },
  { id: 9, category: 'Maintenance', name: 'Wig Customisation', duration: '1–2 hrs', price: 380, description: 'Bleach knots, pluck hairline, tint lace, and trim baby hairs for a fully personalised natural look.', includes: ['Knot bleaching', 'Hairline plucking', 'Lace tinting', 'Baby hair cut'], popular: true },
]

const CATEGORIES = ['All', 'Installation', 'Styling', 'Maintenance']
const CATEGORY_META = {
  Installation: { emoji: '💆‍♀️', color: 'bg-violet-50 text-violet-600 border-violet-200' },
  Styling: { emoji: '✨', color: 'bg-amber-50 text-amber-600 border-amber-200' },
  Maintenance: { emoji: '🛠', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
}

const FAQS = [
  { q: 'Do I need to bring my own wig?', a: 'No — you can purchase directly from our shop or bring your own. We work with all wig types and brands.' },
  { q: 'How long does a lace install last?', a: 'With proper care, a glue install can last 2–6 weeks. Glueless installs are great for daily wear and removal.' },
  { q: 'Can I book a service without buying a wig from you?', a: 'Absolutely. We welcome clients who bring their own wigs for installation, styling, or maintenance.' },
  { q: 'What should I do to prepare for my appointment?', a: 'Come with clean, stretched natural hair. Avoid heavy oils or products on your scalp the day before.' },
  { q: 'Do you offer package deals?', a: 'Yes — ask us about bundle pricing when you book. We offer installation + styling combos at a discounted rate.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] } }),
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }

function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = SERVICES.filter((s) => activeCategory === 'All' || s.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">

      <section className="relative overflow-hidden bg-[#1a1218] px-6 pb-0 pt-20 text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p className="relative mb-3 text-xs font-medium uppercase tracking-[0.18em] text-pink-300" variants={fadeUp} custom={0}>— What We Offer —</motion.p>
          <motion.h1 className="relative font-serif text-5xl font-light leading-tight text-white md:text-7xl" variants={fadeUp} custom={1}>
            Every look.<br /><span className="italic text-pink-300">Every service.</span>
          </motion.h1>
          <motion.p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50" variants={fadeUp} custom={2}>
            From flawless installs to custom styling and maintenance — everything your wig needs, all in one studio.
          </motion.p>
          <motion.div className="relative mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-t-sm" variants={stagger}>
            {[{ num: 'R150', label: 'Starting from' }, { num: '9', label: 'Services offered' }, { num: '3', label: 'Expert stylists' }].map((s, i) => (
              <motion.div key={s.label} className="px-6 py-5" variants={fadeUp} custom={3 + i}>
                <p className="font-serif text-3xl font-light text-white">{s.num}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <div className="sticky top-0 z-20 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <motion.button key={cat} onClick={() => setActiveCategory(cat)} whileTap={{ scale: 0.95 }}
                className={`rounded-full px-5 py-1.5 text-xs font-medium transition-colors ${activeCategory === cat ? 'bg-[#1a1218] text-white' : 'border border-gray-200 text-gray-500 hover:border-gray-900 hover:text-gray-900'}`}>
                {cat}
              </motion.button>
            ))}
          </div>
          <span className="text-xs text-gray-400">{filtered.length} services</span>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
            variants={stagger} initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 0.2 } }}>
            {filtered.map((service, i) => (
              <motion.div key={service.id} variants={fadeUp} custom={i} layout>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <div className="overflow-hidden bg-pink-600 py-4">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {Array(3).fill(['Lace Installs', 'Colour & Toning', 'Curl Sets', 'Glueless Installs', 'Wig Customisation', 'Blowout & Press', 'Wig Repair', 'Baby Hair Styling']).flat().map((item, i) => (
            <span key={i} className="text-sm font-medium uppercase tracking-widest text-white/80">✦ {item}</span>
          ))}
        </div>
      </div>

      <section className="bg-[#1a1218] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div className="mb-14 text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="mb-3 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-300">The Difference</span>
            <h2 className="font-serif text-4xl font-light text-white md:text-5xl">Why choose <span className="italic text-pink-300">Maneva</span></h2>
          </motion.div>
          <motion.div className="grid gap-4 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {[
              { title: 'Certified Stylists', desc: 'Every artist is trained and certified in wig installation, colouring, and maintenance techniques.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /> },
              { title: 'Premium Products Only', desc: 'We use top-tier adhesives, toners, and care products that protect both your wig and your natural hair.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /> },
              { title: 'Comfort-First Studio', desc: 'A calm, welcoming space where you can relax and leave looking and feeling your absolute best.', icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /> },
            ].map((item, i) => (
              <motion.div key={item.title} className="rounded-sm border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors" variants={fadeUp} custom={i} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="mb-5 inline-block rounded-full bg-pink-600/20 p-3 text-pink-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>{item.icon}</svg>
                </div>
                <h3 className="text-base font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <motion.div className="mb-12 text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="mb-3 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">FAQ</span>
          <h2 className="font-serif text-4xl font-light md:text-5xl">Common <span className="italic text-pink-600">questions</span></h2>
        </motion.div>
        <FaqAccordion />
      </section>

      <section className="relative overflow-hidden bg-pink-600 py-24 text-center">
        <motion.p className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[180px] font-light text-white/5 whitespace-nowrap"
          aria-hidden="true" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} viewport={{ once: true }}>MANEVA</motion.p>
        <motion.div className="relative mx-auto max-w-2xl px-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="font-serif text-5xl font-light text-white" variants={fadeUp} custom={0}>Ready to book your service?</motion.h2>
          <motion.p className="mt-4 text-white/60" variants={fadeUp} custom={1}>Choose your service, pick a time, and let us take care of the rest.</motion.p>
          <motion.div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row" variants={fadeUp} custom={2}>
            <Link to="/booking" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-pink-600 hover:opacity-90">Book Appointment</Link>
            <Link to="/shop" className="rounded-full border border-white/50 px-7 py-3 text-sm text-white hover:border-white hover:bg-white/10">Shop Wigs</Link>
          </motion.div>
        </motion.div>
      </section>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; width: max-content; }
      `}</style>
    </div>
  )
}

function ServiceCard({ service }) {
  const [open, setOpen] = useState(false)
  const meta = CATEGORY_META[service.category]
  return (
    <motion.div className={`flex flex-col rounded-sm border transition-all duration-300 ${open ? 'border-pink-200 shadow-lg shadow-pink-100' : 'border-gray-100 hover:border-pink-200 hover:shadow-md hover:shadow-pink-50'}`}
      whileHover={!open ? { y: -2 } : {}}>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${meta.color}`}>{meta.emoji} {service.category}</span>
          {service.popular && <span className="rounded-full bg-pink-600 px-3 py-0.5 text-xs font-medium text-white">Popular</span>}
        </div>
        <h3 className="mt-4 font-serif text-xl font-light text-gray-900">{service.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-gray-400 flex-1">{service.description}</p>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="font-serif text-2xl font-light text-gray-900">R{service.price.toLocaleString()}</p>
            <p className="text-xs text-gray-400">{service.duration}</p>
          </div>
          <motion.button onClick={() => setOpen((v) => !v)} whileTap={{ scale: 0.95 }}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${open ? 'bg-pink-600 text-white' : 'border border-gray-200 text-gray-500 hover:border-pink-400 hover:text-pink-600'}`}>
            {open ? 'Close' : 'Details'}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="border-t border-pink-100 bg-pink-50 px-6 py-5 overflow-hidden"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-pink-400">What's included</p>
            <motion.ul className="mb-5 space-y-2" variants={stagger} initial="hidden" animate="visible">
              {service.includes.map((item, i) => (
                <motion.li key={item} className="flex items-center gap-2 text-sm text-gray-600" variants={fadeUp} custom={i}>
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <Link to="/booking" className="block w-full rounded-full bg-pink-600 py-2.5 text-center text-xs font-medium text-white hover:bg-pink-700 transition-colors">
              Book this service
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <motion.div className="divide-y divide-gray-100 rounded-sm border border-gray-100"
      variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {FAQS.map((faq, i) => (
        <motion.div key={i} variants={fadeUp} custom={i}>
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50">
            <span className="text-sm font-medium text-gray-900">{faq.q}</span>
            <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
              animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </motion.svg>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div className="bg-gray-50 px-6 overflow-hidden"
                initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}>
                <p className="pb-5 text-sm leading-relaxed text-gray-500">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Services