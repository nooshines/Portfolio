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

  margin-top: 150px;

  .link {
    color: black;
    :hover {
      text-decoration: none;
      color: black;
    }
  }

  .highlight {
    cursor: pointer;
    display: inline-block;
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

const Projects = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <Container>
      <Card>
        <h1 className="mb-40">💻 Projects</h1>
        <p className="mb-5">
          If you are intrested to have a look at my{" "}
          <span className="bold ">projects</span>, you can check out my
          <Link to="https://github.com/nooshines" className="link">
            <span className="bold highlight mr-2">
              {" "}
              github Repository <i className="fab fa-github fa-1x " />
            </span>
          </Link>
        </p>
        {/* *********** Project Five ************* */}
        <div>
          <div className="bold font-20 purple">
            Find A Personal Trainer MERN{" "}
          </div>
          <Link
            to="https://github.com/nooshines/find-a-trainer-mern"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </Link>
          <p>
            <i className="fas fa-code" />
            <span className="bold">TECHNOLOGIES & RESOURCES USED :</span>{" "}
            <span className="gray">
              HTML, CSS, Javascript, React js, Node js - Express, MongoDB, JWT,
              bcrypt js, cors, mongoose, donenv, axios, moment,
              react-router,material ui ,accesscontrol, geojson, multer,
              node-geocoder, react-leaflet, Map box, styled-components .
            </span>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>
        {/* *********** Project Four ************* */}
        <div>
          <div className="bold font-20 purple">Trello Clone</div>
          <Link
            to="https://github.com/nooshines/Trello"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </Link>
          <p>
            <i className="fas fa-code" />
            <span className="bold">TECHNOLOGIES & RESOURCES USED :</span>{" "}
            <span className="gray">
              HTML, CSS, Javascript, React js, Node js - Express, MongoDB, JWT,
              bcrypt js, cors, mongoose, donenv, axios, moment, react-router,
              react-beautiful-dnd, material ui .
            </span>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>

        {/* *********** Project Three ************* */}
        <div>
          <div className="bold font-20 purple">Finance Tracker</div>
          <Link
            to="https://github.com/nooshines/Finance-Tracker"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </Link>
          <p>
            <i className="fas fa-code" />
            <span className="bold">TECHNOLOGIES & RESOURCES USED :</span>{" "}
            <span className="gray">
              HTML, CSS, Javascript, React js, Ruby On Rails, Postgreql, Active
              Record, JWT, fetch, Charts js, material ui .
            </span>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>
        {/* *********** Project Two ************* */}
        <div>
          <div className="bold font-20 purple">Find A Personal Trainer</div>
          <Link
            to="https://github.com/nooshines/Find-A-Personal_Trainer"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </Link>
          <p>
            <i className="fas fa-code" />
            <span className="bold">TECHNOLOGIES & RESOURCES USED :</span>{" "}
            <span className="gray">
              HTML, CSS, JavaScript, Jquery, Page, Bootstrap, Express js,
              Mongoose js, Express Session, Bcrypt, Node-Geocoder, Geojson,
              multer, moment, leaflet, mapquest .
            </span>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>

        {/* *********** Project One ************* */}
        <div>
          <div className="bold font-20 purple">Coctail Recipe</div>
          <Link
            to="https://github.com/nooshines/cocktail-Recipe"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </Link>
          <p>
            <i className="fas fa-code" />
            <span className="bold">TECHNOLOGIES & RESOURCES USED : </span>{" "}
            <span className="gray">
              HTML, CSS, JavaScript, Jquery, Bootstrap .
            </span>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Projects;
