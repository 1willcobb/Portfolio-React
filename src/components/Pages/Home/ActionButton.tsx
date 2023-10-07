import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children: string;
  newLocation: string;
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  white-space: nowrap;
  height: 100%;
  border: var(--borders);
  background-color: var(--solid-color);
  color: var(--background-color);
  &:hover {
    background-color: var(--hover-color);
    color: var(--background-color);
  }
  &:active {
    background-color: var(--active-color);
    color: var(--solid-color);
  }
`;

const ActionButton = ({ children, newLocation }: Props) => {
  return <StyledNavLink to={newLocation}>{children}</StyledNavLink>;
};

export default ActionButton;
