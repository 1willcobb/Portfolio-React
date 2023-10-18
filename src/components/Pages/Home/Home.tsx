import Banner from "./Banner";
import styled from "styled-components";
import Project from "../Portfolio/Project";
import ActionButton from "./ActionButton";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  gap: 2rem;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StyledHomeSections = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledHomeSectionCol = styled(StyledHomeSections)`
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  return (
    <>
      <Banner />
      <StyledHomePage>
        <StyledHomeSections>
          <h1>CREATIVITY & CODING</h1>
        </StyledHomeSections>
        <StyledHomeSections>
          <h2>
            Hey! I'm Will! <br /> Welcome to my portfolio!
          </h2>

          <ActionButton newLocation="/aboutme">More About Me</ActionButton>
        </StyledHomeSections>
        <StyledHomeSections>
          <h3>
            This portfolio was built using React.js.
            <br />
            <br/>
            Feel free to take a look around at my full stack projects utilizing
            the MERN stack, (MongoDB, Express, React, Node.js), MySQL, JS,
            Python, and more!
          </h3>
          <ActionButton newLocation="/resume">
            Or Just Jump To My Resume Here!
          </ActionButton>
        </StyledHomeSections>
        <StyledHomeSections>
          <StyledHomeSectionCol >
            <ActionButton newLocation="/portfolio">All Projects</ActionButton>
            <p>featured project</p>
          </StyledHomeSectionCol>

          <Project
            key="Tech Blog"
            cardName="Tech Blog"
            address="https://tech-blog-1willcobb-830bce22bbd8.herokuapp.com/"
            imgLocation="gif/tech_blog.webp"
            altText="Tech Blog Image"
            technology="Express, Node.js, MySQL, Sequelize, Heroku"
          />
        </StyledHomeSections>
      </StyledHomePage>
    </>
  );
};

export default Home;
