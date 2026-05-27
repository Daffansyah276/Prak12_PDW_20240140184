import { brands } from '../data'

export default function Brands() {
  return (
    <section className="py-10 px-4 sm:px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-5">
          Brand Resmi yang Kami Jual
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {brands.map(b => (
            <span
              key={b}
              className="text-sm font-semibold text-gray-500 border border-gray-200 px-5 py-2 rounded-lg hover:border-forest-400 hover:text-forest-600 transition-colors cursor-default"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
