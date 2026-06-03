import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import wigModel from '../assets/wigModel.jpg'
import backgroundImage from '../assets/background.jpg'
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
  { id: 1, name: 'Silky Straight Blonde', price: 1299, category: 'Straight', length: '18"', img: straightBlonde, badge: 'Bestseller' },
  { id: 2, name: 'Body Wave Brown', price: 1499, category: 'Wavy', length: '20"', img: WavyBrownWig, badge: 'New' },
  { id: 3, name: 'Deep Curl', price: 1599, category: 'Curly', length: '16"', img: CurlyWaterWeave, badge: null },
  { id: 4, name: 'Bone Straight', price: 1199, category: 'Straight', length: '22"', img: StraightChocolateBrown, badge: null },
  { id: 5, name: 'Loose Wave', price: 1349, category: 'Wavy', length: '18"', img: WavyGluelessWig, badge: 'New' },
  { id: 6, name: 'Afro Kinky', price: 1649, category: 'Curly', length: '14"', img: CurlyAfroKinky, badge: null },
  { id: 7, name: 'Curly Black', price: 1449, category: 'Curly', length: '20"', img: CurlyBlackHairLaceFrontWig, badge: 'Bestseller' },
  { id: 8, name: 'Fringe Wig', price: 1549, category: 'Straight', length: '18"', img: StraightFringeBlendWig, badge: null },
  { id: 9, name: 'Straight Shoulder Wig', price: 1549, category: 'Straight', length: '18"', img: StraightShoulderLength, badge: null },
  { id: 10, name: 'Wavy Shoulder Wig', price: 1549, category: 'Wavy', length: '18"', img: WavyShoulderLengthWig, badge: null },
  { id: 11, name: 'Wavy Wig', price: 1549, category: 'Wavy', length: '18"', img: WavyWig, badge: null },
]
 
// Show badged wigs first, then fill up to 4
const FEATURED_WIGS = [
  ...ALL_WIGS.filter((w) => w.badge),
  ...ALL_WIGS.filter((w) => !w.badge),
].slice(0, 4)

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] },
  }),
}
 
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
}
 
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4, delayChildren: 0.5, } },
}
 
const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
}
 
const slideInRight = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-[#1a1218] relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'luminosity',
          }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-16 md:flex-row md:items-center">

          {/* LEFT */}
          <motion.div 
            className="flex-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            <motion.p 
              className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-pink-300"
              variants={fadeUp}
              custom={0}
            >
              — Premium Wig Studio —
            </motion.p>

            <motion.h1 
              className="font-serif text-5xl font-light leading-tight text-white md:text-7xl"
              variants={fadeUp}
              custom={1}
            >
              Slay every look<br />
              with <span className="italic text-pink-300">luxury wigs</span><br />
              &amp; expert styling
            </motion.h1>

            <motion.p 
              className="mt-6 max-w-md text-base leading-relaxed text-white/50"
              variants={fadeUp}
              custom={2}
              >
              Discover flawless installs and professional styling — all in one place.
              Book your appointment or shop your dream look today.
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              variants={fadeUp}
              custom={3}
            >
              <Link
                to="/shop"
                className="rounded-full bg-pink-600 px-7 py-3 text-sm font-medium text-white hover:bg-pink-700"
              >
                Shop Wigs
              </Link>

              <Link
                to="/booking"
                className="rounded-full border border-white/40 px-7 py-3 text-sm text-white hover:border-white hover:bg-white/10"
              >
                Book Appointment
              </Link>

            </motion.div>

            <motion.div
              className="mt-12 flex gap-10 border-t border-white/10 pt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { num: '500+', label: 'Happy Clients' },
                { num: '1,000+', label: 'Wigs Sold' },
                { num: '4.9★', label: 'Average Rating' },
              ].map((stat, i) => (
                <motion.div key={stat.label} variants={fadeUp} custom={4 + i}>
                  <p className="font-serif text-3xl font-light text-white">{stat.num}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div 
            className="relative flex-1"
            variants={slideInRight}
            initial='hidden'
            animate='visible'
          >
            <img
              src={wigModel}
              alt="Luxury wig model"
              className="w-full max-w-lg rounded-sm object-cover md:ml-auto"
            />

            <motion.div 
              className="absolute -bottom-5 left-0 bg-pink-600 p-5 md:left-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}

            >
              <p className="font-serif text-2xl font-light text-white">Top-rated</p>
              <span className="text-xs uppercase tracking-widest text-white/70">Wig Studio · South Africa</span>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <motion.section
        className="mx-auto grid max-w-7xl gap-px bg-gray-100 border border-gray-100 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {[
          {
            title: 'Premium Quality',
            desc: 'Human hair and synthetic wigs sourced for texture, longevity, and beauty.',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />,
          },
          {
            title: 'Expert Styling',
            desc: 'Professional wig installation and styling from certified artists.',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />,
          },
          {
            title: 'Easy Booking',
            desc: 'Choose your service, date, and time in just a few clicks — no calls needed.',
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />,
          },
        ].map((feat, i) => (
          <motion.div key={feat.title} className="bg-white p-10" variants={fadeUp} custom={i}>
            <span className="mb-4 inline-block rounded-full bg-pink-50 p-3 text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {feat.icon}
              </svg>
            </span>
            <h3 className="text-base font-medium text-gray-900">{feat.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{feat.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* FEATURED WIGS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24">
 
        <motion.div 
          className="mb-12 flex items-end justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <span className="mb-3 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">
              New Arrivals
            </span>
            <h2 className="font-serif text-4xl font-light md:text-5xl">
              Shop our <span className="italic text-pink-600">latest</span> wigs
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden text-sm font-medium text-gray-500 underline underline-offset-4 hover:text-gray-900 md:block"
          >
            View all →
          </Link>
        </motion.div>
 
        <motion.div 
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {FEATURED_WIGS.map((wig) => (
            <motion.div key={wig.id} className="group cursor-pointer" variants={fadeUp}>
 
              <div className="relative overflow-hidden rounded-sm bg-gray-100 aspect-[3/4]">
                <motion.img
                  src={wig.img}
                  alt={wig.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}

                />
                {wig.badge && (
                  <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium ${
                    wig.badge === 'New' ? 'bg-pink-600 text-white' : 'bg-[#1a1218] text-white'
                  }`}>
                    {wig.badge}
                  </span>
                )}
              </div>
 
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{wig.name}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{wig.category} · {wig.length}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-gray-900">R{wig.price.toLocaleString()}</p>
                  <Link
                    to="/shop"
                    className="rounded-full border border-gray-200 px-4 py-1.5 text-xs hover:border-black hover:bg-black hover:text-white transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
 
            </motion.div>
          ))}
        </motion.div>
 
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="rounded-full border border-black px-6 py-3 text-sm hover:bg-black hover:text-white"
          >
            View All Wigs
          </Link>
        </div>
 
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <motion.div 
            className="mb-14 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="mb-3 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">
              The Process
            </span>
            <h2 className="font-serif text-4xl font-light md:text-5xl">
              How it <span className="italic text-pink-600">works</span>
            </h2>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {[
              { num: '1', label: 'Browse & Choose', desc: 'Explore our wig collection and pick your perfect style.', pink: false },
              { num: '2', label: 'Book Online', desc: 'Select your service, date, and time in just a few clicks.', pink: false },
              { num: '3', label: 'Get Styled', desc: 'Come in and let our expert artists work their magic.', pink: false },
              { num: '4', label: 'Slay All Day', desc: 'Walk out confident, beautiful, and ready to turn heads.', pink: true },
            ].map((step, i) => (
              <motion.div key={step.num} className="text-center" variants={fadeUp} custom={i}>
                <motion.div
                  className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full font-serif text-2xl font-light text-white ${step.pink ? 'bg-pink-600' : 'bg-[#1a1218]'}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {step.num}
                </motion.div>
                <h3 className="text-sm font-medium text-gray-900">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.desc}</p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24">

        <motion.div 
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="mb-3 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">
            Client Love
          </span>
          <h2 className="font-serif text-4xl font-light md:text-5xl">
            What our <span className="italic text-pink-600">clients</span> say
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

         {[
            { initials: 'TM', name: 'Thandeka M.', city: 'Johannesburg', text: "The install was flawless. I've been getting compliments all week — everyone thinks it's my real hair!" },
            { initials: 'NS', name: 'Nomsa S.', city: 'Cape Town', text: 'Super easy to book online, amazing service, and my wig looks absolutely gorgeous. Will be back!' },
            { initials: 'LP', name: 'Lerato P.', city: 'Pretoria', text: 'Best studio in SA hands down. The quality of the wigs is unmatched and the staff make you feel so comfortable.' },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-sm border border-gray-100 bg-white p-8"
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-serif text-3xl text-pink-300">"</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{t.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-xs font-medium text-pink-600">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-pink-600 py-24 text-center">

        <motion.p
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[180px] font-light text-white/5 whitespace-nowrap"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          MANEVA
        </motion.p>

        <motion.div 
          className="relative mx-auto max-w-2xl px-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.h2 className="font-serif text-5xl font-light text-white" variants={fadeUp}>
            Ready to transform your look?
          </motion.h2>

          <motion.p className="mt-4 text-white/60" variants={fadeUp} custom={1}>
            Book your appointment or explore our wig collection today.
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={fadeUp}
            custom={2}
          >

            <Link
              to="/booking"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-pink-600 hover:opacity-90"
            >
              Book Appointment
            </Link>

            <Link
              to="/shop"
              className="rounded-full border border-white/50 px-7 py-3 text-sm text-white hover:border-white hover:bg-white/10"
            >
              Shop Wigs
            </Link>

          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}

export default Home;