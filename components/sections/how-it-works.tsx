"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const steps = [
  {
    number: "1",
    title: "Choose Your Style",
    description: "Select from our collection of Polaroid styles and finishes.",
    
    image: "https://i.pinimg.com/736x/6b/e5/d0/6be5d0a27dda7d97144aa1456e01080d.jpg",
  },
  {
    number: "2",
    title: "Contact Us",
    description: "Reach out on WhatsApp or Instagram with your requirements.",
    
    image: "https://i.pinimg.com/736x/1b/a1/f1/1ba1f19f23a0cf208d6d4536df31bb1c.jpg",
  },
  {
    number: "3",
    title: "Share Your Moments",
    description: "Send us your favorite photos and customization details.",
    
    image: "https://i.pinimg.com/736x/35/e4/7e/35e47e217c7dd9cd6b1fc5dc36a14e4d.jpg",
  },
  {
    number: "4",
    title: "Receive Magic",
    description: "Get your handcrafted Polaroid memories delivered with care.",
    
    image: "https://i.pinimg.com/1200x/6d/38/d5/6d38d5540b960cff784d8d0eca1b19db.jpg",
  },
]

const ransomColors = [
  "bg-yellow-200 text-yellow-900",
  "bg-pink-200 text-pink-900",
  "bg-green-200 text-green-900",
  "bg-blue-200 text-blue-900",
  "bg-purple-200 text-purple-900",
  "bg-orange-200 text-orange-900",
  "bg-red-200 text-red-900",
]

export default function HowItWorks() {
  const [mounted, setMounted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const titleText = "HOW IT WORKS".split("")

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section id="how-it-works" className="relative py-24 px-4 bg-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="https://i.pinimg.com/736x/9e/d0/19/9ed0195d7ad5b4c2bd8989bc237ee00e.jpg"
          alt="Lights Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Fairy Lights Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(25)].map((_, i) => (
          <div
            key={i}
            className="fairy-light"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 6}px`,
              height: `${Math.random() * 8 + 6}px`,
              backgroundColor: i % 3 === 0 ? "#FFFACD" : i % 3 === 1 ? "#FFF0F5" : "#FFFFFF",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
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

          <p className="text-[#FF69B4] mt-6 max-w-2xl mx-auto font-medium italic">
            Your journey from digital pixels to physical memories is simple and magical.
          </p>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex lg:hidden justify-between items-center mb-8 px-4">
          <button 
            onClick={prevStep}
            className="w-10 h-10 rounded-full bg-white/80 border border-pink-100 flex items-center justify-center text-[#FF69B4] shadow-sm active:scale-90 transition-transform"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentStep ? "bg-[#FF69B4] w-4" : "bg-pink-200"}`}
              />
            ))}
          </div>
          <button 
            onClick={nextStep}
            className="w-10 h-10 rounded-full bg-white/80 border border-pink-100 flex items-center justify-center text-[#FF69B4] shadow-sm active:scale-90 transition-transform"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative group transition-all duration-500 ${
                index === currentStep ? "block" : "hidden lg:block"
              }`}
            >
              <div className="relative p-8 rounded-3xl border-2 border-[#FF69B4]/20 hover:border-[#FF69B4]/50 bg-pink-50/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,105,180,0.1)] hover:shadow-[0_0_40px_rgba(255,105,180,0.4)] transition-all duration-700 flex flex-col items-center text-center h-full overflow-hidden">
                {/* Background Logo */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF69B4] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md transform group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-[#FF69B4] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow (Desktop only, except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF69B4]/30">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
