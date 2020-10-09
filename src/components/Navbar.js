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
    color: #bf5caa;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled(Link)`
  color: black;
  padding: 1rem 2rem;
  text-align: center;
  transition: all 0.3s ease-in;
  :hover {
    text-decoration: none;
    color: #bf5caa;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">NE</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/now">Now</MenuLink>
        <MenuLink to="/blog">Blog</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
