import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  i {
    cursor: pointer;
    margin-right: 15px;
    :hover {
      color: #9764c7;
    }
  }
  .bgblack {
    background-color: black;
  }
  a {
    color: black;
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <a href="https://github.com/nooshines">
          <i className="fab fa-github fa-2x" />
        </a>
        <a href="https://www.linkedin.com/in/nooshin-esmaeilzadeh/">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://twitter.com/N00shin_es">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="https://www.instagram.com/noosh1n/?hl=en">
          <i className="fab fa-instagram fa-2x" />
        </a>
        <a href="mailto:nooshin.esmaeilzadeh@yahoo.com">
          <i className="fas fa-envelope-square fa-2x" />
        </a>
      </div>
      <div>
        <hr className="bgblack" />

        <p className="mt-10">
          Designed with <span className="mr-1">❤️</span> by{" "}
          <span className="purple bold">Nooshin</span> © 2020 built with React
          js .
        </p>
      </div>
    </Container>
  );
};

export default Footer;
