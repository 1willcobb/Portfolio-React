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

const style = {
  display: "flex",
  flexDirection: "column" as const, 
  justifyContent: "space-between" as const, 
};

const BottomDiv = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%; /* Make the div span the entire width of the viewport */
`;

function App() {
  return (
    <>
      <SideNav />
      <div style={style}>
        <div>
          <Nav />
          <StyledRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </StyledRoutes>
        </div>
        <BottomDiv>
          <ContactForm />
          <Footer />
        </BottomDiv>
      </div>
    </>
  );
}

export default App;
