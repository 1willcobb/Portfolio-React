import styled from "styled-components";

// Main section styes creating main blocks on the mainbody
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
    display: none;
  }
`;

// Styles for all h2 titles
export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-top: 3rem;
  text-shadow: var(--text-pop-subtle);
`;

export const SocialIcons = styled.div`
  display: flex;
  flex: 1 0 0;
  justify-content: flex-end;
  flex-direction: column;
  align-self: center;
  padding: 10px 10px;
  img {
    height: 40px;
    width: 40px;
    cursor: pointer;
    background-color: transparent;
    filter: drop-shadow(var(--text-pop-not-subtle));
  }
  img:hover {
    transition: var(--transition-time);
    transform: translate(-0.1rem, -0.1rem);
    opacity: 75%;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
