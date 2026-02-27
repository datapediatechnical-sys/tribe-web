import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WeddingEvents from './pages/WeddingEvents'
import Products from './pages/Products'
import Programs from './pages/Programs'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding-events" element={<WeddingEvents />} />
        <Route path="/products" element={<Products />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
    </HashRouter>
  )
}

export default App
