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
  },
  {
    id: 3,
    name: 'Sonny Hayes',
    number: '123-43214'
  },  
  {
    id: 4,
    name: 'Max Verstappen',
    number: '841-123945'
  },  

]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App persons = {persons}/>
  </StrictMode>,
)
