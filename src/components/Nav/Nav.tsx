import { styled } from "styled-components";
import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";
import CallToAction from "./CallToAction";

const NavUL = styled.ul`
  list-style: none;
  display: flex;
  flex: 1 0 0;
  justify-content: flex-end;
  padding: 10px 10px;
  text-decoration: none;
  white-space: nowrap;
  transition: width var(--transition-time);
`;

const HeaderContainer = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  width: 100%;
  height: var(--top-nav-size);
  z-index: 1;
  border-bottom: var(--borders);
  padding-left: 4rem;
  text-shadow: var(--text-pop-subtle);
  transition: margin var(--transition-time);
`;

const HashLinkStyled = styled(HashLink)`
  text-decoration: none;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    transform: translate(-10px, -10px);
    color: var(--hover-color);
  }
`;

const Nav = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <NavUL>
          <li>
            <HashLinkStyled to="/pathLink#about-me-anchor">
              About Me
            </HashLinkStyled>
          </li>
          <li>
            <HashLinkStyled to="/pathLink#portfolio-anchor">
              Portfolio
            </HashLinkStyled>
          </li>
          <li>
            <HashLinkStyled to="/pathLink#resume-anchor">Resume</HashLinkStyled>
          </li>
        </NavUL>
        <CallToAction>Contact Me</CallToAction>
      </HeaderContainer>
    </header>
  );
};

export default Nav;
