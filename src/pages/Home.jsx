import "./Css/Home.css";
import Layout from "../components/layout/Layout.jsx";
import Images from "../assets/Images.jsx";

const Home = () => {
  return (
    <Layout title={"NyAi - Home"}>
      <div className="homeSlide">
        <img className="blob" src={Images.blob} alt="blob" />
        <img className="humanTech" src={Images.human} alt="Technology-Human" />
        <p className="p">
          <b>Guiding You </b>through
          <br />
          legal complexities with{" "}
          <b>
            <span style={{ color: "#EB934F" }}>Ny</span>AI
          </b>
        </p>
        <p className="p2">Your AI-powered legal companion</p>
        <button className="btn btn-warning">Get Started</button>
      </div>



      <div className="expert">
        <h1>
          <span style={{ color: "#EB934f" }}>Expert reviews,</span> Nearby
          Advisors
        </h1>
        <h2>Anytime, Anywhere</h2>
        <div className="contain1">
        <div className="gSquar"> </div>
        <div className="oSquar"> </div>
        </div>
      </div>



      <div className="unveiled">
        <h1>
          <span style={{ color: "#EB934f" }}>Ny</span>AI Unveiled :{" "}
          <span style={{ color: "#EB934f" }}>A Legal Odyssey</span>
        </h1>
        <h2>Unveiling the Journey from input to</h2>
        <h2>Verified Document</h2>
      </div>

      <div className="assist">
        <p className="p"><span style={{ color: "#EB934f" }}>Carry Legal Assistance in </span>Your Pocket with the NyAi Mobile App</p>
      </div>
    </Layout>
  );
};

export default Home;
