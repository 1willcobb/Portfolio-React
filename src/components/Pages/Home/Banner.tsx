import styled from "styled-components";

const StyledBanner = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;
  overflow: hidden;
  border-bottom: var(--borders);
`;

const StyledVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(4);
  width: 100%;
  height: 100%;
  opacity: 75%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 50%;
  }
  @media (max-width: 450px) {
    iframe {
      display: none;
    }
  }
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  background-color: transparent;
  h1 {
    color: var(--solid-color);
    text-shadow: 3px 3px 2px rgb(90, 90, 90);
    font-size: 3rem;
    background-color: transparent;
  }
  p {
    color: var(--solid-color);
    text-shadow: 3px 3px 2px rgb(90, 90, 90);
    font-size: 100;
    background-color: transparent;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 678px) {
    p {
      font-size: 1.25rem;
    }
  }
`;

const Banner = () => {
  return (
    <StyledBanner>
      <StyledVideo>
        <iframe
          src="https://www.youtube.com/embed/KZDRGl4oNGw?autoplay=1&loop=1&mute=1&playsinline=1&controls=0"
          allowFullScreen
        ></iframe>
      </StyledVideo>
      <StyledTitle>
        <h1>FULL STACK DEVELOPER</h1>
      </StyledTitle>
    </StyledBanner>
  );
};

export default Banner;
