import { NavLink } from 'react-router-dom'

export default function NavbarLink ({ path, text, isButton, ...props }) {
  const className = 'pt-7 pb-[calc(1.75rem_-_2px)] border-b-2 border-transparent hover:border-emerald-500 px-3 inline-block text-sm uppercase hover:text-emerald-500 dark:text-white'
  if (isButton) {
    return (
      <button { ...props } className={ className }>
        { text }
      </button>
    )
  } else {
    return (
      <NavLink to={ path } className={ className }>
        { text }
      </NavLink>
    )
  }
}
