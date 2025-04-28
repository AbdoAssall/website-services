import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/style.css'
import App from './App.jsx'
import { DirectionProvider } from './contexts/DirectionContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DirectionProvider defaultDirection='rtl'>
      <App />
    </DirectionProvider>
  </StrictMode>,
)
