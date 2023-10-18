import styled from "styled-components";

export const StyledBlock = styled.div`
  margin: 1rem;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

const AboutMeContent = styled.div`
  width: 100%;
  padding: 2rem;
  text-shadow: var(--text-pop-subtle);
`;

const HeadShot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  max-height: 350px;
  margin-top: 2rem;
  img {
    max-height: 400px;
  }
`;

const Profile = () => {
  return (
    <div>
      <StyledBlock>
        <HeadShot>
          <img src="images/will headshot.jpeg" alt="Headshot of Will Cobb" />
        </HeadShot>

        <AboutMeContent>
          <h2 style={{ textAlign: "center" }}>Hey, I'm Will!</h2>
          <br />
          <p>
            I am a Creative Full Stack Developer seeking work as a Full Stack
            Development, in Mobile and Web Apps, Backend Server, or Cloud and
            Database Infrastructure.
          </p>
          <br />
          <p>
            Developer Proficiencies Include: React, Node.js, Express.js, Apollo
            Client, Typescript, GraphQL, Python, JavaScript, C, SQL, MongoDB,
            HTML, CSS, Bootstrap, Tailwind, Django, Flask, Jest, Storybook, AWS
            S3. I live a life of Curiosity and Obsession. I have utilized these
            ideals to traverse many paths but when I think about the core of how
            I operate, I take these two concepts to heart.
          </p>
          <br />
          <p>
            1) Music, Music Therapy, and Education I was curious of music from a
            young age with my mom playing Queen, Styx, a John Williams. My
            curiosity led to obsession and led me to be both a music therapist
            for over 6 years and a music educator teaching guitar lessons for 2
            years. I can confidently play about 10 instruments and produce
            music. I produced a full EP for my Wife Vanaco: Turn off Your Phone
            which is out on Spotify and write all the music Cobblestone
            Productions.
          </p>
          <br />
          <p>
            2) Photography and Cinematography I taught myself how to build and
            fly FPV racing drones after college. From there, I strapped a GoPro
            to the top and started editing clips using Adobe Premiere and now
            DaVinci Resolve. People loved my drone work and started asking for
            me to shoot video for them. I started a freelance production company
            shooting photo and video for weddings and businesses, Cobblestone
            Productions, which I continue to operate to this day.
          </p>
          <br />
          <p>
            3) Entrepreneurship I started my production company, Cobblestone
            Productions, in 2017 shooting photo and video for clients and
            continue to excel at audio-visual production techniques with this
            brand. I launched an online education company, Sorev, in 2022
            creating courses and digital goods for Creators in the Creator
            Economy. We provide full service design, production, marketing, and
            management for online courses. I have a passion for empowering
            Creators to grow their revenue streams.
          </p>
          <br />
          <p>
            4) Programming and Developing I currently am obsessed with computer
            programming from picking up some materials for micro controllers
            like Arduino and Circuit Python to make a project for my daughter. I
            dove into learning more and more and found myself taking Harvard's
            CS50, UC Berkley Coding Bootcamp, and the AWS Cloud Practitioner -
            Foundational. I have a passion for utilizing my creative background,
            entrepreneurship, and other skills to develop incredible programs,
            apps, and backends that can empower and help users daily.
          </p>
        </AboutMeContent>
      </StyledBlock>
    </div>
  );
};

export default Profile;
