import { NavLink } from 'react-router-dom'

export function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-5'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Search Shows
        </a>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
