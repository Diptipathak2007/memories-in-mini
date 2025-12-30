"use client"

import { Check, Package, Sparkles } from "lucide-react"
import Image from "next/image"

const pricingData = [
  {
    title: "Mini Polaroids",
    size: "3.5 * 5cm",
    
    prices: [
      { set: "Set of 20", price: "₹130" },
      { set: "Set of 30", price: "₹160" },
      { set: "Set of 40", price: "₹180" },
      { set: "Set of 50", price: "₹210" },
      { set: "Set of 60", price: "₹240", bonus: "5 Polaroids FREE! 😍" },
    ],
    color: "bg-pink-50",
    borderColor: "border-[#FF69B4]/20",
  },
  {
    title: "Medium Polaroids",
    size: "6.5 * 8cm",
    
    prices: [
      { set: "Set of 20", price: "₹150" },
      { set: "Set of 30", price: "₹180" },
      { set: "Set of 40", price: "₹200" },
      { set: "Set of 50", price: "₹250" },
      { set: "Set of 60", price: "₹300", bonus: "5 Polaroids FREE! 😍" },
    ],
    color: "bg-pink-50",
    borderColor: "border-[#FF69B4]/20",
  },
  {
    title: "Large Polaroids",
    size: "7.5 * 10cm",
    
    prices: [
      { set: "Set of 20", price: "₹200" },
      { set: "Set of 30", price: "₹240" },
      { set: "Set of 40", price: "₹280" },
      { set: "Set of 50", price: "₹320" },
      { set: "Set of 60", price: "₹360", bonus: "5 Polaroids EXTRA! 😍" },
    ],
    color: "bg-pink-50",
    borderColor: "border-[#FF69B4]/20",
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

export default function Pricing() {
  const titleText = "PRICE CHART".split("")

  return (
    <section id="pricing" className="py-20 px-4 bg-background">
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

          <p className="text-[#FF69B4] mt-4 max-w-2xl mx-auto font-medium italic">
            Hey! Thank-you for contacting memories in mini. Choose the perfect size for your memories.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-5 gap-4 mb-12 flex flex-col">
          {/* Pricing Cards Container - Scrollable on Mobile */}
          <div className="lg:col-span-3 lg:grid lg:grid-cols-3 gap-4 flex overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
            {pricingData.map((category, index) => (
              <div 
                key={index} 
                className={`relative p-4 rounded-2xl border-2 ${category.borderColor} ${category.color} shadow-sm hover:shadow-md transition-shadow flex flex-col flex-shrink-0 w-[280px] lg:w-auto snap-center h-full overflow-hidden`}
              >
                {/* Background Logo */}
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-serif font-bold text-[#FF69B4] mb-1 leading-tight">{category.title}</h3>
                  <p className="text-[10px] text-muted-foreground mb-4">Size: {category.size}</p>
                  
                  <div className="space-y-2.5 flex-grow">
                    {category.prices.map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-foreground/80 font-medium">{item.set}</span>
                          <span className="text-sm font-bold text-accent">{item.price}</span>
                        </div>
                        {item.bonus && (
                          <span className="text-[9px] font-bold text-pink-500 mt-0.5 animate-pulse">
                            {item.bonus}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Indicator - Mobile Only */}
          <div className="flex justify-center gap-1 mb-6 lg:hidden">
            <div className="w-8 h-1 bg-[#FF69B4]/30 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-[#FF69B4] animate-[shimmer_2s_infinite]"></div>
            </div>
            <p className="text-[10px] text-[#FF69B4] font-bold uppercase tracking-widest">Swipe to see sizes</p>
          </div>

          {/* Details Card - Larger */}
          <div className="relative p-6 rounded-2xl border-2 border-dashed border-[#FF69B4]/30 bg-gradient-to-br from-pink-50 to-purple-50 shadow-sm flex flex-col justify-between lg:col-span-2 h-full overflow-hidden">
            {/* Background Logo */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none flex items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={300}
                height={300}
                className="object-contain"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-5">
                <h3 className="text-xl font-serif font-bold text-[#FF69B4] mb-2">Order Details</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                        <Package className="text-pink-500 w-4 h-4" />
                      </div>
                      <div className="text-[#FF69B4]">
                        <p className="text-sm font-bold">Box Packaging </p>
                        <p className="text-xs">+₹5 extra</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="text-purple-500 w-4 h-4" />
                      </div>
                      <div className="text-[#FF69B4]">
                        <p className="text-sm font-bold">Custom Sizes</p>
                        <p className="text-xs">Available on request</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 sm:pt-0 sm:border-l sm:pl-6 border-purple-100">
                    <div className="flex items-center gap-2 text-purple-600 text-sm font-bold">
                      <Check className="w-4 h-4" />
                      <span>No shipping charges ❌</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-600 text-sm font-bold">
                      <Check className="w-4 h-4" />
                      <span>No hidden charges ❌</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-600 text-sm font-bold">
                      <Check className="w-4 h-4" />
                      <span>No extra charges ❌</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center pt-6 border-t border-pink-50 space-y-3">
              <p className="text-base font-serif font-bold text-accent mb-1">Happy shopping 🛍️🛒</p>
              <p className="text-xs text-[#FF69B4] font-medium mb-2">Contact on any of the below links:</p>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/919310484886?text=Hey!%20I%20saw%20your%20price%20chart%20and%20want%20to%20order%20some%20polaroids!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-3 bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white py-3 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://wa.me/919319380940?text=Hey!%20I%20saw%20your%20price%20chart%20and%20want%20to%20order%20some%20polaroids!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-3 bg-[#FF69B4] hover:bg-[#FF69B4]/90 text-white py-3 rounded-full font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
