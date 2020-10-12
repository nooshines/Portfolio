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
  span {
    color: #9764c7;
  }
  h1 {
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <Container>
      <Card>
        <h1>Projects</h1>

        <i className="devicon-html5-plain-wordmark colored fa-3x"></i>
        <i className="devicon-jquery-plain-wordmark colored fa-3x"></i>
        <i className="devicon-javascript-plain colored fa-2x"></i>
        <i className="devicon-css3-plain-wordmark colored fa-3x"></i>
        <i className="devicon-express-original-wordmark fa-3x"></i>
        <i className="devicon-mongodb-plain-wordmark colored fa-3x"></i>
        <i className="devicon-react-original-wordmark colored fa-3x"></i>
        <i className="devicon-ruby-plain-wordmark colored fa-3x"></i>
        <i className="devicon-postgresql-plain-wordmark colored fa-3x"></i>
        <i className="devicon-git-plain-wordmark colored  fa-3x"></i>
        <i className="devicon-github-plain-wordmark colored fa-3x"></i>
        <i className="devicon-heroku-plain-wordmark colored fa-3x"></i>
        <i className="devicon-bootstrap-plain-wordmark colored fa-3x"></i>
        <i className="devicon-illustrator-plain colored fa-3x"></i>
        <i className="devicon-rails-plain-wordmark colored fa-3x"></i>
        <i className="devicon-photoshop-plain colored fa-3x"></i>
        <i className="devicon-npm-original-wordmark colored fa-3x"></i>
        <i className="devicon-sass-original colored fa-3x"></i>
      </Card>
    </Container>
  );
};

export default Projects;
