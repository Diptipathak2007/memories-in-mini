"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react"
import Image from "next/image"

interface Message {
  id: string
  text: string
  sender: "bot" | "user"
  timestamp: Date
}

const KNOWLEDGE_BASE = {
  pricing: {
    mini: "Mini Polaroids (3.5 * 5cm):\n- Set of 20: ₹130\n- Set of 30: ₹160\n- Set of 40: ₹180\n- Set of 50: ₹210\n- Set of 60: ₹240 (5 Polaroids FREE! 😍)",
    medium: "Medium Polaroids (6.5 * 8cm):\n- Set of 20: ₹150\n- Set of 30: ₹180\n- Set of 40: ₹200\n- Set of 50: ₹250\n- Set of 60: ₹300 (5 Polaroids FREE! 😍)",
    large: "Large Polaroids (7.5 * 10cm):\n- Set of 20: ₹200\n- Set of 30: ₹240\n- Set of 40: ₹280\n- Set of 50: ₹320\n- Set of 60: ₹360 (5 Polaroids EXTRA! 😍)",
    general: "We have 3 sizes: Mini, Medium, and Large. Prices start from ₹130 for a set of 20 Mini Polaroids! Check our Price Chart for more details. ✨"
  },
  shipping: "Good news! We have NO shipping charges, NO hidden charges, and NO extra charges! ❌📦",
  packaging: "We offer beautiful Box Packaging for just ₹5 extra! It makes your memories even more special. 🎁",
  howToOrder: "Ordering is easy! \n1. Choose your size and set.\n2. Send your photos to us on WhatsApp or Instagram.\n3. We'll handle the rest! \nCheck out the 'How It Works' section for a step-by-step guide. 🛍️",
  contact: "You can reach us on WhatsApp at +91 93104 84886 or +91 93193 80940, or DM us on Instagram @memories.in.mini! 📱",
  about: "Memories in Mini is all about turning your precious moments into timeless Polaroids. We're a small business dedicated to making your memories last forever! 💖",
  deliveryTime: "We usually deliver within 5-7 business days! We'll keep you updated on your order status. 🚚✨",
  trust: "You can absolutely trust us! 💖 We are a dedicated small business with many happy customers. You can check our Instagram @memories.in.mini to see our work and customer highlights! ✨"
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm Mini, your memory assistant. ✨ How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const response = getBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes("price") || lowerInput.includes("cost") || lowerInput.includes("how much")) {
      if (lowerInput.includes("mini")) return KNOWLEDGE_BASE.pricing.mini
      if (lowerInput.includes("medium")) return KNOWLEDGE_BASE.pricing.medium
      if (lowerInput.includes("large")) return KNOWLEDGE_BASE.pricing.large
      return KNOWLEDGE_BASE.pricing.general
    }

    if (lowerInput.includes("time") || lowerInput.includes("how long") || lowerInput.includes("when") || lowerInput.includes("date")) {
      if (lowerInput.includes("delivery") || lowerInput.includes("order") || lowerInput.includes("receive")) {
        return KNOWLEDGE_BASE.deliveryTime
      }
    }
    
    if (lowerInput.includes("shipping") || lowerInput.includes("charge") || lowerInput.includes("free")) {
      if (lowerInput.includes("delivery") || lowerInput.includes("shipping") || lowerInput.includes("how much")) {
        return KNOWLEDGE_BASE.shipping
      }
    }
    
    if (lowerInput.includes("package") || lowerInput.includes("box")) {
      return KNOWLEDGE_BASE.packaging
    }
    
    if (lowerInput.includes("order") || lowerInput.includes("how to")) {
      return KNOWLEDGE_BASE.howToOrder
    }
    
    if (lowerInput.includes("contact") || lowerInput.includes("whatsapp") || lowerInput.includes("instagram") || lowerInput.includes("reach")) {
      return KNOWLEDGE_BASE.contact
    }
    
    if (lowerInput.includes("about") || lowerInput.includes("who are you")) {
      return KNOWLEDGE_BASE.about
    }

    if (lowerInput.includes("trust") || lowerInput.includes("safe") || lowerInput.includes("legit") || lowerInput.includes("scam")) {
      return KNOWLEDGE_BASE.trust
    }
    
    if (lowerInput.includes("hi") || lowerInput.includes("hello") || lowerInput.includes("hey")) {
      return "Hello! I'm here to help you create beautiful memories. What would you like to know about our Polaroids? 😊"
    }

    if (lowerInput.includes("thank")) {
      return "You're very welcome! Let me know if you have any more questions. Happy memory making! 💖"
    }

    return "I'm not quite sure about that, but I'd love to help! Please reach out to us directly on WhatsApp at +91 93104 84886 or +91 93193 80940 for more details. ✨"
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(255,105,180,0.2)] border border-[#FF69B4]/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] p-6 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Mini Assistant</h3>
                <p className="text-[10px] opacity-80">Online & ready to help ✨</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-pink-50/30">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm shadow-sm ${
                  msg.sender === "user" 
                    ? "bg-[#FF69B4] text-white rounded-tr-none" 
                    : "bg-white text-foreground rounded-tl-none border border-pink-100"
                }`}>
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <p className={`text-[9px] mt-1 opacity-60 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-pink-100 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-[#FF69B4]/40 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[#FF69B4]/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-[#FF69B4]/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-pink-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full bg-pink-50/50 border-none rounded-full py-3 pl-5 pr-12 text-sm focus:ring-2 focus:ring-[#FF69B4]/30 outline-none placeholder:text-[#FF69B4]/40 text-[#FF69B4]"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 p-2 bg-[#FF69B4] text-white rounded-full hover:bg-[#FF1493] transition-colors shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative p-4 rounded-full shadow-[0_8px_30px_rgba(255,105,180,0.4)] transition-all duration-500 hover:scale-110 active:scale-95 ${
          isOpen ? "bg-white text-[#FF69B4] rotate-90" : "bg-[#FF69B4] text-white"
        }`}
      >
        {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-[#FF69B4] text-xs font-bold rounded-xl shadow-xl border border-pink-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Need help? Chat with Mini! ✨
          </div>
        )}
      </button>
    </div>
  )
}
