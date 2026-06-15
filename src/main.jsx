import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Developer Console Signature
console.info(
  "%c Developed by Ashwet Kini\\n%cLead Full Stack Developer | Contact: +91 8329833526 | LinkedIn: linkedin.com/in/ashwet-kini",
  "font-size: 18px; font-weight: bold; color: #D4AF37; background: #0A1C11; padding: 10px 20px; border-radius: 8px 8px 0 0;",
  "font-size: 14px; color: #4A4A4A; padding: 10px 20px; border: 1px solid #0A1C11; border-radius: 0 0 8px 8px;"
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
