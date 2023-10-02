import { styled } from "styled-components";
import { Link } from "react-router-dom";

const LogoStyled = styled.h1`
  padding-right: 1rem;
  white-space: nowrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :hover {
    transition: var(--transition-time);
    transform: translate(-0.1rem, -0.1rem);
    opacity: 75%;
  }
`;

const Logo = () => {
  return (
    <StyledLink to="/">
      <LogoStyled>Will Cobb</LogoStyled>
    </StyledLink>
  );
};

export default Logo;
