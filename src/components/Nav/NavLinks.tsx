import { styled } from "styled-components";
import { Link } from "react-router-dom";

const NavUL = styled.ul`
  list-style: none;
  display: flex;
  flex: 1 0 0;
  padding: 10px 10px;
  text-decoration: none;
  white-space: nowrap;
  @media (max-width: 750px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    transform: translate(-10px, -10px);
    color: var(--hover-color);
  }
`;

const NavLinks = () => {
  return (
    <NavUL>
      <li>
        <StyledLink to="/aboutme">About Me</StyledLink>
      </li>
      <li>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
      </li>
      <li>
        <StyledLink to="/resume">Resume</StyledLink>
      </li>
    </NavUL>
  );
};

export default NavLinks;
