import React, { useEffect } from "react";
import styled from "styled-components";
import icon from "../img/icon2.jpg";

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-self: center;
  width: 600px;
  height: 500px;

  .purple {
    color: #9764c7;
  }
  h1 {
    font-size: 60px;
    margin-bottom: 30px;
  }
  i {
    margin: 10px;
  }
  .color-red {
    color: red;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "🏠 Home ";
  }, []);

  return (
    <Container>
      <Card>
        <h1>
          Hello <i className="far fa-hand-peace"></i>
        </h1>
        <h2>
          I'm <span className="purple">Nooshin</span> ! I design and code
          beautifully simple things, and I{" "}
          <i className="fas fa-heart color-red" />
          what I do.
        </h2>
      </Card>
    </Container>
  );
};

export default Home;
