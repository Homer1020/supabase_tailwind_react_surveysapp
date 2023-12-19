export default function Button ({ children, className, ...props }) {
  return (
    <button { ...props } className={`inline-block bg-emerald-500 text-gray-50 px-3 py-2 rounded-md cursor-pointer hover:bg-emerald-600 ${className}`}>
      { children }
    </button>
  )
}
