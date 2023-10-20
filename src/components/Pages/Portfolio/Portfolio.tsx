import Project from "./Project";
import styled from "styled-components";
import { SectionTitle } from "../../GlobalStyledComponents/Styles";

const StyledPortfolio = styled.div`
  display: flex;
  flex: 1 0 25%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem;
`;

const StyledPortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

const Portfolio = () => {
  const projectsList = [
    {
      cardName: "Wedloc",
      address: "https://wedloc-84c89e3ae29d.herokuapp.com/",
      imgLocation: "gif/wedloc gif.gif",
      altText: "Wedloc",
      technology: "React.js, Node.js, Express.js, MongoDB, GraphQL, Cloudinary",
    },
    {
      cardName: "Task Titan",
      address: "https://task-titan-bec51c55ebe5.herokuapp.com/",
      imgLocation: "gif/task_titan.webp",
      altText: "Task Titan Image",
      technology: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js",
    },
    {
      cardName: "Tech Blog",
      address: "https://tech-blog-1willcobb-830bce22bbd8.herokuapp.com/",
      imgLocation: "gif/tech_blog.webp",
      altText: "Tech Blog Image",
      technology: "Node.js, Express.js, MySQL, Sequelize, Handlebars.js",
    },
    {
      cardName: "Sailboat Cost of Living",
      address: "https://github.com/1willcobb/sailboat_calculator",
      imgLocation: "images/Sailboat_app.webp",
      altText: "Sailboat cost of living app",
      technology: "React.js, Node.js, Express.js, MongoDB, Mongoose, GraphQL",
    },
    {
      cardName: "Google Docs and Web Sockets",
      address:
        "https://google-clone-1willcobb-v3-46671173cb17.herokuapp.com/documents/b75519f4-21fd-4dd3-8a6c-584f2d959199",
      imgLocation: "images/google_doc.webp",
      altText: "Google Doc and web socket application",
      technology: "React.js, Node.js, Express.js, MongoDB, Mongoose",
    },
    {
      cardName: "Employee CMS",
      address: "https://github.com/1willcobb/Employee_CMS_CLI",
      imgLocation: "images/CMS.webp",
      altText: "Employee CMS app image",
      technology: "Node.js, Express.js, MySQL",
    },
    {
      cardName: "Portfolio Website development",
      address: "https://www.1willcobb.com",
      imgLocation: "images/portfolio_asset_2.webp",
      altText: "Will Cobbs portfolio site build",
      technology: "React.js",
    },
    {
      cardName: "Weather App",
      address: "https://1willcobb.github.io/Weather_Dashboard/",
      imgLocation: "images/Weather.webp",
      altText: "Weather app image placeholder",
      technology: "Javascript, HTML, CSS, APIs",
    },
  ];

  return (
    <>
      <StyledPortfolioContainer>
        <SectionTitle>
          <h2>Portfolio</h2>
          <br />
          <p>Projects launched and in development</p>
        </SectionTitle>
        <StyledPortfolio>
          {projectsList.map((project) => (
            <Project
              key={project.cardName}
              cardName={project.cardName}
              address={project.address}
              imgLocation={project.imgLocation}
              altText={project.altText}
              technology={project.technology}
            />
          ))}
        </StyledPortfolio>
      </StyledPortfolioContainer>
    </>
  );
};

export default Portfolio;
