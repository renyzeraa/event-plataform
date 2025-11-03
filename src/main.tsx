import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error because of css module
import './styles/global.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
