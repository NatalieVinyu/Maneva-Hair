import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-[#1a1218] py-28 relative overflow-hidden">

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=70')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'luminosity',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-pink-300">
            — Our Story —
          </p>

          <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-7xl">
            Beauty is not a luxury —<br />
            <span className="italic text-pink-300">it's a right.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50">
            Maneva Hair is a premium wig brand and styling studio dedicated to helping every
            woman look and feel her most confident self.
          </p>

        </div>
      </section>

      {/* STATS STRIP */}
      <div className="grid grid-cols-2 bg-[#1a1218] md:grid-cols-4">

        <div className="border-r border-white/10 py-8 text-center">
          <p className="font-serif text-4xl font-light text-white">500+</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Happy Clients</p>
        </div>

        <div className="border-r border-white/10 py-8 text-center">
          <p className="font-serif text-4xl font-light text-white">1,000+</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Wigs Sold</p>
        </div>

        <div className="border-r border-white/10 py-8 text-center">
          <p className="font-serif text-4xl font-light text-white">4.9★</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Average Rating</p>
        </div>

        <div className="py-8 text-center">
          <p className="font-serif text-4xl font-light text-white">5+</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Years of Excellence</p>
        </div>

      </div>

      {/* STORY SECTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
            alt="Wig styling at Maneva Hair"
            className="w-full rounded-sm object-cover"
          />

          <div className="absolute -bottom-5 -left-5 bg-[#1a1218] p-5">
            <p className="font-serif text-2xl font-light text-white">Since 2019</p>
            <span className="text-xs uppercase tracking-widest text-pink-300">Est. in South Africa</span>
          </div>
        </div>

        <div>

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

          <Link
            to="/booking"
            className="mt-8 inline-block rounded-full bg-[#1a1218] px-7 py-3 text-sm text-white hover:bg-gray-800"
          >
            Book an Appointment
          </Link>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-[#1a1218] py-24">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">

            <h2 className="font-serif text-4xl font-light text-white md:text-5xl">
              Why choose <span className="italic text-pink-300">Maneva Hair</span>
            </h2>

            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Everything we do is rooted in quality, expertise, and genuine care for every client.
            </p>

          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">

            <div className="bg-[#1f1219] p-10 hover:bg-[#2a1820] transition-colors">
              <p className="font-serif text-5xl font-light text-pink-600 opacity-40">01</p>
              <h3 className="mt-5 text-base font-medium text-white">Premium Quality</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/45">
                We source only the finest human hair and synthetic wigs — rigorously selected for texture, longevity, and beauty.
              </p>
            </div>

            <div className="bg-[#1f1219] p-10 hover:bg-[#2a1820] transition-colors">
              <p className="font-serif text-5xl font-light text-pink-600 opacity-40">02</p>
              <h3 className="mt-5 text-base font-medium text-white">Expert Styling</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/45">
                Our certified artists deliver flawless installations, custom cuts, and styles tailored to your unique look.
              </p>
            </div>

            <div className="bg-[#1f1219] p-10 hover:bg-[#2a1820] transition-colors">
              <p className="font-serif text-5xl font-light text-pink-600 opacity-40">03</p>
              <h3 className="mt-5 text-base font-medium text-white">Easy Booking</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/45">
                Book your appointment online in minutes. No calls, no waiting — just seamless scheduling at your fingertips.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROMISE SECTION */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">

        <div>

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

          <ul className="mt-6 space-y-3">

            <li className="flex items-center gap-3 border-b border-pink-100 pb-3 text-sm text-gray-500">
              <span className="text-pink-500">✦</span>
              Free consultation on every booking
            </li>

            <li className="flex items-center gap-3 border-b border-pink-100 pb-3 text-sm text-gray-500">
              <span className="text-pink-500">✦</span>
              Same-day installs available on request
            </li>

            <li className="flex items-center gap-3 border-b border-pink-100 pb-3 text-sm text-gray-500">
              <span className="text-pink-500">✦</span>
              Aftercare guidance &amp; wig maintenance tips
            </li>

            <li className="flex items-center gap-3 pb-3 text-sm text-gray-500">
              <span className="text-pink-500">✦</span>
              Loyalty discounts for returning clients
            </li>

          </ul>

          <div className="mt-8 flex gap-3">

            <Link
              to="/shop"
              className="rounded-full border border-black px-6 py-3 text-sm hover:bg-black hover:text-white"
            >
              Shop Wigs
            </Link>

            <Link
              to="/booking"
              className="rounded-full bg-pink-600 px-6 py-3 text-sm text-white hover:bg-pink-700"
            >
              Book Now
            </Link>

          </div>
        </div>

        <div className="relative overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=80"
            alt="Maneva Hair studio"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-600/30 to-transparent" />
        </div>

      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-pink-600 py-24 text-center">

        <p
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[180px] font-light text-white/5 whitespace-nowrap"
          aria-hidden="true"
        >
          MANEVA
        </p>

        <div className="relative">

          <h2 className="font-serif text-5xl font-light text-white">
            Ready to transform your look?
          </h2>

          <p className="mt-3 text-white/60">
            Book your appointment or explore our wig collection today.
          </p>

          <div className="mt-8 flex justify-center gap-4">

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

          </div>
        </div>
      </section>

    </div>
  )
}

export default About;