import Project from "./Project";
import styled from "styled-components";
import { StyledBlock, SectionTitle } from "../GlobalStyledComponents/Styles";
import SearchAnchor from "./SearchAnchor";

const Portfolio = () => {
  const StyledPortfolio = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 2rem;
  `;

  const projectsList = [
    {
      cardName: "Task Titan",
      address: "https://task-titan-bec51c55ebe5.herokuapp.com/",
      imgLocation: "gif/task_titan.gif",
      altText: "Task Titan Image",
    },
    {
      cardName: "Tech Blog",
      address: "https://tech-blog-1willcobb-830bce22bbd8.herokuapp.com/",
      imgLocation: "gif/tech_blog.gif",
      altText: "Tech Blog Image",
    },
    {
      cardName: "Sailboat Cost of Living",
      address: "https://github.com/1willcobb/sailboat_calculator",
      imgLocation: "images/Sailboat_app.jpg",
      altText: "Sailboat cost of living app",
    },
    {
      cardName: "Google Docs and Web Sockets",
      address:
        "https://google-clone-1willcobb-v3-46671173cb17.herokuapp.com/documents/b75519f4-21fd-4dd3-8a6c-584f2d959199",
      imgLocation: "images/google_doc.jpg",
      altText: "Google Doc and web socket application",
    },
    {
      cardName: "Employee CMS",
      address: "https://github.com/1willcobb/Employee_CMS_CLI",
      imgLocation: "images/CMS.jpg",
      altText: "Employee CMS app image",
    },
    {
      cardName: "Portfolio Website development",
      address: "https://www.1willcobb.com",
      imgLocation: "images/portfolio_asset_2.jpg",
      altText: "Will Cobbs portfolio site build",
    },
    {
      cardName: "Weather App",
      address: "https://1willcobb.github.io/Weather_Dashboard/",
      imgLocation: "images/Weather.jpg",
      altText: "Weather app image placeholder",
    },
  ];

  return (
    <>
      <SearchAnchor id="portfolio-anchor"></SearchAnchor>

      <StyledBlock>
        <SectionTitle>
          <h2>Portfolio</h2>
          <br />
          <p>Projects launched and in development</p>
        </SectionTitle>
        <StyledPortfolio>
          {projectsList.map((project) => (
            <Project
              cardName={project.cardName}
              address={project.address}
              imgLocation={project.imgLocation}
              altText={project.altText}
            />
          ))}
        </StyledPortfolio>
      </StyledBlock>
    </>
  );
};

export default Portfolio;
