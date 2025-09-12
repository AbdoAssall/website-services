import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/style.css'
import App from './App.jsx'
import './i18n'
import { LanguageProvider } from './store/LanguageContext';
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer, Bounce } from 'react-toastify';

// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          className={'z-9999'}
        />
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>,
)
