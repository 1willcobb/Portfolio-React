import Banner from "./Banner";

const style = {
  height: "50vh",
};

const Home = () => {
  return (
    <>
      <Banner />
      <div style={style}>
        <h1>This is the Home Page</h1>
      </div>
    </>
  );
};

export default Home;
