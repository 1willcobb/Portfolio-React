
const SideNav = () => {
  return (
    <section className="side-nav">
      <div id="menu-button" className="side-nav-selector">
        <img src="/icons/brown-icon-ham.png" alt="Ham menu" />
      </div>
      <div id="menu" className="side-nav-headers hidden">
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
            src="/icons/brown-icon-IG.png"
            alt="Instagram Button for Will Cobb"
          />
        </a>
        <a href="https://www.facebook.com/wacobb/">
          <img
            src="/icons/brown-icon-fb.png"
            alt="Facebook button for Will Cobb"
          />
        </a>
        <a href="https://www.linkedin.com/in/1willcobb/">
          <img
            src="/icons/brown-icon-in.png"
            alt="Linkedin button for Will Cobb"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCgeSDwPH-6ttgxdPANBjQPQ">
          <img
            src="/icons/brown-icon-yt.png"
            alt="Youtube button for Will Cobb"
          />
        </a>
      </div>
    </section>
  );
};

export default SideNav;
