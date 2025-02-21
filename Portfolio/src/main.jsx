import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Introduction from './Introduction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Introduction />
  </StrictMode>,
)
