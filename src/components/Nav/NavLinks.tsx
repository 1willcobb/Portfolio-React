import { styled } from "styled-components";
import { HashLink } from "react-router-hash-link";

const NavUL = styled.ul`
  list-style: none;
  display: flex;
  flex: 1 0 0;
  justify-content: flex-end;
  padding: 10px 10px;
  text-decoration: none;
  white-space: nowrap;
  transition: width var(--transition-time);
  @media (max-width: 750px) {
    display: none;
  }
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

const NavLinks = () => {
  return (
    <NavUL>
      <li>
        <HashLinkStyled to="/pathLink#about-me-anchor">About Me</HashLinkStyled>
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
  );
};

export default NavLinks;
