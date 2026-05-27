import { services } from '../data'

export default function Services() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Keunggulan Kami</h2>
        <p className="text-gray-500 text-sm mb-8">Kenapa ribuan pemancing percaya Mancing Jaya?</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {services.map(s => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
