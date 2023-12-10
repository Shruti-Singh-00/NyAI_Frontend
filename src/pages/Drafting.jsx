import Layout from "../components/layout/Layout";
import "./Css/Drafting.css";

const Drafting = () => {
  return (
    <Layout title={"NyAi - Drafting"}>
      <div className="drafting">
        <h1 className="green">
          <label className="oran">Choose</label>, Craft,{" "}
          <label className="oran">and Conquer</label> Legal Challenges
        </h1>
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col boundri">
            <h1>Create Documents</h1>
            <p></p>
          </div>
          <div className="col">
            <h1>Simplifier</h1>
            <p></p>
          </div>
        </div>
      </div> 
    </Layout>
  );
};

export default Drafting;
