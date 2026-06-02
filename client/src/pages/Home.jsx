import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-[#1a1218] relative overflow-hidden">

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=70')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'luminosity',
          }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-28 md:flex-row md:items-center">

          {/* LEFT */}
          <div className="flex-1">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-pink-300">
              — Premium Wig Studio —
            </p>

            <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-7xl">
              Slay every look<br />
              with <span className="italic text-pink-300">luxury wigs</span><br />
              &amp; expert styling
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/50">
              Discover flawless installs and professional styling — all in one place.
              Book your appointment or shop your dream look today.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

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

            </div>

            <div className="mt-12 flex gap-10 border-t border-white/10 pt-8">

              <div>
                <p className="font-serif text-3xl font-light text-white">500+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Happy Clients</p>
              </div>

              <div>
                <p className="font-serif text-3xl font-light text-white">1,000+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Wigs Sold</p>
              </div>

              <div>
                <p className="font-serif text-3xl font-light text-white">4.9★</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">Average Rating</p>
              </div>

            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative flex-1">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80"
              alt="Luxury wig model"
              className="w-full max-w-lg rounded-sm object-cover md:ml-auto"
            />

            <div className="absolute -bottom-5 left-0 bg-pink-600 p-5 md:left-6">
              <p className="font-serif text-2xl font-light text-white">Top-rated</p>
              <span className="text-xs uppercase tracking-widest text-white/70">Wig Studio · South Africa</span>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mx-auto grid max-w-7xl gap-px bg-gray-100 border border-gray-100 md:grid-cols-3">

        <div className="bg-white p-10">
          <span className="mb-4 inline-block rounded-full bg-pink-50 p-3 text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          </span>
          <h3 className="text-base font-medium text-gray-900">Premium Quality</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Human hair and synthetic wigs sourced for texture, longevity, and beauty.
          </p>
        </div>

        <div className="bg-white p-10">
          <span className="mb-4 inline-block rounded-full bg-pink-50 p-3 text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </span>
          <h3 className="text-base font-medium text-gray-900">Expert Styling</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Professional wig installation and styling from certified artists.
          </p>
        </div>

        <div className="bg-white p-10">
          <span className="mb-4 inline-block rounded-full bg-pink-50 p-3 text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </span>
          <h3 className="text-base font-medium text-gray-900">Easy Booking</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Choose your service, date, and time in just a few clicks — no calls needed.
          </p>
        </div>

      </section>

      {/* FEATURED WIGS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 flex items-end justify-between">

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

        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {[
            { name: 'Silky Straight', price: 'R1,299', img: 'photo-1522335789203-aabd1fc54bc9' },
            { name: 'Body Wave', price: 'R1,499', img: 'photo-1519699047748-de8e457a634e' },
            { name: 'Deep Curl', price: 'R1,599', img: 'photo-1487412720507-e7ab37603c6f' },
            { name: 'Bone Straight', price: 'R1,199', img: 'photo-1531746020798-e6953c6e8e04' },
          ].map((wig) => (
            <div key={wig.name} className="group cursor-pointer">

              <div className="overflow-hidden rounded-sm bg-gray-100 aspect-[3/4]">
                <img
                  src={`https://images.unsplash.com/${wig.img}?w=400&q=80`}
                  alt={wig.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{wig.name}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{wig.price}</p>
                </div>
                <Link
                  to="/shop"
                  className="rounded-full border border-gray-200 px-4 py-1.5 text-xs hover:border-black hover:bg-black hover:text-white transition-colors"
                >
                  View
                </Link>
              </div>

            </div>
          ))}

        </div>

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

          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">
              The Process
            </span>
            <h2 className="font-serif text-4xl font-light md:text-5xl">
              How it <span className="italic text-pink-600">works</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4">

            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1218] font-serif text-2xl font-light text-white">
                1
              </div>
              <h3 className="text-sm font-medium text-gray-900">Browse & Choose</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Explore our wig collection and pick your perfect style.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1218] font-serif text-2xl font-light text-white">
                2
              </div>
              <h3 className="text-sm font-medium text-gray-900">Book Online</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Select your service, date, and time in just a few clicks.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1218] font-serif text-2xl font-light text-white">
                3
              </div>
              <h3 className="text-sm font-medium text-gray-900">Get Styled</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Come in and let our expert artists work their magic.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-pink-600 font-serif text-2xl font-light text-white">
                4
              </div>
              <h3 className="text-sm font-medium text-gray-900">Slay All Day</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Walk out confident, beautiful, and ready to turn heads.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-pink-50 px-4 py-1 text-xs font-medium uppercase tracking-widest text-pink-600">
            Client Love
          </span>
          <h2 className="font-serif text-4xl font-light md:text-5xl">
            What our <span className="italic text-pink-600">clients</span> say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-sm border border-gray-100 bg-white p-8">
            <p className="font-serif text-3xl text-pink-300">"</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              The install was flawless. I've been getting compliments all week — everyone thinks it's my real hair!
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-xs font-medium text-pink-600">
                TM
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Thandeka M.</p>
                <p className="text-xs text-gray-400">Johannesburg</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-gray-100 bg-white p-8">
            <p className="font-serif text-3xl text-pink-300">"</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Super easy to book online, amazing service, and my wig looks absolutely gorgeous. Will be back!
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-xs font-medium text-pink-600">
                NS
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Nomsa S.</p>
                <p className="text-xs text-gray-400">Cape Town</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-gray-100 bg-white p-8">
            <p className="font-serif text-3xl text-pink-300">"</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Best studio in SA hands down. The quality of the wigs is unmatched and the staff make you feel so comfortable.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-xs font-medium text-pink-600">
                LP
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Lerato P.</p>
                <p className="text-xs text-gray-400">Pretoria</p>
              </div>
            </div>
          </div>

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

        <div className="relative mx-auto max-w-2xl px-6">

          <h2 className="font-serif text-5xl font-light text-white">
            Ready to transform your look?
          </h2>

          <p className="mt-4 text-white/60">
            Book your appointment or explore our wig collection today.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

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

export default Home;