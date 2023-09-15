import styled from "styled-components";

export const StyledBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: var(--borders);
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-top: 3rem;
  text-shadow: var(--text-pop-subtle);
`;
