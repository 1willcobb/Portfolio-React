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
    transition: .2s;
    transform: translate(-10px, -10px);
    color:  var(--hover-color);
  }
`

const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: .5rem 2rem;
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  border-left: var(--borders);
  background-color: var(--solid-color);
  color: var(--background-color);
  &:hover {
    background-color: var(--hover-color);
    color: var(--background-color)
  }
  &:active {
    background-color: var(--active-color);
    color:var(--solid-color);
  }
`

const Nav = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo>Will Cobb</Logo>
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
            <HashLinkStyled to="/pathLink#resume-anchor">
              Resume
            </HashLinkStyled>
          </li>
        </NavUL>
        <NavLinkStyled to="mailto:cobb.will@gmail.com">
          Contact Me
        </NavLinkStyled>
      </HeaderContainer>
    </header>
  );
};

export default Nav;
