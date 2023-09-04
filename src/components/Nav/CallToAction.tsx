import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
    children: string,
}

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

const CallToAction = ({children} : Props) => {
  return (
    <NavLinkStyled to="mailto:cobb.will@gmail.com">
    {children}
    </NavLinkStyled>
  )
}

export default CallToAction