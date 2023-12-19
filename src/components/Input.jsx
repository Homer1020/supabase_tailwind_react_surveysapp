export default function Input ({ className, ...props }) {
  return (
    <input
      className={`py-2 px-3 ${!className?.includes('w-') ? 'w-full' : ''} border border-gray-600 rounded-md focus:ring focus:outline-none dark:text-gray-100 bg-gray-700 ${className}`}
      { ...props }
    />
  )
}
