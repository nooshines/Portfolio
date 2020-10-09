import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <Container>
      <Link to="https://github.com/nooshines">Github</Link>
    </Container>
  );
};

export default Footer;
