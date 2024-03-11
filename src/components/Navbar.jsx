import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #b6bcbc;
  padding: 5px;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const StyledLi = styled.li`
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/home">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/about">About</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/services">Services</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/" />
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}

export default Navbar;
