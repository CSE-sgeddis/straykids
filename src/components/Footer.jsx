import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../css/Footer.css';

const Footer = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <footer>
      <div 
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav>
        <ul className={menuOpen ? 'active' : ''}>
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/discography" className={isActive('/discography')} onClick={closeMenu}>Discography</Link></li>
          <li><Link to="/media" className={isActive('/media')} onClick={closeMenu}>Media</Link></li>
          <li><Link to="/members" className={isActive('/members')} onClick={closeMenu}>Members</Link></li>
          <li><Link to="/community" className={isActive('/community')} onClick={closeMenu}>Community</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;