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
  .mail {
    font-size: 20px;
  }
  h1 {
    margin-bottom: 40px;
  }
  .bold {
    font-weight: bold;
  }
  .purple {
    color: #9764c7;
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
        <h1>
          👋 Say <span className="purple">Hi</span>
        </h1>
        <div>
          If you'd like to say <span className="bold">hi </span>or{" "}
          <span className="bold">work</span> with me, you can reach out by{" "}
          <span className="bold"> email </span>
          via
          <div className="mail">📧 nooshin.esmaeilzadeh@yahoo.com</div>
        </div>
      </Card>
    </Container>
  );
};

export default Contact;
