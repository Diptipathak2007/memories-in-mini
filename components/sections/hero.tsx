"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
  }

  const ransomColors = [
    "bg-yellow-200 text-yellow-900",
    "bg-pink-200 text-pink-900",
    "bg-green-200 text-green-900",
    "bg-blue-200 text-blue-900",
    "bg-purple-200 text-purple-900",
    "bg-orange-200 text-orange-900",
    "bg-red-200 text-red-900",
  ]

  const brandName = "MEMORIES".split("")
  const subTitle = "IN MINI".split("")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Gingham Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/gingham-bg.png"
          alt="Gingham Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Fairy Lights Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {mounted && [...Array(20)].map((_, i) => (
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

      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          {/* Left Side: Titles & Main Frame & Polaroids */}
          <div className="relative w-full lg:w-2/3">
            {/* Ransom Note Title: MEMORIES */}
            <div className="mb-4 flex flex-wrap justify-center lg:justify-start">
              {brandName.map((letter, i) => (
                <span
                  key={i}
                  className={`ransom-letter ${ransomColors[i % ransomColors.length]} ${
                    i % 2 === 0 ? "rotate-3" : "-rotate-3"
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Ransom Note Title: IN MINI */}
            <div className="mb-12 flex flex-wrap justify-center lg:justify-start">
              {subTitle.map((letter, i) => (
                <span
                  key={i}
                  className={`ransom-letter ${ransomColors[(i + 3) % ransomColors.length]} ${
                    i % 2 === 0 ? "-rotate-2" : "rotate-2"
                  } ${letter === " " ? "w-4" : ""}`}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Main Torn Paper Frame */}
            <div className="relative">
              <div className="torn-paper max-w-xl mx-auto lg:mx-0 bg-white/80">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border-8 border-white shadow-inner">
                  <Image
                    src="https://i.pinimg.com/1200x/a5/ca/95/a5ca954446b606436e316877b9872ac8.jpg"
                    alt="Main Hero Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Polaroid 1 - Top Right of Frame */}
              <div className="absolute -top-20 -right-4 md:-right-12 z-20 w-40 md:w-56 rotate-6 hover:rotate-0 transition-transform">
                <div className="tape-effect"></div>
                <div className="polaroid-frame">
                  <div className="relative aspect-square w-full">
                    <Image 
                      src="https://i.pinimg.com/736x/90/b8/07/90b80799458f79582cb28507bda3e8c0.jpg" 
                      alt="Polaroid 1" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>

              {/* Floating Polaroid 2 - Middle Right of Frame */}
              <div className="absolute top-[40%] -right-8 md:-right-24 -translate-y-1/2 z-10 w-36 md:w-48 -rotate-12 hover:rotate-0 transition-transform hidden md:block">
                <div className="tape-effect !bg-blue-200/60"></div>
                <div className="polaroid-frame">
                  <div className="relative aspect-square w-full">
                    <Image 
                      src="https://i.pinimg.com/1200x/b4/66/9c/b4669c237608f99049e5c53ed9d44d31.jpg" 
                      alt="Polaroid 2" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>

              {/* Floating Polaroid 3 - Bottom Right of Frame */}
              <div className="absolute bottom-4 -right-4 md:-right-12 z-20 w-40 md:w-52 rotate-3 hover:rotate-0 transition-transform hidden md:block">
                <div className="tape-effect !bg-green-200/60"></div>
                <div className="polaroid-frame">
                  <div className="relative aspect-square w-full">
                    <Image 
                      src="https://i.pinimg.com/736x/4a/6c/a5/4a6ca5104796d42467ee71140ae52acc.jpg" 
                      alt="Polaroid 3" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Layered Polaroids & Button */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end justify-center pt-12">
            <div className="relative w-full max-w-[300px] aspect-[4/5]">
              {/* Bottom Polaroid */}
              <div className="absolute inset-0 rotate-6 translate-x-4 translate-y-4 opacity-70">
                <div className="polaroid-frame w-full h-full">
                  <div className="relative aspect-square w-full">
                    <Image 
                      src="https://i.pinimg.com/736x/1b/a1/f1/1ba1f19f23a0cf208d6d4536df31bb1c.jpg" 
                      alt="Layered Polaroid Bottom" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Middle Polaroid */}
              <div className="absolute inset-0 -rotate-3 translate-x-2 translate-y-2 opacity-85">
                <div className="polaroid-frame w-full h-full">
                  <div className="relative aspect-square w-full">
                    <Image 
                      src="https://i.pinimg.com/736x/35/e4/7e/35e47e217c7dd9cd6b1fc5dc36a14e4d.jpg" 
                      alt="Layered Polaroid Middle" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>

              {/* Top Polaroid */}
              <div className="absolute inset-0 rotate-2 shadow-2xl">
                <div className="tape-effect !bg-pink-300/60"></div>
                <div className="polaroid-frame w-full h-full">
                  <div className="relative aspect-square w-full">
                    <Image 
                      src="https://i.pinimg.com/1200x/6d/38/d5/6d38d5540b960cff784d8d0eca1b19db.jpg" 
                      alt="Layered Polaroid Top" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* View Gallery Button below layered polaroids */}
            <div className="mt-12 w-full max-w-[300px]">
              <Button 
                onClick={scrollToGallery}
                className="w-full bg-pink-400 hover:bg-pink-500 text-white rounded-full py-6 text-xl font-bold shadow-lg transform transition-transform hover:scale-105"
              >
                View Gallery
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
