"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mr-auto" onClick={closeMenu}>
            <div className="relative h-10 w-10 overflow-hidden rounded-md">
              <Image
                src="/logo.png"
                alt="Memories in Mini Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold font-serif text-primary hidden sm:inline-block">
              Memories in Mini
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-sm font-bold text-[#FF69B4] hover:underline transition-all">
              Home
            </Link>
            <Link href="#gallery" className="text-sm font-bold text-[#FF69B4] hover:underline transition-all">
              Gallery
            </Link>
            <Link href="#pricing" className="text-sm font-bold text-[#FF69B4] hover:underline transition-all">
              Pricing
            </Link>
            <Link href="#about" className="text-sm font-bold text-[#FF69B4] hover:underline transition-all">
              About
            </Link>
            <Link href="#ready-to-create-your-memories" className="text-sm font-bold text-[#FF69B4] hover:underline transition-all">
              Order
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground ml-auto"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-bold text-[#FF69B4] hover:underline transition-all py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="#gallery"
              className="text-base font-bold text-[#FF69B4] hover:underline transition-all py-2"
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              href="#pricing"
              className="text-base font-bold text-[#FF69B4] hover:underline transition-all py-2"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-base font-bold text-[#FF69B4] hover:underline transition-all py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#ready-to-create-your-memories"
              className="text-base font-bold text-[#FF69B4] hover:underline transition-all py-2"
              onClick={closeMenu}
            >
              Order
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
