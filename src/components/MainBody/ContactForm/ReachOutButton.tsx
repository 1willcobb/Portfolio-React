import styled from "styled-components"


interface Props {
  children: string
}

const ReachOutButton = ({children}: Props) => {
  const StyledButton = styled.button`
    padding: 2rem;
    box-shadow: 1px 1px 1px black;
    background: transparent;
    border: var(--borders);
    &:hover {
      transition: .2s;
      transform: translate(-.1rem, -.1rem);
      opacity: 75%;
      box-shadow: 3px 3px 5px black;
    }
    &:active {
      transition: .2s;
      transform: translate(0, 0);
      box-shadow: .5px .5px .5px black;
    }
  `

  return (
    <StyledButton type="submit">{children}</StyledButton>
  )
}

export default ReachOutButton