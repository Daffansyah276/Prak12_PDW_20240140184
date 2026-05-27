import { categories } from '../data'

export default function Categories() {
  return (
    <section id="kategori" className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Kategori Produk</h2>
        <p className="text-gray-500 text-sm mb-8">Temukan semua kebutuhan memancing kamu di sini</p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {categories.map(cat => (
            <button
              key={cat.id}
              className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-forest-500 hover:shadow-md transition-all group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <div className="text-xs font-semibold text-gray-700 leading-tight">{cat.name}</div>
              <div className="text-xs text-gray-400 mt-1">{cat.count} produk</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
