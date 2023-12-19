export default function Container ({ children, className }) {
  return <div className={`max-w-7xl w-full ml-auto mr-auto ${className}`}>{ children }</div>
}
