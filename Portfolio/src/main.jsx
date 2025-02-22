import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Introduction from './Introduction.jsx'
import Buttons from './Buttons.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Buttons />
    <Introduction />
  </StrictMode>
)
