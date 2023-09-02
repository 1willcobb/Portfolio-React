import { useState, useEffect } from "react";
import "../App.css"; // Import your stylesheet where CSS variables are defined

const SideNav = () => {
  const [sideBarEnabled, setSideBarEnabled] = useState(false);

  // Toggle open and shut the side bar nav
  const toggleSideBar = () => {
    setSideBarEnabled(!sideBarEnabled);

    const root = document.documentElement; // Get the root element
    root.style.setProperty(
      "--side-bar-size",
      sideBarEnabled ? "6rem" : "20rem"
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
    <section className="side-nav">
      <div
        id="menu-button"
        className="side-nav-selector"
        onClick={toggleSideBar}
      >
        <img src="icons/brown-icon-ham.png" alt="Ham menu" />
      </div>
      <div
        id="menu"
        className={`side-nav-headers ${sideBarEnabled ? "show" : "hidden"}`}
      >
        <ul>
          <li>
            <a href="#about-me-anchor">About Me</a>
          </li>
          <li>
            <a href="#work">Portfolio</a>
          </li>
          <li>
            <a href="#resume-anchor">Resume</a>
          </li>
          <li>
            <a href="#contact-form">Contact</a>
          </li>
        </ul>
      </div>
      <div className="social-icons-nav">
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
    </section>
  );
};

export default SideNav;
