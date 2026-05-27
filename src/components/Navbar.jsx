import { useState, useEffect } from 'react'

export default function Navbar({ cartCount }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Produk',    href: '#produk'    },
    { label: 'Promo',     href: '#promo'     },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Kontak',    href: '#kontak'    },
  ]

  return (
    <>
      {/* Top bar */}
      <div className="bg-forest-900 text-white text-center py-2 text-xs tracking-wide">
        🎣 Gratis ongkir pembelian di atas Rp 200.000 &nbsp;•&nbsp; Buka setiap hari 08.00 – 21.00
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-white'
      } border-b border-gray-100`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-forest-900 font-semibold text-lg">
            <span className="text-2xl">🎣</span>
            <span>Mancing<span className="text-forest-500">Jaya</span></span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-forest-500 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Cart */}
          <div className="flex items-center gap-3">
            <button className="relative bg-forest-500 hover:bg-forest-700 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              🛒 Keranjang
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1 ml-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-56' : 'max-h-0'}`}>
          <div className="px-6 pb-4 flex flex-col gap-3 border-t border-gray-100 pt-3">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-forest-500 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
