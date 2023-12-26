import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/darkMode';
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import traduccion_es from './translations/es/traduccion.json'
import traduccion_en from './translations/en/traduccion.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      traduccion: traduccion_es
    },
    en: {
      traduccion: traduccion_en
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
