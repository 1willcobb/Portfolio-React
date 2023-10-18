import styled from "styled-components";


// Styles for all h2 titles
export const SectionTitle = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
