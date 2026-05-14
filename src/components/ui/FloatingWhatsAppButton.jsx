import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/919763567410?text=Hi%20BhagyaVeda%2C%20I%20want%20to%20know%20more%20about%20your%20hair%20oil."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
