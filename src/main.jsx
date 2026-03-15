import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
    
  },
  {
    id: 2,
    name: 'Alex Honnold',
    number: '123-512345'
  }
  

]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App persons = {persons}/>
  </StrictMode>,
)
