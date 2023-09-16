import ContactForm from "./ContactForm/ContactForm";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import Resume from "./Resume";
import styled from "styled-components";

const MainBody = () => {
  const MainBodyStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
  `;

  return (
    <MainBodyStyled className="main-body">
      <Profile />
      <Portfolio />
      <Resume />
      <ContactForm />
    </MainBodyStyled>
  );
};

export default MainBody;
