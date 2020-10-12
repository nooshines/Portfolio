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
  .bgpurple {
    background-color: #9764c7;
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
          <hr className="mt-5 mb-5 bgpurple" />
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
          <hr className="mt-5 mb-5 bgpurple" />
          {/* Tech Skills */}
          <h3>
            {" "}
            <i className="fas fa-code mt-30 mr-20 mb-5" />
            Tech Skils
          </h3>
          {/* ************************ */}
          <div className="mr-2 ml-5 mb-3">
            <i className="devicon-html5-plain-wordmark colored fa-3x" />
          </div>
          {/* ************************ */}
          <hr />
          <div className="mr-2 ml-5 mb-3">
            <i className="devicon-css3-plain-wordmark colored fa-3x mr-5" />
            <i className="devicon-sass-original colored fa-3x" />
          </div>
          {/* ************************ */}
          <hr />
          <div className="mr-2 ml-5 mb-3">
            <i className="devicon-javascript-plain colored fa-2x mr-5" />
            <i className="devicon-jquery-plain-wordmark colored fa-3x mr-5" />
            <i className="devicon-nodejs-plain colored fa-3x mr-5" />
            <i className="devicon-express-original-wordmark fa-3x mr-5" />
            <i className="devicon-react-original-wordmark colored fa-3x mr-5" />
            <i className="devicon-npm-original-wordmark colored fa-3x mr-5" />
          </div>
          <hr />
          <div className="mr-2 ml-5 mb-3">
            <i className="devicon-ruby-plain-wordmark colored fa-3x mr-5" />
            <i className="devicon-rails-plain-wordmark colored fa-3x mr-5" />
          </div>
          {/* ************************ */}
          <hr />
          <div className="mr-2 ml-5 mb-3">
            <i className="devicon-postgresql-plain-wordmark colored fa-3x mr-5" />
            <i className="devicon-mongodb-plain-wordmark colored fa-3x mr-5" />
          </div>
          {/* ************************ */}
          <hr />
          <div className="mr-2 ml-5 mb-3">
            <i className="devicon-illustrator-plain colored fa-3x mr-5" />
            <i className="devicon-photoshop-plain colored fa-3x mr-5" />
          </div>
          {/* ************************ */}
          <hr />
          <div className="mr-2 ml-5 mb-3">
            <i className="devicon-github-plain-wordmark colored fa-3x mr-5" />
            <i className="devicon-git-plain-wordmark colored  fa-3x mr-5" />
            <i className="devicon-heroku-plain-wordmark colored fa-3x mr-5" />
          </div>
          {/* ************************ */}
          <hr className="mt-5 mb-5 bgpurple" />
          {/* Intrests */}
          <h3>
            <i className="far fa-smile mt-30 mr-20 mb-4" />
            Interests
          </h3>
          <div className="mb-3">
            <i className="far fa-star mr-2 ml-5" />
            <span className="bold  mr-2">Travel</span>
            <span className="mr-2">🧳</span>
            <span className="mr-2">🗺️</span>
            <span className="mr-2">🛩️</span>
          </div>
          <div className="mb-3">
            <i className="far fa-star mr-2 ml-5" />
            <span className="bold  mr-2">Exercise</span>
            <span className="mr-2"> 🏋️‍♀️ </span>
            <span className="mr-2">🏃‍♀️</span>
            <span className="mr-2"> 🧗‍♀️</span>
            <span className="mr-2"> 🏊‍♀️ </span>
            <span className="mr-2">🥾</span>
          </div>
          <div className="mb-3">
            <i className="far fa-star mr-2 ml-5" />
            <span className="bold mr-2">Nature</span>
            <span className="mr-2"> 🌲</span>
            <span className="mr-2">🌴 </span>
            <span className="mr-2"> 🍂</span>
            <span className="mr-2"> 🌳</span>
            <span className="mr-2 size"> 🌸</span>
            <span className="mr-2"> 🌊</span>
            <span className="mr-2"> ☘️</span>
          </div>
          <div className="mb-3">
            <i className="far fa-star mr-2 ml-5" />
            <span className="bold mr-2">Mindfullness</span> 🧘‍♀️
          </div>
          <div className="mb-3">
            <i className="far fa-star mr-2 ml-5" />
            <span className="bold mr-2">Cinema & Music</span>
            <span className="mr-2"> 🎦</span>
            <span className="mr-2"> 🎥</span>
            <span className="mr-2"> 🎧</span>
            <span className="mr-2"> 🎵</span>
          </div>
          <div className="mb-3">
            <i className="far fa-star mr-2 ml-5" />
            <span className="bold mr-2">Art & Design</span>
            <span className="mr-2"> 🎭</span>
            <span className="mr-2">🎨 </span>
            <span className="mr-2"> 🖌️</span>
            <span className="mr-2"> </span>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default About;
