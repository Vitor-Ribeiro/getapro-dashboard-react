import { Link } from 'react-router-dom';
import './navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <>
      <image src=""></image>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars"></Link>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
