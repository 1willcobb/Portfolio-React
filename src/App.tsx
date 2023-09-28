import {
  Footer,
  Banner,
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

function App() {
  return (
    <>
      <Nav />
      <SideNav />
      <Banner />
      <StyledRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </StyledRoutes>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
