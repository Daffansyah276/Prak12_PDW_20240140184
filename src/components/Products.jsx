import { products } from '../data'
import ProductCard from './ProductCard'

export default function Products({ onAddCart }) {
  return (
    <section id="produk" className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-1">
          <h2 className="text-2xl font-bold text-gray-800">Produk Unggulan</h2>
          <a href="#" className="text-sm text-forest-500 hover:text-forest-700 font-medium">
            Lihat semua →
          </a>
        </div>
        <p className="text-gray-500 text-sm mb-8">Paling laris, paling dicari para pemancing</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAddCart={onAddCart} />
          ))}
        </div>
      </div>
    </section>
  )
}
