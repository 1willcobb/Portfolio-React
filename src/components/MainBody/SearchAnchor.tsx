import styled from "styled-components"

interface Props {
  id: string
}

const SearchAnchor = ({id}:Props) => {
  const StyledSearchAnchor = styled.a`
      content: '';
      display: block;
      height: var(--top-nav-size);
      margin-top: calc(var(--top-nav-size)* -1);
      visibility: hidden;
  ` 

  return (
    <StyledSearchAnchor id={id}></StyledSearchAnchor>
  )
}

export default SearchAnchor