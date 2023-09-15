import styled from "styled-components";

interface Props {
  cardName: string;
  address: string;
  imgLocation: string;
  altText: string;
}

const Project = ({ cardName, address, imgLocation, altText }: Props) => {
  const ProjectCard = styled.div`
    display: flex;
    flex-direction: column-reverse;
    flex: 1 0 100%;
    border: var(--borders);
    box-shadow: var(--text-pop-subtle);
    text-shadow: var(--text-pop-subtle);
    transition: 0.4s;
    &:hover {
      transition: 0.5s;
      transform: translate(-0.2rem, -0.2rem);
      box-shadow: var(--text-pop-not-subtle);
    }
  `;

  const CardTitle = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    text-align: center;
    margin-bottom: 0.25rem;
  `;

  const CardImg = styled.img`
    width: 100%;
    height: 100%;
    border-bottom: var(--borders);
  `;

  return (
    <ProjectCard>
      <CardTitle>{cardName}</CardTitle>
      <a href={address}>
        <CardImg src={imgLocation} alt={altText} />
      </a>
    </ProjectCard>
  );
};

export default Project;
