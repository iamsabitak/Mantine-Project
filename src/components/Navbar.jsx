import { NavLink } from "react-router-dom";
import "@mantine/core/styles/global.css";
function Navbar() {
  return (
    <nav style={{ backgroundColor: "#f5fbfb", padding: "5px" }}>
      <ul style={{ display: "flex", listStyleType: "none", padding: "0" }}>
        <li style={{ marginRight: "10px", fontSize: "large" }}>
          <NavLink
            to="/home"
            style={{ color: "black", textDecoration: "none" }}
            activeStyle={{ textDecoration: "underline" }}
          >
            Navbar
          </NavLink>
        </li>
        <li style={{ marginRight: "10px" }}>
          <NavLink
            to="/home"
            style={{ color: "black", textDecoration: "none" }}
            activeStyle={{ textDecoration: "underline" }}
          >
            Home
          </NavLink>
        </li>
        <li style={{ marginRight: "10px" }}>
          <NavLink
            to="/about"
            style={{ color: "black", textDecoration: "none" }}
            activeStyle={{ textDecoration: "underline" }}
          >
            About
          </NavLink>
        </li>
        <li style={{ marginRight: "10px" }}>
          <NavLink
            to="/services"
            style={{ color: "black", textDecoration: "none" }}
            activeStyle={{ textDecoration: "underline" }}
          >
            Services
          </NavLink>
        </li>
        <li style={{ marginRight: "10px" }}>
          <NavLink
            to="/contact"
            style={{ color: "black", textDecoration: "none" }}
            activeStyle={{ textDecoration: "underline" }}
          >
            Contact
          </NavLink>
        </li>
        <li style={{ marginRight: "10px" }}>
          <NavLink
            to="/"
            style={{ color: "black", textDecoration: "none" }}
            activeStyle={{ textDecoration: "underline" }}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
