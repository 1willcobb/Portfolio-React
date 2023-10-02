import { StyledBlock } from "../../GlobalStyledComponents/Styles";
import styled from "styled-components";

const AboutMeContent = styled.div`
  justify-content: left;
  padding: 3rem;
  text-shadow: var(--text-pop-subtle);
`;

const HeadShot = styled.div`
  margin: 0;
  max-height: 350px;
  border-right: var(--borders);
  img {
    max-height: 400px;
  }
  @media (max-width: 768px) {
    border: var(--borders);
  }
`;

const Profile = () => {
  return (
    <>
      <StyledBlock>
        <HeadShot>
          <img src="images/will headshot.jpeg" alt="Headshot of Will Cobb" />
        </HeadShot>
        <AboutMeContent>
          <h2>Hey, I'm Will!</h2>
          <p>
            I am a Creative Full Stack Developer seeking work in Full Stack
            Development, Mobile and Web Apps, and Backend Server and Cloud and
            Database infrastructure.
          </p>
          <p>
            This portfolio was built using React.js. Below are projects ranging
            from React.js and the MERN stack to web sockets, RESTful API
            deployment, Django, Three.js, and many more.
          </p>
        </AboutMeContent>
      </StyledBlock>
    </>
  );
};

export default Profile;
