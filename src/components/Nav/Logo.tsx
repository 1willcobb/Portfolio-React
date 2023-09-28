import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


const LogoStyled = styled.h1`
  padding-right: 1rem;
  white-space: nowrap;
`;

const Logo = () => {
  return (
    <Link to="/">
      <LogoStyled>Will Cobb</LogoStyled>
    </Link>
    
  )
}

export default Logo