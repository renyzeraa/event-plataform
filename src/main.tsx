import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//@ts-expect-error not error
import '../src/styles/global.css'
import { App } from './app.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
