import { Link } from 'react-router-dom';
import './../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/discography">Discography</Link></li>
          <li><Link to="/media">Media</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;