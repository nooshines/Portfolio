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
  margin-top: 100px;

  .purple {
    color: #9764c7;
  }
  h1 {
    margin-bottom: 30px;
  }
  i {
    margin: 25px 15px 10px 0;
  }
  .bold {
    font-weight: bold;
  }
  .mt {
    margin-top: 15px;
  }
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

const About = () => {
  useEffect(() => {
    document.title = "👩🏻‍💻 About ";
  }, []);

  return (
    <Container>
      <Card>
        <h1>
          👩🏻‍💻 About <span className="purple">Me</span>
        </h1>
        <div>
          I am a <span className="bold">Junior Software Engineer</span> based in
          <span className="bold"> Sydney, Australia </span> 🐨 🦘 🇦🇺 who has a
          passion for building user-friendly and interactive{" "}
          <span className="bold">web applications</span> . I enjoy problem
          solving and am always up for a challenge .
          <p>
            with my background in <span className="bold">IT</span>,{" "}
            <span className="bold">Graphic Design</span> and{" "}
            <span className="bold">Healthcare</span>, I have gained experience
            working in a <span className="bold">team environment</span> .
          </p>
          <div className="mt">
            <span className="bold">Recently</span> completed a{" "}
            <span className="bold">software engineering </span>course with{" "}
            <span className="highlight">General Assembly Sydney </span>.
          </div>
          <h3>
            {" "}
            <i className="fas fa-user-graduate" />
            Education
          </h3>
          Bachelor of Science (B.S.) Sofware Engineering
          <h3>
            <i className="fas fa-certificate" />
            Skills
          </h3>
          <h3>
            <i className="far fa-smile" />
            Interests
          </h3>
          <h3>
            {" "}
            <i className="fas fa-code" />
            Coding
          </h3>
        </div>
      </Card>
    </Container>
  );
};

export default About;
