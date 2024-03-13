import { NavLink } from "@mantine/core";

import { Link } from "react-router-dom";

import "@mantine/core/styles/global.css";
import "@mantine/core/styles/NavLink.css";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#f5fbfb", padding: "1px" }}>
      <ul
        style={{
          display: "flex",
          padding: "0px",
          marginRight: "50rem",
          alignItems: "center",
        }}
      >
        <NavLink
          label="Navbar"
          to="/home"
          component={Link}
          style={{
            textDecoration: "none",
            marginLeft: "1rem",
            color: "black",
            fontWeight: "500",
          }}
        />

        <NavLink
          label="Home"
          to="/home"
          component={Link}
          style={{ textDecoration: "none", color: "black" }}
        />

        <NavLink
          label="About"
          to="/about"
          component={Link}
          style={{ textDecoration: "none", color: "black" }}
        />

        <NavLink
          label="Services"
          to="/services"
          component={Link}
          style={{ textDecoration: "none", color: "black" }}
        />

        <NavLink
          label="Contact"
          to="/contact"
          component={Link}
          style={{ textDecoration: "none", color: "black" }}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
