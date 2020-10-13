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
  max-width: 600px;
  margin: 80px auto;

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
          {/* ************************ */}
          <div className="bold font-30 mb-3">What I'm currently . . .</div>
          {/* ************************ */}
          <div className="bold  font-25 mb-3 ">🛠️ working on :</div>
          {/* ************************ */}
          <div className="ml-3 ">
            Recreating my portfolio in{" "}
            <span className="purple bold">Next js </span>.
          </div>
          {/* ************************ */}
          <div className="bold font-25 mb-3 mt-3">📖 Learning :</div>
          {/* ************************ */}
          <div className="ml-3">Next Js .</div>
          <div className="ml-3">Sass .</div>
          <div className="ml-3">
            Javascript <span className="purple bold">Algorithms</span> and{" "}
            <span className="purple bold">Data Structure</span> .
          </div>
          <div className="bold  font-25 mb-3  mt-3">💥 Enjoying :</div>
          <div className="ml-3">
            Exprementing with <span className="purple bold">React js</span>,
            <span className="purple bold">Marerial UI </span>and
            <span className="purple bold"> Styled Components </span>💅
          </div>
          <div className="ml-3">
            Playing with <span className="purple bold"> Node Js</span> .
          </div>{" "}
        </div>
      </Card>
    </Container>
  );
};

export default Now;
