const Profile = () => {
  return (
    <>
      <a name="about-me-anchor" className="anchor"></a>

      <div className="blocks" id="about-me">
        <div id="headshot">
          <img
            src="/images/will headshot.jpeg"
            id="headshot"
            alt="Headshot of Will Cobb"
          />
        </div>
        <div className="content" id="about-me-content">
          <h2>Hey, I'm Will!</h2>
          <p>
            I am a Creative Full Stack Developer seeking work in Full Stack
            Development, Mobile and Web Apps, and Backend Server and Cloud and
            Database infrastructure.
          </p>
          <p>
            This portfolio was built using React.js. Below are projects ranging
            from React.js and the MERN stack to web sockets, RESTful API
            deployment, Django, Three.js, and many more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
