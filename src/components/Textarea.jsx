export default function Textarea ({ className, ...props }) {
  return (
    <textarea { ...props } className={`py-2 px-3 w-full border border-gray-600 rounded-md focus:ring focus:outline-none dark:text-gray-100 bg-gray-700 ${className}`}></textarea>
  )
}
