import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function FloatingWhatsapp() {
  const [showOptions, setShowOptions] = useState(false)

  const openWhatsapp1 = () => {
    window.open(
      "https://wa.me/919310484886?text=Hi%20Memories%20in%20Mini!%20I%20saw%20your%20website%20and%20want%20to%20order%20some%20polaroids.",
      "_blank",
    )
    setShowOptions(false)
  }

  const openWhatsapp2 = () => {
    window.open(
      "https://wa.me/919319380940?text=Hi%20Memories%20in%20Mini!%20I%20saw%20your%20website%20and%20want%20to%20order%20some%20polaroids.",
      "_blank",
    )
    setShowOptions(false)
  }

  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-start gap-3 z-50">
      {showOptions && (
        <div className="flex flex-col gap-2 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <p className="text-[10px] text-[#FF69B4] font-bold bg-white px-2 py-1 rounded shadow-sm border border-pink-50 self-start">Contact us on:</p>
          <button
            onClick={openWhatsapp1}
            className="bg-white text-[#FF69B4] px-4 py-2 rounded-full shadow-lg border border-pink-100 font-bold text-sm hover:bg-pink-50 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (Order 1)</span>
          </button>
          <button
            onClick={openWhatsapp2}
            className="bg-white text-[#FF69B4] px-4 py-2 rounded-full shadow-lg border border-pink-100 font-bold text-sm hover:bg-pink-50 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (Order 2)</span>
          </button>
        </div>
      )}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="w-14 h-14 bg-[#FF69B4] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Chat with us on WhatsApp"
      >
        {showOptions ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  )
}
