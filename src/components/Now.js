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
  margin-top: 120px;

  .highlight {
    font-weight: bold;
    background-image: linear-gradient(120deg, #fad3cf 0%, #fad3cf 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
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
        <small className="gray">October 2020</small>
        <div className="mt-40">
          <div className="bold purple font-25 mb-3">
            What I'm currently working on :
          </div>
          <div>
            Learning <span className="bold"> Netx js</span> , trying to rebuild
            my portfolio with Next js.
          </div>
          <div>Learning Sass </div>
          <div>
            Loving coding Javascript, getting deeeper in to Javascript
            Algorithms and Data Structure .
          </div>

          <div>
            At the moment Really Enjoying playing and exprementing with React
            js, Material UI and Styled Components{" "}
          </div>
          <div>have a few exciting workshops coming up to attend</div>
          <div>Agile Project Management</div>
          <div>User Experience Design</div>
          <div>SQL</div>
        </div>
      </Card>
    </Container>
  );
};

export default Now;
