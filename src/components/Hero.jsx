export default function Hero() {
  const stats = [
    { value: '5.000+',  label: 'Produk Tersedia'  },
    { value: '15.000+', label: 'Pelanggan Setia'   },
    { value: '14 Tahun', label: 'Pengalaman'       },
    { value: '4.9 ⭐',  label: 'Rating Rata-rata'  },
  ]

  return (
    <section
      id="hero"
      className="bg-forest-900 text-white py-20 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs px-4 py-1.5 rounded-full">
              ⭐ Toko Terpercaya Sejak 2010
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Alat Pancing{' '}
              <span className="text-forest-200">Terlengkap</span>
              <br />
              Harga Terbaik
            </h1>

            <p className="text-white/70 text-base leading-relaxed max-w-md">
              Dari joran, reel, umpan, hingga aksesori — semua ada di Mancing Jaya.
              Pilihan para pemancing sejati dari Sabang sampai Merauke.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#produk"
                className="bg-white text-forest-900 font-semibold px-7 py-3 rounded-lg hover:bg-forest-50 transition-colors text-sm"
              >
                🛒 Belanja Sekarang
              </a>
              <a
                href="#kategori"
                className="border border-white/40 text-white px-7 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                📖 Lihat Kategori
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
              
              <div className="mb-6 flex justify-center">
                <img 
                  src="/josjis.jpg" 
                  alt="Combo Joran dan Reel" 
                  className="w-48 h-48 object-cover rounded-xl shadow-lg border border-white/10"
                />
              </div>

              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Produk Pilihan Hari Ini</p>
                <p className="text-white font-semibold text-lg">Combo Joran + Reel Shimano</p>
                <p className="text-forest-200 font-bold text-2xl mt-2">Rp 285.000</p>
                <p className="text-white/40 text-sm line-through">Rp 420.000</p>
                <div className="mt-4 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full inline-block">
                  HEMAT 32%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 border-t border-white/10 pt-10">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-forest-200">{s.value}</div>
              <div className="text-white/50 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}