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
        <div className="container">

          <div className="card p-2 greenCard">
            <img src={Images.banner} className="card-img-top" alt="banner" />
            <div className="card-body">
              <h5 className="card-title pb-2">Multilingual support</h5>
              <p className="card-text">
              NyAI is available in 20+ officially recognized Indian languages.
              </p>
            </div>
          </div>

          <div className="card p-2 orangeCard">
            <div className="card-img-top d-flex ">
            <img src={Images.digiLocker} className="mb-5 firstImg" alt="digiLocker" />
            <img src={Images.digiLocker} className="mt-5 firstImg" alt="digiLocker" />
            </div>
            <div className="card-body">
              <h5 className="card-title pb-2">Multilingual support</h5>
              <p className="card-text">
              NyAI is available in 20+ officially recognized Indian languages.
              </p>
            </div>
          </div>

          <div className="card p-2 greenCard">
            <img src={Images.lawyer} className="card-img-top" alt="lawyer" />
            <div className="card-body">
              <h5 className="card-title pb-2">Legal Expert<br/> Feedback</h5>
              <p className="card-text">
              Your legal compass from draft to counsel – expert-verified documents and local legal resources at your fingertips.
              </p>
            </div>
          </div>

          <div className="card p-2 orangeCard">
            <img src={Images.obligation} className="card-img-top" alt="obligation" />
            <div className="card-body">
              <h5 className="card-title pb-2">Zero-cost aid</h5>
              <p className="card-text">
              Where excellence meets affordability – superior AI-legal services, always complimentary
              </p>
            </div>
          </div>

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
        <p className="p">
          <span style={{ color: "#EB934f" }}>Carry Legal Assistance in </span>
          Your Pocket with the NyAi Mobile App
        </p>
      </div>
    </Layout>
  );
};

export default Home;
