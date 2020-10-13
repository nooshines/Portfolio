import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  margin-top: 20px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Logo = styled(Link)`
  padding: 1rem 0;
  font-size: 2rem;
  color: black;
  font-weight: bold;
  :hover {
    text-decoration: none;
    color: black;
  }
`;

const MenuLink = styled(Link)`
  color: black;
  padding: 1rem 2rem;
  text-align: center;
  transition: all 0.3s ease-in;
  :hover {
    text-decoration: none;
    color: #9764c7;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    font-size: 20px;
    justify-content: center;
    .ml {
      /* padding: 0; */
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">NE</Logo>
      <Menu>
        <MenuLink to="/" className="ml">
          Home
        </MenuLink>
        <MenuLink to="/about" className="ml">
          About
        </MenuLink>
        <MenuLink to="/now" className="ml">
          Now
        </MenuLink>
        <MenuLink to="/projects" className="ml">
          Projects
        </MenuLink>
        <MenuLink to="/contact" className="ml">
          Contact
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
