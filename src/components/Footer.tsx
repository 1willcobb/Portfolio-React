import { SocialIcons } from "./GlobalStyledComponents/Styles";
import styled from "styled-components";

// Footer with icons
const Footer = () => {
  // Styled Component for the whole footer
  const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
    & h4 {
      font-weight: 400;
      font-size: 15px;
    }
  `;

  return (
    <StyledFooter>
      <h4>Thanks for viewing</h4>
      <SocialIcons>
        <div>
          <a href="https://www.instagram.com/1willcobb">
            <img
              src="icons/brown-icon-IG.png"
              alt="Instagram Button for Will Cobb"
            />
          </a>
          <a href="https://www.facebook.com/wacobb/">
            <img
              src="icons/brown-icon-fb.png"
              alt="Facebook button for Will Cobb"
            />
          </a>
          <a href="https://www.linkedin.com/in/1willcobb/">
            <img
              src="icons/brown-icon-in.png"
              alt="Linkedin button for Will Cobb"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCgeSDwPH-6ttgxdPANBjQPQ">
            <img
              src="icons/brown-icon-yt.png"
              alt="Youtube button for Will Cobb"
            />
          </a>
        </div>
      </SocialIcons>
    </StyledFooter>
  );
};

export default Footer;
