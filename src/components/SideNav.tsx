import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { HashLink } from "react-router-hash-link";

const SideNavStyled = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--side-bar-size);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-right: var(--borders);
  transition: width var(--transition-time);
  background-color: transparent;
`;

const MenuButton = styled.div`
  display: flex;
  flex: 1 0 0;
  align-self: center;
  padding: 10px 10px;
  border: none;
  background-color: transparent;
`;

const MenuButtonImg = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  background-color: transparent;
  filter: drop-shadow(var(--text-pop-not-subtle));
  transition: var(--transition-time);
  &:hover {
    transition: var(--transition-time);
    transform: scale(1.2, 1.01);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.418));
  }
`;

const SideNavHeaders = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  width: 100%;
  transition: var(--transition-time);
  ul li {
    list-style: none;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  a {
    text-decoration: none;
    white-space: nowrap;
  }
`;

const SocialIcons = styled.div`
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
    display:none;
  }
`;

const HashLinkStyled = styled(HashLink)`
  text-decoration: none;
  padding: 5px 15px;
  cursor: pointer;
  transition: var(--transition-time);
  &:hover {
    color: var(--hover-color);
  }
`;

const SideNav = () => {
  const [sideBarEnabled, setSideBarEnabled] = useState(false);

  // Toggle open and shut the side bar nav
  const toggleSideBar = () => {
    setSideBarEnabled(!sideBarEnabled);

    const root = document.documentElement; // Get the root element
    root.style.setProperty(
      "--side-bar-size",
      sideBarEnabled ? "6rem" : "10rem"
    );
  };

  // Update the CSS variable based on the screen width
  useEffect(() => {
    const handleResize = () => {
      const root = document.documentElement;
      if (window.innerWidth <= 992) {
        root.style.setProperty("--side-bar-size", "0");
      } else {
        root.style.setProperty("--side-bar-size", "6rem");
      }
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Initialize the CSS variable based on the initial screen width
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SideNavStyled>
      <MenuButton onClick={toggleSideBar}>
        <MenuButtonImg src="icons/brown-icon-ham.png" alt="Ham menu" />
      </MenuButton>
      <SideNavHeaders className={`${sideBarEnabled ? "show" : "hidden"}`}>
        <ul>
          <li>
            <HashLinkStyled to="/pathLink#about-me-anchor">
              About Me
            </HashLinkStyled>
          </li>
          <li>
            <HashLinkStyled to="/pathLink#portfolio-anchor">
              Portfolio
            </HashLinkStyled>
          </li>
          <li>
            <HashLinkStyled to="/pathLink#resume-anchor">Resume</HashLinkStyled>
          </li>
          <li>
            <HashLinkStyled to="/pathLink#contact-form">Contact</HashLinkStyled>
          </li>
        </ul>
      </SideNavHeaders>
      <SocialIcons>
        <a href="https://www.instagram.com/1willcobb">
          <img
            src="icons/brown-icon-IG.png"
            alt="Instagram Buttons for Will Cobb"
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
      </SocialIcons>
    </SideNavStyled>
  );
};

export default SideNav;
