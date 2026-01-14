import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home/Index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/Carousel-Grabbing-com-React-Framer-Motion'>
    <Routes>
      <Route path='/*' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
