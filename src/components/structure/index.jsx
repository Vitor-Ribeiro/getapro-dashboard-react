import Navbar from '../navbar';
import Sidemenu from '../sidemenu';
import './structure.css';
import PropTypes from 'prop-types';

export default function Structure({ children, active }) {
  return (
    <div className="structure__container">
      <Navbar />
      <div className="structure__content">
        <Sidemenu active={active} />
        {children}
      </div>
    </div>
  );
}
Structure.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node.isRequired
};
