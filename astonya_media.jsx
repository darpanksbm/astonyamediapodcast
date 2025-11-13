// MelRobbinsPodcast_Clone.jsx
import React from "react";

export default function AstonyaMedia() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Header over hero (absolute) */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="w-full px-6 py-6 flex justify-between items-center">
          <img
            src="https://astonya.media/logo.png"
            alt="logo"
            className="h-20 md:h-24 object-contain"
          />
          <nav className="flex space-x-10 bg-white text-black px-10 py-4 rounded-3xl shadow-xl font-semibold text-lg">
            {['Home','Podcast','Blog','About','Contact'].map((label) => (
              <button
                key={label}
                onClick={() => { /* scroll or navigate */ }}
                className="px-4 py-2 rounded-md bg-transparent text-black hover:bg-white hover:text-black transition-colors duration-200 shadow-lg"
                aria-label={label}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full h-[95vh] flex items-end justify-start overflow-hidden">
        <img
          src="https://astonya.media/podcast.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-10 pb-16 max-w-3xl text-left text-white">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Astonya Media Podcast
          </h1>
        </div>
      </section>

<section className="w-full bg-[#f2f2ec] py-24 flex justify-center items-center text-center">
  <h2 className="text-4xl font-semibold text-black leading-snug">
    Create a better life with the<br/>#1 podcast
  </h2>
</section>

      {/* NEWEST EPISODE */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">NEWEST EPISODE</h2>
        <div className="w-full overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://astonya.media/home2.JPG"
            className="w-full object-cover"
            alt="Newest Episode"
          />
        </div>
        <h3 className="text-2xl font-semibold mt-6">
          👉 ज्योतिष से भाग्य और कर्म का सच | Astonya Astrology Podcast | Umang Taneja & Nishant Manchanda
        </h3>
      </section>

      {/* MORE TOP EPISODES */}
      <section id="top" className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">More Top Episodes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://astonya.media/home1.JPG"
                className="w-full object-cover"
                alt={`Top Episode ${i + 1}`}
              />
              <div className="mt-3 text-sm text-gray-700 px-1 pb-4">
                <div className="font-semibold text-xs text-gray-500">EPISODE #{269 + i}</div>
                <div className="font-bold text-base mt-1">Episode Title Placeholder</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH CARD */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold leading-snug">Explore the entire library.<br />Quickly find the episode you’re looking for.</h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto text-lg">
            Unlock the full power of the Astonya Media Podcast archive. Instantly search for any moment, quote, or insight—fast and effortless.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search episodes..."
              className="w-full px-6 py-4 rounded-xl text-black text-lg border border-gray-200 focus:outline-none"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-xl" aria-label="Search">🔍</button>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 text-center font-semibold text-lg">
          {[
            { label: 'ANXIETY', icon: '💡' },
            { label: 'CONFIDENCE', icon: '⭐' },
            { label: 'HABITS', icon: '🔄' },
            { label: 'HAPPINESS', icon: '😊' },
            { label: 'HEALTH', icon: '🏥' },
            { label: 'MOST POPULAR', icon: '📈' },
            { label: 'MOTIVATION', icon: '🔥' },
            { label: 'RELATIONSHIPS', icon: '💛' },
            { label: 'LITTLE MINDS', icon: '🧠' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#f4f2ec] py-8 rounded-2xl shadow-sm hover:shadow-md cursor-pointer border border-[#ece8de] flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      

      {/* WORLD-RENOWNED EXPERTS */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-[#e5dfd3]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <div className="text-sm font-semibold tracking-wide mb-2">EPISODE 235</div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://astonya.media/home1.JPG"
                alt="Expert Episode"
                className="w-full object-cover"
              />
              <div className="bg-[#fdd835] p-6">
                <h3 className="text-xl font-bold">DR. GABOR MATE, MD</h3>
                <p className="text-sm mt-1">Renowned physician, speaker & bestselling author</p>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-6">
              <button className="w-10 h-10 rounded-full bg-[#e8e4d9] flex items-center justify-center text-xl" aria-label="prev">←</button>
              <div className="flex gap-2 text-gray-400 text-lg">
                <span>●</span><span>●</span><span>●</span><span>●</span><span>●</span>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#e8e4d9] flex items-center justify-center text-xl" aria-label="next">→</button>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4">World-renowned Experts</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mel researches and hand-selects the most interesting and accomplished experts in science and human behavior and engages with them each week to turn science-backed wisdom into practical advice.
            </p>
          </div>

        </div>
      </section>

      {/* EPISODE FILTER + LIST */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16 border-t border-[#e5dfd3]">

        <div className="space-y-4 text-lg">
          <h3 className="font-bold text-gray-800 text-sm tracking-widest mb-4">TOPIC</h3>
          {[
            'Relationships (91)',
            'Mental & Emotional Health (80)',
            'Happiness (74)',
            'Manifesting & Mindset (64)',
            'Tools & Life Hacks (59)',
            'Brain & Neuroscience (42)',
            'Confidence (41)',
            'Health (37)',
            'Career & Work (35)',
            'Most Popular (34)'
          ].map((t) => (
            <label key={t} className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5" />
              <span>{t}</span>
            </label>
          ))}
          <button className="text-black underline mt-2">Show more</button>
        </div>

        <div className="lg:col-span-2 space-y-10">
          <h2 className="text-3xl font-bold mb-6">All episodes</h2>
          {[342,341,340,339,338,337,336,335].map((n) => (
            <div key={n} className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 border-b border-gray-200">
              <div className="text-sm font-semibold text-gray-500">EPISODE #{n}</div>
              <div>
                <h3 className="text-xl font-bold leading-snug cursor-pointer hover:underline">Episode Title Placeholder #{n}</h3>
                <p className="text-gray-700 mt-2 text-base">Placeholder description for episode {n}. This will be replaced with real dynamic text later.</p>
              </div>
              <img src="https://astonya.media/home1.JPG" alt="Episode Thumb" className="w-full h-32 object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      {/* TOPICS + EPISODES (additional lists) */}

     

      {/* FOOTER */}
      {/* PODCAST CTA SECTION */}
<section className="w-full bg-[#f2f2ec] py-24 text-center">
  <h2 className="text-4xl font-semibold text-black leading-snug">Create a Better Life With the #1 Podcast</h2>
  <p className="mt-4 text-gray-700 text-lg">New episodes released every Monday to start your week and Thursdays to get you through it.</p>

  <h3 className="mt-10 text-2xl font-semibold text-gray-900">Listen, watch, or subscribe:</h3>

  <div className="mt-10 flex flex-wrap justify-center gap-6">
    <a className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl text-lg font-medium cursor-pointer">
      <span>🎧</span> Listen on Spotify
    </a>
    <a className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl text-lg font-medium cursor-pointer">
      <span>📱</span> Listen on Apple Podcasts
    </a>
    <a className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl text-lg font-medium cursor-pointer">
      <span>🎵</span> Listen on Amazon Music
    </a>
    <a className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl text-lg font-medium cursor-pointer">
      <span>▶️</span> Watch on YouTube
    </a>
  </div>
</section>

{/* NEWSLETTER SECTION */}
<section className="w-full max-w-4xl mx-auto my-20 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-3xl p-16 text-center shadow-xl">
  <h2 className="text-4xl font-bold leading-snug text-black">1 Million Readers.<br/>1 Life-Changing Newsletter</h2>
  <p className="mt-4 text-gray-800 text-lg">Simple and Straight-to-the-Point...<br/>Just Like Astonya Media.</p>

  <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
    <input type="text" placeholder="First Name*" className="w-full md:w-1/3 px-6 py-4 rounded-xl text-black text-lg border border-gray-300 focus:outline-none" />
    <input type="email" placeholder="Email Address*" className="w-full md:w-1/3 px-6 py-4 rounded-xl text-black text-lg border border-gray-300 focus:outline-none" />
  </div>

  <button className="mt-8 bg-black text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-900">SIGN ME UP</button>
</section>

<footer className="w-full bg-[#f2f2ec] py-20 text-black">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">

    <div>
      <img
            src="https://astonya.media/logo.png"
            alt="logo"
            className="h-20 md:h-24 object-contain"
          />
    </div>

    <div>
      <h4 className="font-bold mb-4">Topics</h4>
      <ul className="space-y-2 text-gray-700">
        <li>Anxiety</li>
        <li>Confidence</li>
        <li>Habits</li>
        <li>Happiness</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold mb-4">Podcast</h4>
      <ul className="space-y-2 text-gray-700">
        <li>Latest Episodes</li>
        <li>Top Episodes</li>
      </ul>
    </div>

    <div>
      <h4 className="font-bold mb-4">Home</h4>
    </div>

    <div>
      <h4 className="font-bold mb-4">About</h4>
      <ul className="space-y-2 text-gray-700">
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>

  </div>

  
</footer>

{/* BOTTOM LEGAL + SOCIAL SECTION */}
<section className="w-full bg-[#f2f2ec] pt-10 pb-6 text-black border-t border-gray-300">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Social Icons */}
    <div className="flex gap-6 text-2xl">
      <a href="https://astonya.media" aria-label="Instagram" className="hover:opacity-80" title="Instagram">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#111827" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="3.2" stroke="#111827" strokeWidth="1.5" fill="none"/>
          <circle cx="17.5" cy="6.5" r="0.6" fill="#111827" />
        </svg>
      </a>

      <a href="https://astonya.media" aria-label="Facebook" className="hover:opacity-80" title="Facebook">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M15 8h2.5V4.5H15c-2.48 0-4 1.72-4 4.45V11H9v3h2v7h3v-7h2.5L17 11h-2V9.2C15 8.54 15 8 15 8z" fill="#111827"/>
        </svg>
      </a>

      <a href="https://astonya.media" aria-label="X (Twitter)" className="hover:opacity-80" title="X">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M20 7.5c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.6.4-1.3.8-2 1C16.9 6 16 5.5 15 5.5c-1.8 0-3.2 1.5-3.2 3.3 0 .3 0 .6.1.9-2.6-.1-4.9-1.4-6.4-3.3-.3.6-.4 1.2-.4 1.9 0 1.4.7 2.6 1.8 3.3-.6 0-1.2-.2-1.8-.5v.1c0 1.7 1.2 3.2 2.8 3.6-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.2 1.6 2 3 2-1.1.8-2.5 1.2-4 1.2-.3 0-.6 0-.9-.1 1.3.8 2.9 1.2 4.5 1.2 5.4 0 8.3-4.6 8.3-8.6v-.4c.6-.4 1.1-1 1.5-1.7-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8z" fill="#111827"/>
        </svg>
      </a>

      <a href="https://astonya.media" aria-label="LinkedIn" className="hover:opacity-80" title="LinkedIn">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="2" stroke="#111827" strokeWidth="1.2" fill="none"/>
          <path d="M7.5 10.5H5.5V18.5H7.5V10.5Z" fill="#111827"/>
          <circle cx="6.5" cy="7.5" r="0.9" fill="#111827"/>
          <path d="M11 10.5H9V18.5H11V14.3C11 12.8 13 12.5 13 14.3V18.5H15V13.6C15 10.8 11.9 10.6 11 12.2V10.5Z" fill="#111827"/>
        </svg>
      </a>
    </div>

    {/* Right copyright */}
    <div className="flex flex-wrap gap-6 text-sm underline text-gray-700">
      <span>© 2025 Astonya Media Podcast. All rights reserved.</span>
      <span>Developed by KSBM Infotech</span>
    </div>

  </div>
</section>

    </div>
  );
}
