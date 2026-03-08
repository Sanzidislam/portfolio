import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (
  typeof window !== 'undefined' &&
  !document.querySelector('script[data-vercel-analytics]')
) {
  const script = document.createElement('script')
  script.src = '/_vercel/insights/script.js'
  script.defer = true
  script.dataset.vercelAnalytics = 'true'
  document.head.appendChild(script)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
