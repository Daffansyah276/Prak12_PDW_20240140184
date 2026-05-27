const badgeStyles = {
  amber:  'bg-amber-100 text-amber-700',
  green:  'bg-green-100 text-green-700',
  blue:   'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
}

function formatRupiah(num) {
  return 'Rp ' + num.toLocaleString('id-ID')
}

export default function ProductCard({ product, onAddCart }) {
  // Kita destructuring 'src' dari data produk
  const { name, desc, price, oldPrice, badge, badgeColor, emoji, src } = product

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col h-full shadow-sm">
      
      {/* Bagian Gambar - Membuat Gambar Lebih Bagus dan Seragam */}
      <div className="relative w-full h-48 border-b border-gray-100">
        {src ? (
          <img
            src={src} 
            alt={name}
            // Class di bawah ini mengontrol agar gambar penuh (object-cover) dan rapi
            className="w-full h-full object-cover rounded-t-2xl" 
            onError={e => {
              // Jika gambar error, sembunyikan dan munculkan placeholder
              e.target.style.display = 'none'
              e.target.nextElementSibling.style.display = 'flex'
            }}
          />
        ) : null}
        
        {/* Placeholder (Kotak Hijau) jika gambar tidak ada atau error */}
        <div
          className="w-full h-full bg-gradient-to-br from-forest-50 to-forest-100 items-center justify-center text-5xl absolute inset-0"
          style={{ display: src ? 'none' : 'flex' }}
        >
          {emoji || '🎣'}
        </div>
      </div>

      {/* Bagian Bawah Kartu (Teks & Tombol) */}
      <div className="p-5 flex flex-col flex-1">
        {/* Badge di atas nama produk */}
        {badge && (
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit mb-2 ${badgeStyles[badgeColor] || badgeStyles.green}`}>
            {badge}
          </span>
        )}

        <h3 className="text-base font-semibold text-gray-900 leading-tight mb-1.5 line-clamp-2">{name}</h3>
        
        {desc && (
          <p className="text-xs text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-2">{desc}</p>
        )}

        {/* Harga dan Tombol di baris yang sama */}
        <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <span className="text-lg font-bold text-forest-900">{formatRupiah(price)}</span>
            {oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">{formatRupiah(oldPrice)}</span>
            )}
          </div>
          <button
            onClick={() => onAddCart(product)}
            className="bg-forest-600 hover:bg-forest-800 text-white w-10 h-10 rounded-xl flex items-center justify-center text-2xl font-bold transition-colors shadow-sm"
            title="Tambah ke keranjang"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}