import { styled } from "styled-components";
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--top-nav-size);
  border-bottom: var(--borders);
  padding-left: 3rem;
  text-shadow: var(--text-pop-subtle);
  transition: width var(--transition-time);
  width: calc(100% - var(--side-bar-size));
  position: fixed;
  top: 0;
  z-index: 999;
  & div {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 2rem;
    @media (max-width: 750px) {
      gap: 1rem;
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    justify-content: space-between;
    top: 0;
    left: 0;
    z-index: 999;
    padding-left: 1rem;
  }
`;

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 992px)").matches);
    };

    // Add an event listener for the window resize event
    window.addEventListener("resize", updateIsMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, [isMobile]);

  return (
    <HeaderContainer>
      <Logo />
      <div>
        {!isMobile ? <NavLinks /> : <Hamburger />}
        <CallToAction>Contact Me</CallToAction>
      </div>
    </HeaderContainer>
  );
};

export default Nav;
