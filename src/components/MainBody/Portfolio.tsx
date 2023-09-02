const Portfolio = () => {
  return (
    <>
      <a id="portfolio-anchor" className="anchor"></a>

      <div className="blocks work" id="work">
        <div className="section-title portfolio-text">
          <h2>Portfolio</h2>
          <br />
          <p>Projects launched and in development</p>
        </div>
        <div className="content">
          <div className="card card-1">
            <h3>Task Titan</h3>
            <a href="https://task-titan-bec51c55ebe5.herokuapp.com/">
              <img src="gif/task_titan.gif" alt="Task Titan Image" />
            </a>
          </div>
          <div className="card other-card">
            <h3>Tech Blog</h3>
            <a href="https://tech-blog-1willcobb-830bce22bbd8.herokuapp.com/">
              <img src="gif/tech_blog.gif" alt="Tech Blog Image" />
            </a>
          </div>
          <div className="card other-card">
            <h3>Sailboat Cost of Living</h3>
            <a href="https://github.com/1willcobb/sailboat_calculator">
              <img
                src="images/Sailboat_app.jpg"
                alt="Creator App Image"
              />
            </a>
          </div>
          <div className="card other-card">
            <h3>Employee CMS</h3>
            <a href="https://github.com/1willcobb/Employee_CMS_CLI">
              <img
                src="images/CMS.jpg"
                alt="Weather app image placeholder"
              />
            </a>
          </div>
          <div className="card other-card">
            <h3>Google Docs and Web Sockets</h3>
            <a href="https://google-clone-1willcobb-v3-46671173cb17.herokuapp.com/documents/b75519f4-21fd-4dd3-8a6c-584f2d959199">
              <img
                src="images/google_doc.jpg"
                alt="Weather app image placeholder"
              />
            </a>
          </div>
          <div className="card other-card">
            <h3>Weather App</h3>
            <a href="https://1willcobb.github.io/Weather_Dashboard/">
              <img
                src="images/Weather.jpg"
                alt="Weather app image placeholder"
              />
            </a>
          </div>
          <div className="card other-card">
            <h3>Portfolio Website development</h3>
            <a href="https://www.1willcobb.com">
              <img
                src="images/portfolio_asset_2.jpg"
                alt="Will Cobbs portfolio site build"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
