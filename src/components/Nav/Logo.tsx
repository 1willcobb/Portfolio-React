import { styled } from 'styled-components';

const LogoStyled = styled.h1`
  padding-right: 1rem;
  white-space: nowrap;
`;

const Logo = () => {
  return (
    <LogoStyled>Will Cobb</LogoStyled>
  )
}

export default Logo