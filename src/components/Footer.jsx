export default function Footer() {
  const year = new Date().getFullYear()

  const cols = [
    {
      title: 'Navigasi',
      links: ['Beranda', 'Semua Produk', 'Promo', 'Blog Mancing'],
    },
    {
      title: 'Bantuan',
      links: ['Cara Pemesanan', 'Cek Ongkir', 'Kebijakan Retur', 'FAQ'],
    },
  ]

  return (
    <footer id="kontak" className="bg-forest-900 text-white/70 pt-12 pb-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              🎣 MancingJaya
            </div>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Toko alat pancing terlengkap dan terpercaya sejak 2010. Melayani seluruh Indonesia
              dengan produk berkualitas dan harga terbaik.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-forest-200 text-xs font-semibold uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <span>📞 0812-3456-7890</span>
            <span>💬 WhatsApp</span>
            <span>📧 cs@mancingjaya.id</span>
            <span>📍 Jl. Pemancing No. 10, Jakarta</span>
          </div>
          <p className="text-xs text-white/30">
            © {year} Mancing Jaya. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
