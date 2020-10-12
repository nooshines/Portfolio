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
  margin-top: 100px;

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
  hr {
    background-color: #9764c7;
  }
  .iconify {
    width: 40px;
    height: 40px;
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
        <h1 className="mb-30">
          👩🏻‍💻 About <span className="purple">Me</span>
        </h1>
        <div>
          I am a <span className="bold">Junior Software Engineer</span> based in
          <span className="bold"> Sydney, Australia </span> 🐨 🦘
          <span className="mr-10">🇦🇺</span>who has a passion for building
          user-friendly and interactive{" "}
          <span className="bold">web applications</span> . I enjoy problem
          solving and am always up for a challenge .
          <p>
            with my background in <span className="bold">IT</span>,{" "}
            <span className="bold">Graphic Design</span> and{" "}
            <span className="bold">Healthcare</span>, I have gained experience
            working in a <span className="bold">team environment</span> .
          </p>
          <div className="mt-15">
            <span className="bold">Recently</span> completed a{" "}
            <span className="bold">software engineering </span>course with{" "}
            <span className="highlight">General Assembly Sydney </span>.
          </div>
          <hr className="mt-5 mb-5" />
          {/* Education */}
          <h3>
            {" "}
            <i className="fas fa-user-graduate mt-30 mr-20 mb-20" />
            Education
          </h3>
          {/* ************************ */}
          <i className="far fa-circle mr-2 ml-5" />
          <span className="bold">Self Learning</span>
          <div className="ml-60 mb-2">
            <i className="far fa-calendar gray mr-2 ml-10" />
            <small className="gray"> 2020-2020 </small>
            <i className="fas fa-map-pin gray mr-2 ml-2"></i>
            <small className="gray">Australia 🇦🇺</small>
          </div>
          {/* ************************ */}
          <i className="far fa-circle mr-2 ml-5" />
          <span className="bold">Software Engineering</span>
          <div className="ml-60 mb-2">
            <i className="far fa-calendar gray mr-2 ml-10" />
            <small className="gray"> 2020-2020 </small>
            <i className="fas fa-map-pin gray mr-2 ml-2"></i>
            <small className="gray">Australia 🇦🇺</small>
          </div>
          {/* ************************ */}
          <i className="far fa-circle mr-2 ml-5" />
          <span className="bold">CISCO-IT Certificate</span>
          <div className="ml-60 mb-2">
            <i className="far fa-calendar gray mr-2 ml-10" />
            <small className="gray"> 2009-2009 </small>
            <i className="fas fa-map-pin gray mr-2 ml-2"></i>
            <small className="gray">IRAN 🇮🇷</small>
          </div>
          {/* ************************ */}
          <i className="far fa-circle mr-2 ml-5" />
          <span className="bold">MCITP-IT Certificate</span>
          <div className="ml-60 mb-2">
            <i className="far fa-calendar gray mr-2 ml-10" />
            <small className="gray"> 2008-2009 </small>
            <i className="fas fa-map-pin gray mr-2 ml-2"></i>
            <small className="gray">IRAN 🇮🇷</small>
          </div>
          {/* ************************ */}
          <i className="far fa-circle mr-2 ml-5" />
          <span className="bold">Graphic Design Certificate</span>
          <div className="ml-60 mb-2">
            <i className="far fa-calendar gray mr-2 ml-10" />
            <small className="gray"> 2008-2008 </small>
            <i className="fas fa-map-pin gray mr-2 ml-2"></i>
            <small className="gray">IRAN 🇮🇷</small>
          </div>
          {/* ************************ */}
          <i className="far fa-circle mr-2 ml-5" />
          <span className="bold">
            Bachelor of Science (B.S.) Sofware Engineering
          </span>
          <div className="ml-60 mb-2">
            <i className="far fa-calendar gray mr-2 ml-10" />
            <small className="gray">2004-2008 </small>
            <i className="fas fa-map-pin gray mr-2 ml-2"></i>
            <small className="gray">IRAN 🇮🇷</small>
          </div>
          {/* ************************ */}
          <hr className="mt-5 mb-5" />
          {/* Tech Skills */}
          <h3>
            {" "}
            <i className="fas fa-code mt-30 mr-20 mb-3" />
            Tech Skils
          </h3>
          {/* ************************ */}
          <div className="ml-60 mb-2 bold">HTML</div>
          <div className="mr-2 ml-5">
            <i className="devicon-html5-plain-wordmark colored fa-3x" />
            <span
              className="iconify"
              data-icon="file-icons:jsx-alt"
              data-inline="false"
            ></span>
          </div>
          {/* ************************ */}
          <div className="ml-60 mb-2 bold">CSS</div>
          <div className="mr-2 ml-5">
            <i className="devicon-css3-plain-wordmark colored fa-3x" />
            <i className="devicon-sass-original colored fa-3x" />
          </div>
          {/* ************************ */}
          <div className="ml-60 mb-2 bold">JavaScript</div>
          <div className="mr-2 ml-5">
            <i className="devicon-javascript-plain colored fa-2x" />
            <i className="devicon-jquery-plain-wordmark colored fa-3x" />
            <i className="devicon-nodejs-plain colored fa-3x" />
            <i className="devicon-express-original-wordmark fa-3x" />
            <i className="devicon-react-original-wordmark colored fa-3x" />
            <i className="devicon-npm-original-wordmark colored fa-3x" />
          </div>
          <div className="ml-60 mb-2 bold">Ruby</div>
          <div className="mr-2 ml-5">
            <i className="devicon-ruby-plain-wordmark colored fa-3x" />
            <i className="devicon-rails-plain-wordmark colored fa-3x" />
          </div>
          {/* ************************ */}
          <div className="ml-60 mb-2 bold">Databases</div>
          <div className="mr-2 ml-5">
            <i className="devicon-postgresql-plain-wordmark colored fa-3x" />
            <i className="devicon-mongodb-plain-wordmark colored fa-3x" />
          </div>
          {/* ************************ */}
          <div className="ml-60 mb-2 bold">Design</div>
          <div className="mr-2 ml-5">
            <i className="devicon-illustrator-plain colored fa-3x" />
            <i className="devicon-photoshop-plain colored fa-3x" />
          </div>
          {/* ************************ */}
          <div className="ml-60 mb-2 bold">Other</div>
          <div className="mr-2 ml-5">
            <i className="devicon-github-plain-wordmark colored fa-3x" />
            <i className="devicon-git-plain-wordmark colored  fa-3x" />
            <i className="devicon-heroku-plain-wordmark colored fa-3x" />
            <i className="devicon-bootstrap-plain-wordmark colored fa-3x" />
            <span
              className="iconify"
              data-icon="logos:postman"
              data-inline="false"
            ></span>
            <span
              className="iconify"
              data-icon="logos:material-ui"
              data-inline="false"
            ></span>
            <span
              className="iconify"
              data-icon="logos:visual-studio-code"
              data-inline="false"
            ></span>
            <h1
              className="iconify"
              data-icon="logos-jest"
              data-inline="false"
            ></h1>
            <h1>💅</h1>
          </div>
          {/* ************************ */}
          <hr className="mt-5 mb-5" />
          {/* Intrests */}
          <h3>
            <i className="far fa-smile mt-30 mr-20" />
            Interests
          </h3>
          <i className="fas fa-plane fa-3x" />
          <i className="fas fa-laptop fa-3x" />
          <i className="fas fa-code fa-3x" />
          <i className="fas fa-tv fa-3x" />
          <i className="fas fa-film fa-3x" />
          <i className="fas fa-running fa-3x" />
          <i className="fas fa-hiking fa-3x" />
          <i className="fas fa-biking fa-3x" />
          <i className="fas fa-pen fa-3x" />
        </div>
      </Card>
    </Container>
  );
};

export default About;
