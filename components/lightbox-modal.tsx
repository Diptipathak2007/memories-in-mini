"use client"

import { useEffect } from "react"

interface LightboxModalProps {
  image: string | null
  onClose: () => void
}

export default function LightboxModal({ image, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (image) {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
    }
  }, [image, onClose])

  if (!image) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-card rounded-lg max-w-2xl w-full relative" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-accent transition-colors z-10 bg-background rounded-full p-2"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Container */}
        <div className="relative w-full h-auto">
          <img src={image || "/placeholder.svg"} alt="Enlarged view" className="w-full h-auto rounded-t-lg" />
        </div>

        {/* Polaroid Frame */}
        <div className="p-6 bg-card rounded-b-lg text-center">
          <p className="text-sm text-muted-foreground italic">
            Transform your precious moments into timeless Polaroids
          </p>
        </div>
      </div>
    </div>
  )
}
