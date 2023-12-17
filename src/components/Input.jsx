export default function Input ({ ...props }) {
  return (
    <input
      className='py-2 px-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-emerald-100 focus:outline-none focus:border-emerald-500'
      { ...props }
    />
  )
}
