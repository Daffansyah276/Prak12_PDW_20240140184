export default function Toast({ message, show }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-forest-900 text-white text-sm px-5 py-3 rounded-xl shadow-xl flex items-center gap-2 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      ✅ {message}
    </div>
  )
}
