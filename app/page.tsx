"use client"

import { useState } from "react"
import Hero from "@/components/sections/hero"
import Gallery from "@/components/sections/gallery"
import Pricing from "@/components/sections/pricing"
import HowItWorks from "@/components/sections/how-it-works"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import FloatingWhatsapp from "@/components/floating-whatsapp"
import ChatBot from "@/components/chatbot"
import LightboxModal from "@/components/lightbox-modal"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Gallery onImageClick={setSelectedImage} />
      <Pricing />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
      <ChatBot />
      <LightboxModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </main>
  )
}
