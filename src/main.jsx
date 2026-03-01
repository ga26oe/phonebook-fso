import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const numbers = [
  {
    id: 1,
    name: 'Arto Hellas',
    
  },
  {
    id: 2,
    name: 'Alex Honnold',
  }

]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App numbers = {numbers}/>
  </StrictMode>,
)
