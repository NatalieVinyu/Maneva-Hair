import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import wigModel2 from '../assets/wigModel2.jpg'
import wigModel3 from '../assets/wigModel3.jpg'
import backgroundImage from '../assets/background.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
}
 
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
 
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}
 
const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-[#1a1218] py-28 relative overflow-hidden">

        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'luminosity',
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />

        <motion.div 
          className="relative mx-auto max-w-5xl px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          <motion.p 
            className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-pink-300"
            variants={fadeUp}
            custom={0}
          >
            — Our Story —
          </motion.p>

          <motion.h1 
            className="font-serif text-5xl font-light leading-tight text-white md:text-7xl"
            variants={fadeUp}
            custom={1}
          >
            Beauty is not a luxury —<br />
            <span className="italic text-pink-300">it's a right.</span>
          </motion.h1>

          <motion.p 
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50"
            variants={fadeUp}
            custom={2}
          >
            Maneva Hair is a premium wig brand and styling studio dedicated to helping every
            woman look and feel her most confident self.
          </motion.p>

        </motion.div>
      </section>

      {/* STATS STRIP */}
      <motion.div
        className="grid grid-cols-2 bg-[#1a1218] md:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {[
          { num: '500+', label: 'Happy Clients' },
          { num: '1,000+', label: 'Wigs Sold' },
          { num: '4.9★', label: 'Average Rating' },
          { num: '5+', label: 'Years of Excellence' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="border-r border-white/10 py-8 text-center last:border-r-0"
            variants={fadeUp}
            custom={i}
          >
            <p className="font-serif text-4xl font-light text-white">{stat.num}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* STORY SECTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">

        <motion.div 
          className="relative"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={wigModel2}
            alt="Wig styling at Maneva Hair"
            className="w-full rounded-sm object-cover"
          />

          <motion.div 
            className="absolute -bottom-5 -left-5 bg-[#1a1218] p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-2xl font-light text-white">Since 2019</p>
            <span className="text-xs uppercase tracking-widest text-pink-300">Est. in South Africa</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="mb-4 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">
            Our Story
          </span>

          <h2 className="font-serif text-4xl font-light leading-snug md:text-5xl">
            A passion for <span className="italic text-pink-600">beauty</span> &amp; self-expression
          </h2>

          <div className="my-5 h-px w-10 bg-pink-400 opacity-50" />

          <p className="text-gray-500 leading-relaxed">
            Maneva Hair was born from a simple observation: every woman deserves access to
            beautiful, high-quality wigs and professional styling — regardless of budget or background.
            We noticed a gap in the market for a studio that combined luxury quality with genuine care.
          </p>

          <p className="mt-4 text-gray-500 leading-relaxed">
            Today, we serve hundreds of clients with our curated collection of human hair and synthetic
            wigs, alongside expert installation and styling services. Our online booking platform makes
            the entire experience seamless, from first click to final look.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-block">
            <Link
            to="/booking"
            className="mt-8 inline-block rounded-full bg-[#1a1218] px-7 py-3 text-sm text-white hover:bg-gray-800"
            >
              Book an Appointment
            </Link>
          </motion.div>

        </motion.div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-[#1a1218] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
              Why choose <span className="italic text-pink-300">Maneva Hair</span>
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Everything we do is rooted in quality, expertise, and genuine care for every client.
            </p>
          </motion.div>
 
          <motion.div
            className="grid gap-px bg-white/10 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { num: '01', title: 'Premium Quality', desc: 'We source only the finest human hair and synthetic wigs — rigorously selected for texture, longevity, and beauty.' },
              { num: '02', title: 'Expert Styling', desc: 'Our certified artists deliver flawless installations, custom cuts, and styles tailored to your unique look.' },
              { num: '03', title: 'Easy Booking', desc: 'Book your appointment online in minutes. No calls, no waiting — just seamless scheduling at your fingertips.' },
            ].map((val, i) => (
              <motion.div
                key={val.num}
                className="bg-[#1f1219] p-10 hover:bg-[#2a1820] transition-colors"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-serif text-5xl font-light text-pink-600 opacity-40">{val.num}</p>
                <h3 className="mt-5 text-base font-medium text-white">{val.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="mb-4 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">
            Our Promise
          </span>
          <h2 className="font-serif text-4xl font-light leading-snug md:text-5xl">
            You leave looking <span className="italic text-pink-600">better</span> than you imagined
          </h2>
          <p className="mt-5 text-gray-500 leading-relaxed">
            We're not just a wig store. We're a full-service studio where your transformation
            is our mission. Every appointment is a personalised experience.
          </p>
 
          <motion.ul
            className="mt-6 space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              'Free consultation on every booking',
              'Same-day installs available on request',
              'Aftercare guidance & wig maintenance tips',
              'Loyalty discounts for returning clients',
            ].map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 border-b border-pink-100 pb-3 text-sm text-gray-500 last:border-b-0"
                variants={fadeUp}
                custom={i}
              >
                <span className="text-pink-500">✦</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
 
          <div className="mt-8 flex gap-3">
            <Link to="/shop" className="rounded-full border border-black px-6 py-3 text-sm hover:bg-black hover:text-white">
              Shop Wigs
            </Link>
            <Link to="/booking" className="rounded-full bg-pink-600 px-6 py-3 text-sm text-white hover:bg-pink-700">
              Book Now
            </Link>
          </div>
        </motion.div>
 
        <motion.div
          className="relative overflow-hidden rounded-sm"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={wigModel3} alt="Maneva Hair studio" className="w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 to-transparent" />
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
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.h2 
            className="font-serif text-5xl font-light text-white"
            variants={fadeUp} 
            custom={0}
          >
            Ready to transform your look?
          </motion.h2>

          <motion.p 
            className="mt-3 text-white/60"
            variants={fadeUp} 
            custom={1}
          >
            Book your appointment or explore our wig collection today.
          </motion.p>

          <motion.div 
            className="mt-8 flex justify-center gap-4"
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

export default About;