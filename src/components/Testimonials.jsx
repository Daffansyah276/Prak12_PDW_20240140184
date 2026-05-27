import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Kata Pelanggan Kami</h2>
        <p className="text-gray-500 text-sm mb-8">Ribuan pemancing sudah puas, giliran kamu!</p>

        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map(t => (
            <div key={t.id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
              <div className="text-amber-400 text-sm mb-3">
                {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center text-xs font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
