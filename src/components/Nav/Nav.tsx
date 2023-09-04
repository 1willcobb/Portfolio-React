import { styled } from "styled-components";
import Logo from "./Logo";
import CallToAction from "./CallToAction";
import NavLinks from "./NavLinks";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: var(--top-nav-size);
  border-bottom: var(--borders);
  padding-left: 4rem;
  text-shadow: var(--text-pop-subtle);
  width: calc(100% - var(--side-bar-size));
  position: fixed;
  top: 0;
  z-index: 999;
  @media (max-width: 992px) {
    width: 100%;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 0;
    z-index: 999;
  }
`;

const Nav = () => {
  return (
    <HeaderContainer>
      <Logo />
      <NavLinks />
      <CallToAction>Contact Me</CallToAction>
    </HeaderContainer>
  );
};

export default Nav;
