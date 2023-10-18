import styled from "styled-components";

interface Props {
  cardName: string;
  address: string;
  imgLocation: string;
  altText: string;
  technology: string;
}

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  max-height: 500px;
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

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;
  margin-bottom: 0.25rem;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Project = ({ cardName, address, imgLocation, altText, technology }: Props) => {
  return (
    <ProjectCard>
      <CardTitle>
      <h2>{cardName}</h2>
      <p>{technology}</p>
      </CardTitle>
      <a href={address}>
        <CardImg
          src={imgLocation}
          alt={altText}
          loading="lazy"
          width="200"
          height="200"
        />
      </a>
    </ProjectCard>
  );
};

export default Project;
