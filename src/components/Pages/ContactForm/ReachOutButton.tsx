import styled from "styled-components";

interface Props {
  children: string;
}

const StyledButton = styled.button`
  padding: 2rem;
  box-shadow: 1px 1px 1px black;
  background: transparent;
  border: var(--borders);
  &:hover {
    transition: 0.2s;
    transform: translate(-0.1rem, -0.1rem);
    opacity: 75%;
    box-shadow: 3px 3px 5px black;
  }
  &:active {
    transition: 0.2s;
    transform: translate(0, 0);
    box-shadow: 0.5px 0.5px 0.5px black;
  }
`;
const ReachOutButton = ({ children }: Props) => {
  return <StyledButton type="submit">{children}</StyledButton>;
};

export default ReachOutButton;
