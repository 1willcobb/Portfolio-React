import Banner from "./Banner";
import styled from "styled-components";
import Project from "../Portfolio/Project";
import ActionButton from "./ActionButton";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const StyledHomeSections = styled.div`
  max-width: 1980px;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <Banner />
      <StyledHomePage>
        <StyledHomeSections>
          <h1>Soemthing to live by</h1>
        </StyledHomeSections>
        <StyledHomeSections>
          <h2>Who Am I</h2>
          <p>
            This portfolio was built using React.js. Below are projects ranging
            from React.js and the MERN stack to web sockets, RESTful API
            deployment, Django, Three.js, and many more.
          </p>
        </StyledHomeSections>
        <StyledHomeSections>
          <h1>Resume</h1>
          <h2>ITs here</h2>
        </StyledHomeSections>
        <StyledHomeSections>
          <ActionButton newLocation="/portfolio">All Projects</ActionButton>
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
