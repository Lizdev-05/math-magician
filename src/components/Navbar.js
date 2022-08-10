import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculate',
      text: 'Calculator',
    },

    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <div className="navbar">
      <h2>Math Magician</h2>
      <ul className="nav-items">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? 'orangered' : 'white',
                textDecoration: isActive ? 'underline' : null,
              })}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
