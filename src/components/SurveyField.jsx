export default function SurveyField ({ field, onClick, className }) {
  return (
    <li
      className={`cursor-pointer group flex items-center py-4 border-b border-gray-700 ${className}`}
      onClick={ onClick }
    >
      <button
        className={'w-3 h-3 rounded-full border-2 border-emerald-400 mr-2 group-hover:bg-emerald-400'}
      ></button>
      <div className={'group-hover:text-emerald-400'}>
        { field.field }
      </div>
    </li>
  )
}
