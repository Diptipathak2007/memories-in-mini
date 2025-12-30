import Image from "next/image"
import { useState } from "react"

interface GalleryProps {
  onImageClick: (image: string) => void
}

const galleryImages = [
  { id: 1, url: "https://i.pinimg.com/736x/1b/a1/f1/1ba1f19f23a0cf208d6d4536df31bb1c.jpg", caption: "Vintage Memories" },
  { id: 2, url: "https://i.pinimg.com/736x/35/e4/7e/35e47e217c7dd9cd6b1fc5dc36a14e4d.jpg", caption: "Golden Moments" },
  { id: 3, url: "https://i.pinimg.com/1200x/6d/38/d5/6d38d5540b960cff784d8d0eca1b19db.jpg", caption: "Timeless Prints" },
  { id: 4, url: "https://i.pinimg.com/736x/16/3b/ed/163bed5c65a730d8abbd3751e2ee5d2f.jpg", caption: "Aesthetic Vibes" },
  { id: 5, url: "https://i.pinimg.com/736x/90/b8/07/90b80799458f79582cb28507bda3e8c0.jpg", caption: "Sweet Escapes" },
  { id: 6, url: "https://i.pinimg.com/1200x/b4/66/9c/b4669c237608f99049e5c53ed9d44d31.jpg", caption: "Ocean Breeze" },
  { id: 7, url: "https://i.pinimg.com/736x/ce/93/ce/ce93ce4c550d79e59e4550e3bec89e25.jpg", caption: "Cozy Days" },
  { id: 8, url: "https://i.pinimg.com/1200x/59/ba/8f/59ba8f8da03c4fbd4d03c300cc4cc94f.jpg", caption: "Magic Moments" },
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

export default function Gallery({ onImageClick }: GalleryProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const titleText = "OUR WORK".split("")

  return (
    <section id="gallery" className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
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

          <p className="text-[#FF69B4] mt-4 max-w-2xl mx-auto font-medium italic">Turning your favorite digital moments into tangible treasures. Hand-crafted with love, just for you. ✨
            
          </p>
        </div>

        <div className="relative overflow-hidden -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] w-max">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div
                key={`${img.id}-${index}`}
                className="flex-none w-[280px] md:w-[320px] card-polaroid cursor-pointer group relative"
                onMouseEnter={() => setHoveredId(img.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-80 w-full overflow-hidden bg-secondary">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Polaroid Frame Bottom */}
                <div className="bg-card p-6 flex flex-col items-center justify-center">
                  <p className="text-sm font-medium text-foreground/80 font-serif italic">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
