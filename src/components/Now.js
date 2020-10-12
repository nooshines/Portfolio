import React, { useEffect } from "react";
import styled from "styled-components";

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

  span {
    color: #9764c7;
  }
  /* h1 {
    margin-bottom: 40px;
  } */
  small {
    color: gray;
  }
  .margin {
    margin-top: 40px;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;
const Now = () => {
  useEffect(() => {
    document.title = "⏱️ Now ";
  }, []);

  return (
    <Container>
      <Card>
        <h1>⏱️ Now</h1>
        <small>October 2020</small>
        <div className="margin">
          currently learning Next js, trying to rebuild my portfolio with{" "}
          <span>Netx js</span> .
        </div>
      </Card>
    </Container>
  );
};

export default Now;
