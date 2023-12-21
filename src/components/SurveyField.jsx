export default function SurveyField ({ field, onClick, className, totalVotesPercentage }) {
  return (
    <li
      className={`cursor-pointer group flex-wrap flex items-center py-4 border-b border-gray-700 ${className}`}
      onClick={ onClick }
    >
      <button
        className={'w-3 h-3 rounded-full border-2 border-emerald-400 mr-2 group-hover:bg-emerald-400'}
      ></button>
      <div className={'group-hover:text-emerald-400'}>
        { field.field }
      </div>
      <div className="w-full bg-slate-500 mt-3">
        <div style={ { width: `${(totalVotesPercentage || 0) * 100}%` } } className="bg-emerald-400 transition-[width_.9s] h-2 rounded-sm"></div>
      </div>
      <div className="text-gray-500 mt-2">
        {`${((totalVotesPercentage || 0) * 100).toFixed(0)}%`}
      </div>
    </li>
  )
}
