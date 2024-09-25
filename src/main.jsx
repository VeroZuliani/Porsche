import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Components/Home/Home.jsx'
import { Details } from './Components/Details/Details.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Details/>
  </StrictMode>,
)
