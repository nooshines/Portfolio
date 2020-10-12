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
  p {
    margin-top: 10px;
  }
  span {
    color: #9764c7;
    font-weight: bold;
  }
  i {
    cursor: pointer;
    margin-right: 15px;
    :hover {
      color: #9764c7;
    }
  }
  .mr {
    margin-right: 10px;
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
        _____________________________________________________________________________________________
      </div>
      <p>
        Designed with <span className="mr">❤️</span> by <span>Nooshin</span> ©
        2020 built with React js .
      </p>
    </Container>
  );
};

export default Footer;
