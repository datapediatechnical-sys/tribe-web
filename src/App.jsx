import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WeddingEvents from './pages/WeddingEvents'
import Products from './pages/Products'
import Programs from './pages/Programs'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding-events" element={<WeddingEvents />} />
        <Route path="/products" element={<Products />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
