import { NavLink } from "react-router-dom";
import '@mantine/core/styles/NavLink.css';

function Navbar() {
  const navLinkStyle = {
    marginRight: '10px', // Set margin-right to 10px
    fontSize: 'large' // Set font size to large
  };

  return (
    <nav style={{ backgroundColor: '#f5fbfb', padding: '5px' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: '0' }}>
        <li style={navLinkStyle}>
          <NavLink to="/home" style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ textDecoration: 'underline' }}>Navbar</NavLink>
        </li>
        <li style={{ marginRight: '10px' }}>
          <NavLink to="/home" style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ textDecoration: 'underline' }}>Home</NavLink>
        </li>
        <li style={{ marginRight: '10px' }}>
          <NavLink to="/about" style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ textDecoration: 'underline' }}>About</NavLink>
        </li>
        <li style={{ marginRight: '10px' }}>
          <NavLink to="/services" style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ textDecoration: 'underline' }}>Services</NavLink>
        </li>
        <li style={{ marginRight: '10px' }}>
          <NavLink to="/contact" style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ textDecoration: 'underline' }}>Contact</NavLink>
        </li>
        <li style={{ marginRight: '10px' }}>
          <NavLink to="/" style={{ color: 'black', textDecoration: 'none' }} activeStyle={{ textDecoration: 'underline' }} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
