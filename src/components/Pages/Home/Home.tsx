import Banner from "./Banner";
import styled from "styled-components";
import Project from "../Portfolio/Project";

const StyledHomePage = styled.div`
  height: "50vh";
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        </StyledHomeSections>
        <StyledHomeSections>
          <h1>Resume</h1>
          <h2>ITs here</h2>
        </StyledHomeSections>
        <StyledHomeSections>
          <h2>Top Project, all projects</h2>
          <Project
            key="Tech Blog"
            cardName="Tech Blog"
            address="https://tech-blog-1willcobb-830bce22bbd8.herokuapp.com/"
            imgLocation="gif/tech_blog.webp"
            altText="Tech Blog Image"
          />
        </StyledHomeSections>
      </StyledHomePage>
    </>
  );
};

export default Home;
