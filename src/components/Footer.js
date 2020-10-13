import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

  @media (max-width: 768px) {
  }
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <i className="fab fa-github fa-2x"></i>
        <i className="fab fa-linkedin fa-2x"></i>
        <i className="fab fa-twitter fa-2x"></i>
        <i className="fab fa-instagram fa-2x"></i>
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
