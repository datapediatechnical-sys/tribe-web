import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WeddingEvents from './pages/WeddingEvents'
import Products from './pages/Products'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import OurStory from './pages/OurStory'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding-events" element={<WeddingEvents />} />
        <Route path="/products" element={<Programs />} />
        <Route path="/programs" element={<Products />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
export default App
