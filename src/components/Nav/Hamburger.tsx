import { useState, useEffect } from "react";
import { MenuButton, MenuButtonImg } from "../SideNav";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledMenuList = styled.ul`
  position: absolute;
  top: 100%; /* Set the top position to the height of the button */
  left: 0;
  background-color: #fff;
  border-top: var(--borders);
  border-bottom: var(--borders);
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%; /* Make the menu full width */
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: .5rem;
  &:hover {
    transition: 0.2s;
    color: var(--hover-color);
  }
`;

const HamburgerDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div>
      <MenuButton onClick={handleClick}>
        <MenuButtonImg src="icons/brown-icon-ham.png" alt="Ham menu" />
      </MenuButton>
      {isOpen && (
        <StyledMenuList>
          <StyledNavLink to="/" onClick={handleClick}>Home</StyledNavLink>
          <StyledNavLink to="/aboutme" onClick={handleClick}>About Me</StyledNavLink>
          <StyledNavLink to="/portfolio" onClick={handleClick}>Portfolio</StyledNavLink>
          <StyledNavLink to="/resume" onClick={handleClick}>Resume</StyledNavLink>
          <StyledNavLink to="https://www.linkedin.com/in/1willcobb/" onClick={handleClick}>LinkedIn</StyledNavLink>
          <StyledNavLink to="https://github.com/1willcobb" onClick={handleClick}>GitHub</StyledNavLink>
        </StyledMenuList>
      )}
    </div>
  );
};

export default HamburgerDropdown;
