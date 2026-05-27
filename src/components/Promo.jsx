import { useState } from 'react'

export default function Promo() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('MANCINGMEI').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="promo" className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-forest-900 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-forest-200 text-xs font-semibold uppercase tracking-widest mb-2">
              Promo Spesial Akhir Bulan
            </p>
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">
              Diskon hingga 40%<br />untuk Semua Joran
            </h2>
            <p className="text-white/60 text-sm">
              Berlaku 1-31 Juni 2026 &nbsp;•&nbsp; Kode:{' '}
              <span className="text-forest-200 font-bold tracking-wider">MANCINGJOSJIS</span>
            </p>
          </div>
          <button
            onClick={handleCopy}
            className={`shrink-0 font-semibold px-8 py-3 rounded-xl text-sm transition-all ${
              copied
                ? 'bg-green-400 text-green-900'
                : 'bg-forest-500 hover:bg-forest-700 text-white'
            }`}
          >
            {copied ? '✅ Kode Disalin!' : 'Salin Kode Promo'}
          </button>
        </div>
      </div>
    </section>
  )
}
