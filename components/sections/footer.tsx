import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-pink-50/80 border-t border-[#FF69B4]/20 text-foreground/70 py-12 px-4 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF69B4]/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-[#FF69B4] mb-2">Memories in Mini</h3>
            <div className="relative w-32 h-32 mx-auto md:mx-0 mb-4 rounded-2xl overflow-hidden shadow-sm border border-[#FF69B4]/10">
              <Image
                src="/footer-image.png"
                alt="Memories in Mini Brand"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-foreground/60 italic">Turning moments into timeless Polaroids</p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-sm font-bold text-[#FF69B4] mb-3 uppercase tracking-widest">Get in Touch</p>
            <div className="space-y-2 text-sm">
              <a 
                href="https://www.instagram.com/memories.in.mini/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#FF69B4] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@memories.in.mini</span>
              </a>
              <a 
                href="https://wa.me/919310484886" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#FF69B4] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +91 93104 84886</span>
              </a>
              <a 
                href="https://wa.me/919319380940" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#FF69B4] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +91 93193 80940</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <p className="text-sm font-bold text-[#FF69B4] mb-3 uppercase tracking-widest">Follow Us</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="https://www.instagram.com/memories.in.mini/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-pink-50 text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919310484886" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-pink-50 text-[#FF69B4] hover:bg-[#FF69B4] hover:text-white transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm">
          <p className="font-medium">Made with ❤️ by <span className="text-[#FF69B4]">Memories in Mini</span></p>
          <p className="mt-2 text-xs opacity-60">© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
