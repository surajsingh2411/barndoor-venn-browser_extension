import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,MemoryRouter } from 'react-router-dom'
import Routing from './Routing/Routes.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
)
