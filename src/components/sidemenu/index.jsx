import { SidebarData } from './sidebar-data';
import './sidemenu.css';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

export default function Sidemenu() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars"></Link>
        </div>

        <nav className={'nav-menu'}>
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
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
