"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const ransomColors = [
  "bg-yellow-200 text-yellow-900",
  "bg-pink-200 text-pink-900",
  "bg-green-200 text-green-900",
  "bg-blue-200 text-blue-900",
  "bg-purple-200 text-purple-900",
  "bg-orange-200 text-orange-900",
  "bg-red-200 text-red-900",
]

export default function About() {
  const [mounted, setMounted] = useState(false)
  const titleText = "ABOUT US".split("")

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="relative py-24 px-4 bg-background overflow-hidden">
      {/* Fairy Lights Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(15)].map((_, i) => (
          <div
            key={i}
            className="fairy-light"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              backgroundColor: i % 3 === 0 ? "#FFFACD" : i % 3 === 1 ? "#FFF0F5" : "#FFFFFF",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center mb-4">
            {titleText.map((letter, i) => (
              <span
                key={i}
                className={`ransom-letter ${ransomColors[i % ransomColors.length]} ${
                  i % 2 === 0 ? "rotate-3" : "-rotate-3"
                } ${letter === " " ? "w-4" : ""}`}
              >
                {letter}
              </span>
            ))}
          </div>
          
          {/* Curved Hot Pink Line */}
          <div className="flex justify-center -mt-2">
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M10 30C50 10 150 10 190 30" 
                stroke="#FF69B4" 
                strokeWidth="4" 
                strokeLinecap="round" 
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Side: Image (Hidden on Mobile) */}
          <div className="hidden lg:block relative group">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-[#FF69B4]/20 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/about-image.png"
                alt="About Memories in Mini"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-pink-200/60 -rotate-3 z-20 backdrop-blur-sm border border-white/30"></div>
          </div>

          {/* Right Side: Review Form */}
          <div className="relative p-8 md:p-10 rounded-3xl border-2 border-[#FF69B4]/30 bg-pink-50/30 backdrop-blur-xl shadow-[0_0_30px_rgba(255,105,180,0.15)] hover:shadow-[0_0_50px_rgba(255,105,180,0.25)] transition-all duration-700 overflow-hidden">
            {/* Background Logo */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none flex items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={350}
                height={350}
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold text-[#FF69B4] mb-6 text-center drop-shadow-sm">SHARE YOUR EXPERIENCE</h3>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const review = formData.get('review');
                  const rating = formData.get('rating');
                  window.location.href = `mailto:memoriesinmini143@gmail.com?subject=New Review from ${name}&body=Rating: ${rating} Stars%0D%0A%0D%0AReview: ${review}`;
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-[10px] font-bold text-[#FF69B4] mb-1.5 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 rounded-2xl border border-[#FF69B4]/20 bg-white/20 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF69B4]/30 transition-all placeholder:text-pink-300 text-[#FF69B4] caret-[#FF69B4] font-medium"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-[#FF69B4] mb-1.5 uppercase tracking-widest ml-1">Rating</label>
                  <select 
                    name="rating"
                    className="w-full px-4 py-3 rounded-2xl border border-[#FF69B4]/20 bg-white/20 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF69B4]/30 transition-all text-[#FF69B4] font-medium appearance-none cursor-pointer"
                  >
                    <option value="5" className="text-[#FF69B4]">💖💖💖💖💖 (Excellent)</option>
                    <option value="4" className="text-[#FF69B4]">💖💖💖💖 (Great)</option>
                    <option value="3" className="text-[#FF69B4]">💖💖💖 (Good)</option>
                    <option value="2" className="text-[#FF69B4]">💖💖 (Fair)</option>
                    <option value="1" className="text-[#FF69B4]">💖 (Poor)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#FF69B4] mb-1.5 uppercase tracking-widest ml-1">Your Story</label>
                  <textarea 
                    name="review"
                    required
                    rows={4}
                    placeholder="Tell us how you liked your polaroids..."
                    className="w-full px-4 py-3 rounded-2xl border border-[#FF69B4]/20 bg-white/20 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF69B4]/30 transition-all resize-none placeholder:text-pink-300 text-[#FF69B4] caret-[#FF69B4] font-medium"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white font-bold py-4 rounded-2xl shadow-lg transform hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  Send Review via Email 💌
                </button>
                <p className="text-[10px] text-center text-[#FF69B4] font-bold">
                  Your review will be sent to us for verification before being posted!
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
