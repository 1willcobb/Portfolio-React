import {
  Footer,
  SideNav,
  Nav,
  AboutMe,
  ContactForm,
  Portfolio,
  Resume,
  Home,
} from "./components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

const StyledRoutes = styled(Routes)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledMainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const BottomDiv = styled.div`
  justify-content: flexEnd,
  bottom: 0;
  width: 100%; /* Make the div span the entire width of the viewport */
`;

function App() {
  return (
    <>
      <SideNav />
      <Nav />
      <StyledMainSection>
        <StyledRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </StyledRoutes>
      </StyledMainSection>
      <BottomDiv>
        <ContactForm />
        <Footer />
      </BottomDiv>
    </>
  );
}

export default App;
