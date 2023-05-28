import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className='nav'>
        <nav className='navbar'>
            <div>
                <h2 className='navbar-logo'>Cava Dorada</h2>
            </div>
            <ul className='navbar-list'>
              <li className='navbar-link'>Home</li>
              <li className='navbar-link'>Productos</li>
              <li className='navbar-link'>Contacto</li>
              <li className='navbar-cart'><CartWidget /></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar