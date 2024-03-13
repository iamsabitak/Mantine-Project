import { NavLink } from "@mantine/core";

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
          href="/home"
          style={{
            textDecoration: "none",
            marginLeft: "1rem",
            color: "black",
            fontWeight: "500",
          }}
        />

        <NavLink
          label="Home"
          href="/home"
          style={{ textDecoration: "none", color: "black" }}
        />

        <NavLink
          label="About"
          href="/about"
          style={{ textDecoration: "none", color: "black" }}
        />

        <NavLink
          label="Services"
          href="/services"
          style={{ textDecoration: "none", color: "black" }}
        />

        <NavLink
          label="Contact"
          href="/contact"
          style={{ textDecoration: "none", color: "black" }}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
