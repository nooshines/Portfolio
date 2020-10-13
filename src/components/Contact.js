import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
  height: 400px;
  .link {
    color: #9764c7;
    :hover {
      text-decoration: none;
      color: #9764c7;
    }
  }

  .highlight {
    color: black;
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
const Contact = () => {
  useEffect(() => {
    document.title = " 👋 Say Hi";
  }, []);

  return (
    <Container>
      <Card>
        <h1 className="mb-40">
          👋 Say <span className="purple">Hi</span>
        </h1>
        <div>
          <div>
            {" "}
            If you'd like to say <span className="bold">Hi </span>or{" "}
            <span className="bold">Work</span> with me, you can reach out by{" "}
            <span className="bold"> email </span>
            via
          </div>
          <a href="mailto:nooshin.esmaeilzadeh@yahoo.com" className="link">
            {" "}
            <h5>
              <span className="mr-3">📧</span>
              <span className="highlight">nooshin.esmaeilzadeh@yahoo.com</span>
            </h5>
          </a>
        </div>
      </Card>
    </Container>
  );
};

export default Contact;
