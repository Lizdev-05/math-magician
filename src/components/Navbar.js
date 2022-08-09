import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/calculate">Calculator</Link>
    <Link to="/quote">Quote</Link>

  </div>
);

export default Navbar;
