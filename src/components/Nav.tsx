import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { HashLink } from "react-router-hash-link";

const Logo = styled.h1`
  padding-right: 1rem;
  white-space: nowrap;
`;

const NavUL = styled.ul`
  list-style: none;
  display: flex;
  flex: 1 0 0;
  justify-content: flex-end;
  padding: 10px 10px;
  text-decoration: none;
  white-space: nowrap;
  transition: width 0.5s ease;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex: 1 0 0;
  align-items: center;
  width: 100%;
  height: var(--top-nav-size);
  z-index: 1;
  border-bottom: var(--borders);
  overflow: auto;
  padding-left: 4rem;
  text-shadow: var(--text-pop-subtle);
  transition: margin 0.5s ease;
`;

const Nav = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo>Will Cobb</Logo>
        <NavUL>
          <li>
            <HashLink className="nav" to="/pathLink#about-me-anchor">
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink className="nav" to="/pathLink#portfolio-anchor">
              Portfolio
            </HashLink>
          </li>
          <li>
            <HashLink className="nav" to="/pathLink#resume-anchor">
              Resume
            </HashLink>
          </li>
        </NavUL>
        <NavLink className="nav-btn" to="mailto:cobb.will@gmail.com">
          Contact Me
        </NavLink>
      </HeaderContainer>
    </header>
  );
};

export default Nav;
