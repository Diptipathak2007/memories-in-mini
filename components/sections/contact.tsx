import { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

const ransomColors = [
  "bg-yellow-200 text-yellow-900",
  "bg-pink-200 text-pink-900",
  "bg-green-200 text-green-900",
  "bg-blue-200 text-blue-900",
  "bg-purple-200 text-purple-900",
  "bg-orange-200 text-orange-900",
  "bg-red-200 text-red-900",
]

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const titleText = "READY TO CREATE?".split("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const openWhatsapp1 = () => {
    window.open(
      "https://wa.me/919310484886?text=Hi%20Memories%20in%20Mini!%20I%20saw%20your%20website%20and%20want%20to%20order%20some%20polaroids.",
      "_blank",
    )
  }

  const openWhatsapp2 = () => {
    window.open(
      "https://wa.me/919319380940?text=Hi%20Memories%20in%20Mini!%20I%20saw%20your%20website%20and%20want%20to%20order%20some%20polaroids.",
      "_blank",
    )
  }

  const openInstagram = () => {
    window.open("https://www.instagram.com/memories.in.mini/", "_blank")
  }

  return (
    <section id="ready-to-create-your-memories" className="relative py-24 px-4 bg-background overflow-hidden">
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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Large Title */}
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start mb-6">
              {titleText.map((letter, i) => (
                <span
                  key={i}
                  className={`ransom-letter !text-3xl md:!text-5xl lg:!text-6xl !px-5 !py-3 ${ransomColors[i % ransomColors.length]} ${
                    i % 2 === 0 ? "rotate-3" : "-rotate-3"
                  } ${letter === " " ? "w-6" : ""}`}
                >
                  {letter}
                </span>
              ))}
            </div>
            
            {/* Curved Hot Pink Line */}
            <div className="flex justify-center lg:justify-start -mt-6 ml-4">
              <svg width="300" height="60" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 30C50 10 150 10 190 30" 
                  stroke="#FF69B4" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  className="animate-pulse"
                />
              </svg>
            </div>

            <p className="text-xl text-[#FF69B4] font-medium italic mt-8 max-w-lg leading-relaxed">
              Let&apos;s turn your precious moments into timeless Polaroids. Reach out today and start your journey with us.
            </p>
          </div>

          {/* Right Side: Vertical Contact Box */}
          <div className="relative p-8 md:p-10 rounded-[2.5rem] border-2 border-[#FF69B4]/30 bg-pink-50/40 backdrop-blur-xl shadow-[0_0_40px_rgba(255,105,180,0.15)] hover:shadow-[0_0_60px_rgba(255,105,180,0.25)] transition-all duration-700 overflow-hidden max-w-md mx-auto lg:ml-auto lg:mr-0">
            {/* Background Logo */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="text-center mb-2">
                <h3 className="text-2xl font-serif font-bold text-[#FF69B4] tracking-tight drop-shadow-sm">PLACE YOUR ORDER ✨</h3>
                <div className="h-1 w-16 bg-[#FF69B4]/30 mx-auto mt-2 rounded-full"></div>
              </div>

              <div className="flex flex-col gap-4">
                <button 
                  onClick={openWhatsapp1} 
                  className="group flex items-center justify-center gap-4 bg-white/60 hover:bg-[#FF69B4] text-[#FF69B4] hover:text-white px-8 py-4 rounded-2xl border-2 border-[#FF69B4]/20 hover:border-transparent shadow-md hover:shadow-[0_0_20px_rgba(255,105,180,0.3)] transition-all duration-300 font-bold w-full"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp (Order 1)</span>
                </button>

                <button 
                  onClick={openWhatsapp2} 
                  className="group flex items-center justify-center gap-4 bg-white/60 hover:bg-[#FF69B4] text-[#FF69B4] hover:text-white px-8 py-4 rounded-2xl border-2 border-[#FF69B4]/20 hover:border-transparent shadow-md hover:shadow-[0_0_20px_rgba(255,105,180,0.3)] transition-all duration-300 font-bold w-full"
                >
                  <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp (Order 2)</span>
                </button>

                <button 
                  onClick={openInstagram} 
                  className="group flex items-center justify-center gap-4 bg-white/60 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#FF69B4] hover:text-white px-8 py-4 rounded-2xl border-2 border-[#FF69B4]/20 hover:border-transparent shadow-md hover:shadow-[0_0_20px_rgba(220,39,67,0.3)] transition-all duration-300 font-bold w-full"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-[#FF69B4]/70 font-bold uppercase tracking-widest mt-2">
                Handcrafted with love 💖
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
