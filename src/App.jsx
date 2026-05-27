import { useState, useCallback } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Categories   from './components/Categories'
import Products     from './components/Products'
import Promo        from './components/Promo'
import Brands       from './components/Brands'
import Services     from './components/Services'
import Testimonials from './components/Testimonials'
import Footer       from './components/Footer'
import Toast        from './components/Toast'

function App() {
  const [cartCount, setCartCount]   = useState(0)
  const [toast, setToast]           = useState({ show: false, message: '' })

  const showToast = useCallback((msg) => {
    setToast({ show: true, message: msg })
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2800)
  }, [])

  const handleAddCart = useCallback((product) => {
    setCartCount(n => n + 1)
    showToast(`${product.name.slice(0, 30)}... ditambahkan!`)
  }, [showToast])

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} />

      <main>
        <Hero />
        <Categories />
        <Products onAddCart={handleAddCart} />
        <Promo />
        <Brands />
        <Services />
        <Testimonials />
      </main>

      <Footer />
      <Toast show={toast.show} message={toast.message} />
    </div>
  )
}

export default App
