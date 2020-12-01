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
`;

const Projects = () => {
  useEffect(() => {
    document.title = "💻  Projects";
  }, []);

  return (
    <Container>
      <Card>
        <h1 className="mb-40">💻 Projects</h1>
        <p className="mb-5">
          You can check my{" "}
          <a href="https://github.com/nooshines" className="link">
            <span className="bold highlight mr-2">
              {" "}
              github Repository <i className="fab fa-github fa-1x " />
            </span>{" "}
            to see all my
          </a>
          <span className="bold "> projects</span> .
        </p>
        {/* *********** Project Five ************* */}
        <div>
          <h3 className="bold  mb-3">
            <i className="fas fa-search-location mr-3" />
            Find A Personal Trainer
          </h3>
          <a
            href="https://github.com/nooshines/find-a-trainer-mern"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </a>
          <p>
            A <span className="bold">Full Stack MERN </span>Application with
            <span className="bold"> React Hooks</span> and{" "}
            <span className="bold">Context API</span> that connects personal
            trainers with clients . users can 🔍 search for personal trainers
            based on a <span className="bold">Geo location</span> and find
            trainers around the searched location . <br />
            there is also a ⭐ <span className="bold">rating</span> and{" "}
            <span className="bold"> review</span> system.
          </p>
          <p>
            <i className="fas fa-code" />
            <span className="bold purple">
              TECHNOLOGIES & RESOURCES USED :
            </span>{" "}
            <small className="gray">
              HTML, CSS, Javascript, React js, Node js, MongoDB, JWT, Material
              ui, styled-components.
            </small>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>
        {/* *********** Project Four ************* */}
        <div>
          <h3 className="bold mb-3">
            <i className="fab fa-trello mr-3" />
            Trello Clone
          </h3>
          <a
            href="https://github.com/nooshines/Trello"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </a>
          <p>
            A <span className="bold">Full Stack</span> clone of{" "}
            <span className="bold">Trello</span> with the{" "}
            <span className="bold">MERN </span> Stack . using{" "}
            <span className="bold">Context API </span>
            and <span className="bold">React Hooks </span>. Trello Clone is a
            fully functioning 🗂️ <span className="bold"> Task Management</span>{" "}
            Web App. The App supports personal Task Boards, allowing simple and
            organized task tracking that separates overarching goals or topics
            from specific tasks.
          </p>
          <p>
            <i className="fas fa-code" />
            <span className="bold purple">
              TECHNOLOGIES & RESOURCES USED :
            </span>{" "}
            <span className="gray">
              HTML, CSS, Javascript, React js, Node js, MongoDB, JWT,
              React-Beautiful-dnd, Material ui.
            </span>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>

        {/* *********** Project Three ************* */}
        <div>
          <h3 className="bold mb-3">
            <i className="fas fa-money-check-alt mr-3" />
            Finance Tracker
          </h3>
          <a
            href="https://github.com/nooshines/Finance-Tracker"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </a>
          <p>
            A <span className="bold">Full Stack</span> Application with{" "}
            <span className="bold">Ruby On Rails</span> and{" "}
            <span className="bold">Postgresql</span>, a simple 💰 Fintance
            Tracker to keep track of daily Incomes and Expenses.
          </p>
          <p>
            <i className="fas fa-code" />
            <span className="bold purple">
              TECHNOLOGIES & RESOURCES USED :
            </span>{" "}
            <span className="gray">
              HTML, CSS, Javascript, React js, Ruby On Rails, Postgreql, Active
              Record, JWT, Charts js, Material ui.
            </span>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>
        {/* *********** Project Two ************* */}
        <div>
          <h3 className="bold mb-3">
            <i className="fas fa-search-location mr-3" />
            Find A Personal Trainer
          </h3>
          <a
            href="https://github.com/nooshines/Find-A-Personal_Trainer"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </a>
          <p>
            <span className="bold">Full Stack</span> Application using{" "}
            <span className="bold">Jquery </span>and{" "}
            <span className="bold">Express</span> to 🔍 find personal trainers
            based on <span className="bold">Geo location</span> . if user is a
            personal trainer can register as a personal trainer, then will be
            able to create profile and also 🖊️ blog posts.
          </p>
          <p>
            <i className="fas fa-code" />
            <span className="bold purple">
              TECHNOLOGIES & RESOURCES USED :
            </span>{" "}
            <span className="gray">
              HTML, CSS, JavaScript, Jquery Node js, MongoDB, Bootstrap.
            </span>
          </p>
          <hr className="mt-5 mb-5 bgpurple" />
        </div>

        {/* *********** Project One ************* */}
        <div>
          <h3 className="bold  mb-3">
            <i className="fas fa-cocktail mr-3" />
            Cocktail Recipe
          </h3>
          <a
            href="https://github.com/nooshines/cocktail-Recipe"
            className="highlight link mb-3"
          >
            <i className="fas fa-arrow-right mr-3 " />
            check this project here
          </a>
          <p>
            Using <span className="bold">thecocktaildb API</span> to get
            information about 🍸 <span className="bold">cocktails</span>. when
            click on one of the search result information about that specific
            drink will appear in a <span className="bold">Modal</span> using api
            search based on id . showing image, recipe ingredients and measures
            . there is a ❤️ <span className="bold"> Favourite</span> icon for
            each drink by clicking on that icon that drink will add to favourite
            list .
          </p>
          <p>
            <i className="fas fa-code" />
            <span className="bold purple">
              TECHNOLOGIES & RESOURCES USED :{" "}
            </span>{" "}
            <span className="gray">
              HTML, CSS, JavaScript, Jquery, Bootstrap.
            </span>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default Projects;
