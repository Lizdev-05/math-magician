import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <h2>Math Magician</h2>
    <ul className="nav-items">
      <li>
        <NavLink to="/" className={(navLink) => (navLink.isActive ? 'active' : 'none')}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculate" className={(navLink) => (navLink.isActive ? 'active' : 'none')}>
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/quote" className={(navLink) => (navLink.isActive ? 'active' : 'none')}>
          Quotes
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
