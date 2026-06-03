import React, { useState } from 'react'

const SERVICES = [
  { category: 'Installation', items: ['Lace Front Install — R450', 'Full Lace Install — R650', 'Glueless Install — R350'] },
  { category: 'Styling', items: ['Wig Curl & Set — R280', 'Colour & Toning — R550', 'Blowout & Press — R200'] },
  { category: 'Maintenance', items: ['Wig Wash & Condition — R150', 'Lace Repair & Re-glue — R250', 'Wig Customisation — R380'] },
]

const STYLISTS = ['No preference', 'Aisha Dlamini', 'Lerato Khumalo', 'Nandi Zulu']

const TIMES = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const STEPS = ['Service', 'Date & Time', 'Your Details', 'Confirm']

function Booking() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    service: '',
    stylist: 'No preference',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const [errors, setErrors] = useState({})

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validateStep = () => {
    const newErrors = {}

    if (step === 0 && !form.service) newErrors.service = 'Please select a service'
    if (step === 1) {
      if (!form.date) newErrors.date = 'Please select a date'
      if (!form.time) newErrors.time = 'Please select a time'
    }
    if (step === 2) {
      if (!form.name.trim()) newErrors.name = 'Name is required'
      if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!form.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const next = () => {
    if (validateStep()) setStep((s) => s + 1)
  }

  const back = () => setStep((s) => s - 1)

  const submit = () => {
    setSubmitted(true)
  }

  // Get today's date in YYYY-MM-DD for min date
  const today = new Date().toISOString().split('T')[0]

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="max-w-md text-center">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h2 className="font-serif text-4xl font-light text-gray-900">You're booked!</h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Thanks <span className="font-medium text-gray-900">{form.name}</span>! Your appointment has been received.
            We'll send a confirmation to <span className="font-medium text-gray-900">{form.email}</span> shortly.
          </p>

          <div className="mt-8 rounded-sm border border-gray-100 bg-gray-50 p-6 text-left">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-400">Booking Summary</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Service</span>
                <span className="font-medium text-gray-900">{form.service.split(' — ')[0]}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Stylist</span>
                <span className="font-medium text-gray-900">{form.stylist}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date</span>
                <span className="font-medium text-gray-900">{form.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Time</span>
                <span className="font-medium text-gray-900">{form.time}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => { setSubmitted(false); setStep(0); setForm({ service: '', stylist: 'No preference', date: '', time: '', name: '', phone: '', email: '', notes: '' }) }}
            className="mt-6 rounded-full border border-gray-200 px-6 py-3 text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Book another appointment
          </button>

        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-[#1a1218] px-6 py-16 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-pink-300">
          — Reserve Your Slot —
        </p>
        <h1 className="font-serif text-5xl font-light leading-tight text-white md:text-6xl">
          Book an <span className="italic text-pink-300">appointment</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
          Choose your service, pick a time, and let us take care of the rest.
        </p>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-2xl px-6 py-16">

        {/* STEPPER */}
        <div className="mb-12 flex items-center justify-between">
          {STEPS.map((label, i) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                  i < step
                    ? 'bg-pink-600 text-white'
                    : i === step
                    ? 'bg-[#1a1218] text-white'
                    : 'border border-gray-200 text-gray-400'
                }`}>
                  {i < step ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={`hidden text-xs sm:block ${i === step ? 'font-medium text-gray-900' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`h-px flex-1 mx-3 transition-colors ${i < step ? 'bg-pink-600' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* STEP 0 — SERVICE */}
        {step === 0 && (
          <div>
            <h2 className="font-serif text-3xl font-light text-gray-900">Select a service</h2>
            <p className="mt-2 text-sm text-gray-400">Choose the service you'd like to book.</p>

            <div className="mt-8 space-y-6">
              {SERVICES.map((group) => (
                <div key={group.category}>
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">{group.category}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <button
                        key={item}
                        onClick={() => update('service', item)}
                        className={`flex w-full items-center justify-between rounded-sm border px-5 py-4 text-left text-sm transition-colors ${
                          form.service === item
                            ? 'border-pink-600 bg-pink-50 text-gray-900'
                            : 'border-gray-100 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <span>{item.split(' — ')[0]}</span>
                        <span className={`text-xs font-medium ${form.service === item ? 'text-pink-600' : 'text-gray-400'}`}>
                          {item.split(' — ')[1]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {errors.service && <p className="mt-3 text-xs text-red-500">{errors.service}</p>}

            {/* STYLIST */}
            <div className="mt-8">
              <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400">
                Preferred Stylist
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {STYLISTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => update('stylist', s)}
                    className={`rounded-sm border px-3 py-2.5 text-xs transition-colors ${
                      form.stylist === s
                        ? 'border-pink-600 bg-pink-50 text-pink-600 font-medium'
                        : 'border-gray-100 text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* STEP 1 — DATE & TIME */}
        {step === 1 && (
          <div>
            <h2 className="font-serif text-3xl font-light text-gray-900">Pick a date & time</h2>
            <p className="mt-2 text-sm text-gray-400">Choose when you'd like to come in.</p>

            <div className="mt-8">
              <label className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400">
                Date
              </label>
              <input
                type="date"
                min={today}
                value={form.date}
                onChange={(e) => update('date', e.target.value)}
                className={`w-full rounded-sm border px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-pink-400 ${
                  errors.date ? 'border-red-300' : 'border-gray-200'
                }`}
              />
              {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
            </div>

            <div className="mt-6">
              <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-gray-400">
                Time
              </label>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => update('time', t)}
                    className={`rounded-sm border py-3 text-sm transition-colors ${
                      form.time === t
                        ? 'border-pink-600 bg-pink-50 text-pink-600 font-medium'
                        : 'border-gray-100 text-gray-500 hover:border-gray-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.time && <p className="mt-2 text-xs text-red-500">{errors.time}</p>}
            </div>

            {/* SUMMARY SO FAR */}
            {form.service && (
              <div className="mt-8 rounded-sm border border-gray-100 bg-gray-50 px-5 py-4">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400">Selected</p>
                <p className="mt-1 text-sm font-medium text-gray-900">{form.service.split(' — ')[0]}</p>
                <p className="text-xs text-gray-400">with {form.stylist}</p>
              </div>
            )}

          </div>
        )}

        {/* STEP 2 — DETAILS */}
        {step === 2 && (
          <div>
            <h2 className="font-serif text-3xl font-light text-gray-900">Your details</h2>
            <p className="mt-2 text-sm text-gray-400">So we know who's coming in.</p>

            <div className="mt-8 space-y-5">

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Thandeka Mokoena"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={`w-full rounded-sm border px-4 py-3 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors focus:border-pink-400 ${
                    errors.name ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-gray-400">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 071 000 0000"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={`w-full rounded-sm border px-4 py-3 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors focus:border-pink-400 ${
                    errors.phone ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. you@email.com"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={`w-full rounded-sm border px-4 py-3 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors focus:border-pink-400 ${
                    errors.email ? 'border-red-300' : 'border-gray-200'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-gray-400">
                  Notes <span className="normal-case tracking-normal text-gray-300">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Any special requests or things we should know..."
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  className="w-full rounded-sm border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-300 outline-none transition-colors focus:border-pink-400 resize-none"
                />
              </div>

            </div>
          </div>
        )}

        {/* STEP 3 — CONFIRM */}
        {step === 3 && (
          <div>
            <h2 className="font-serif text-3xl font-light text-gray-900">Confirm booking</h2>
            <p className="mt-2 text-sm text-gray-400">Double-check your details before confirming.</p>

            <div className="mt-8 divide-y divide-gray-100 rounded-sm border border-gray-100">

              <div className="px-6 py-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">Service</p>
                <p className="text-sm font-medium text-gray-900">{form.service.split(' — ')[0]}</p>
                <p className="mt-0.5 text-xs text-gray-400">{form.service.split(' — ')[1]} · with {form.stylist}</p>
              </div>

              <div className="px-6 py-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">Date & Time</p>
                <p className="text-sm font-medium text-gray-900">{form.date}</p>
                <p className="mt-0.5 text-xs text-gray-400">{form.time}</p>
              </div>

              <div className="px-6 py-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-400">Your Details</p>
                <p className="text-sm font-medium text-gray-900">{form.name}</p>
                <p className="mt-0.5 text-xs text-gray-400">{form.phone} · {form.email}</p>
                {form.notes && <p className="mt-2 text-xs text-gray-500 italic">"{form.notes}"</p>}
              </div>

            </div>

            <p className="mt-5 text-xs text-gray-400">
              By confirming, you agree to our cancellation policy. A confirmation will be sent to your email.
            </p>

          </div>
        )}

        {/* NAV BUTTONS */}
        <div className="mt-10 flex items-center justify-between">

          {step > 0 ? (
            <button
              onClick={back}
              className="rounded-full border border-gray-200 px-6 py-3 text-sm text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < STEPS.length - 1 ? (
            <button
              onClick={next}
              className="rounded-full bg-[#1a1218] px-8 py-3 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={submit}
              className="rounded-full bg-pink-600 px-8 py-3 text-sm font-medium text-white hover:bg-pink-700 transition-colors"
            >
              Confirm Booking
            </button>
          )}

        </div>

      </section>

    </div>
  )
}

export default Booking