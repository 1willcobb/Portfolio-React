

const Resume = () => {
  return (
    <>
      <a id="resume-anchor" className="anchor"></a>

      <div className="resume">
        <h2>Full Stack Developer</h2>
        <h3>Atascadero, CA</h3>
        <h3>(678) 446 - 7207</h3>
        <a href="mailto:cobb.will@gmail.com">cobb.will@gmail.com</a>
        <a href="https://www.linkedin.com/in/1willcobb/">LinkedIn</a>
        <a href="https://github.com/1willcobb">GitHub</a>
        <br />

        <h2 style={{ textDecoration: "underline" }}>PROFESSIONAL EXPERIENCE</h2>
        <br />
        <div className="resume-container">
          <div className="job-title">
            <h2>Full Stack Developer and Founder</h2>
            <p>February 2022 - Current</p>
          </div>
          <p>Sorev - Atascadero, California</p>
          <ul>
            <li>
              Founded company to empower Creators and YouTubers to build online
              education curriculum through writing, producing, marketing, and
              web development, reaching over $100k in revenue for Creators.
            </li>
            <li>
              Developed company webpage and backend web app to manage a Creator
              financial transparency portal utilizing a Django framework with
              Python, JavaScript, CSS, HTML, sqlite, and more.
            </li>
            <li>
              Acted as Project Manager for production teams over 10+ staff to
              execute on large projects with a cohesive brand vision producing
              over 25 hour long individual courses for various partners.
            </li>
            <li>
              Fostered low stress environments for peers and employees to thrive
              in to accomplish goals efficiently and increased employee
              retention.
            </li>
          </ul>
        </div>
        <div className="resume-container">
          <div className="job-title">
            <h2>Creative Director</h2>
            <p>August 2017 - Current</p>
          </div>
          <p>Cobblestone Productions - San Luis Obispo, California</p>
          <ul>
            <li>
              Built company website utilizing JavaScript, HTML, CSS, SEO, and
              blogging that increased traffic and client bookings through an
              integrated sales funnel.
            </li>
            <li>
              Creatively crafted wedding photography and cinematography
              conveying incredible love stories for over 75 couples.
            </li>
            <li>
              Collaborated with local brands to create product photography and
              brand films to increase brand exposure and sales.
            </li>
            <li>
              Managed small teams of freelancers, assistants, and clients to
              produce hundreds of projects over 6 years.
            </li>
            <li>
              Expressed creative vision and art direction to create unique
              visuals for brands and couples leading to all 5 star reviews on
              google reviews.
            </li>
          </ul>
        </div>
        <div className="resume-container">
          <div className="job-title">
            <h2>Rehabilitation Therapist- Music Therapist</h2>
            <p>Sep 2015 - Mar 2022</p>
          </div>
          <p>
            Department of State Hospitals- Atascadero - Atascadero, California
          </p>
          <ul>
            <li>
              Managed a department of 60+ therapists as Chair to reach the needs
              of residential patients in a maximum security forensic psychiatric
              environment.
            </li>
            <li>
              Designed assessment tools for new patients on behavioral,
              emotional, recreational, artistic, and musical needs, assessing
              over 1000 patients.
            </li>
          </ul>
        </div>

        <h2 style={{ textDecoration: "underline" }}>EDUCATION</h2>
        <br />

        <div className="resume-container">
          <div className="job-title">
            <h2>UC Berkeley Extension</h2>
          </div>
          <p>Full Stack Developer Bootcamp - Certificate</p>
          <ul>
            <li>
              Developed foundations of programming with MERN stack, web
              development, created and utilized 3rd party API, progressive web
              apps, and databases.
            </li>
            <li>
              Worked on teams, and individually, to create over 20 projects in a
              simulated, real world, workplace environment using Git and project
              management tools.
            </li>
          </ul>
        </div>

        <div className="resume-container">
          <div className="job-title">
            <h2>Harvard University - EdX - CS50x</h2>
          </div>
          <p>Introduction to Computer Science - Certificate</p>
          <ul>
            <li>
              Learned foundational concepts of computer science, rudimentary
              programming concepts such as memory allocation and algorithms in
              the command line.
            </li>
            <li>
              Utilized full stack application frameworks like Flask to create
              web apps.
            </li>
          </ul>
        </div>

        <div className="resume-container">
          <div className="job-title">
            <h2>Georgia College & State University</h2>
          </div>
          <p>Bachelors of Music Therapy (BMT)</p>
          <ul>
            <li>
              Researched, created, and implemented advanced assessment
              modalities to assess patient’s needs for therapeutic
              interventions.
            </li>
            <li>Certifications: CBMT Board Certified Music Therapist</li>
          </ul>
        </div>

        <h2 style={{ textDecoration: "underline" }}>SKILLS</h2>
        <br />
        <div>
          <h3>
            React • Python • JavaScript • C • React Native • Django • Flask •
            AWS • HTML • CSS • MERN • SQL • MySQL • NoSQL • PWA • Express.js •
            Node.js • Bootstrap • Tailwind • MongoDB • Git • APIs • Jira •
            Trello • Figma • DaVinci Resolve • Blender • Adobe: Lr, Ps, Pr{" "}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Resume;
