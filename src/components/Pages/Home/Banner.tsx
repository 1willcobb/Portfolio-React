const Banner = () => {
  return (
    <div className="banner">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/KZDRGl4oNGw?autoplay=1&loop=1&mute=1&playsinline=1&controls=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-box">
        <h1>FULL STACK DEVELOPER</h1>
      </div>
    </div>
  );
};

export default Banner;
