import './NavBar.css';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className='nav'>
        <nav className='navbar'>
            <div>
                <NavLink className='navbar-logo' to='/'>Cava Dorada</NavLink>
            </div>
            <ul className='navbar-list'>
                <li>
                  <NavLink className='navbar-link' to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink className='navbar-link' to='/productos'>Productos</NavLink>
                </li>
                <li>
                  <NavLink className='navbar-cart' to='cart'> <CartWidget /> </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar