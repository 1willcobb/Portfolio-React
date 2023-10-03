import Banner from "./Banner";
import styled from "styled-components";

const StyledHomePage = styled.div`
  height: "50vh";
`;

const Home = () => {
  return (
    <>
      <Banner />
      <StyledHomePage>
        <div>
          <h1>Soemthing to live by</h1>
        </div>
        <div>
          <h2>Who Am I</h2>
        </div>
        <div>
          <h1>Resume</h1>
        </div>
        <div>
          <h2>Top Project, all projects</h2>
        </div>
      </StyledHomePage>
    </>
  );
};

export default Home;
