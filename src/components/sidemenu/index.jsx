import { SidebarData } from './sidebar-data';
import './sidemenu.css';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Sidemenu({ active }) {
  console.log(active);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={'nav-menu'}>
          <ul className="nav-menu-items">
            {SidebarData.map(({ path, icon, title }, index) => {
              return (
                <li key={index} className={active === title ? 'active nav-text' : 'nav-text'}>
                  <Link to={path}>
                    {icon}
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
Sidemenu.propTypes = {
  active: PropTypes.string.isRequired
};
