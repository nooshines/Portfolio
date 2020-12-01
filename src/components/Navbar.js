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
  @media (max-width: 768px) {
    padding: 4px;
    margin: 4px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">NE</Logo>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        {/* <MenuLink to="/now">Now</MenuLink> */}
        <MenuLink to="/projects">Projects</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
