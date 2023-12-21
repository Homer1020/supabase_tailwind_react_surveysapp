export default function Container ({ children, className }) {
  return <div className={`max-w-7xl w-11/12 ml-auto mr-auto ${className}`}>{ children }</div>
}
