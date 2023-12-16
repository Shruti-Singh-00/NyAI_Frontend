import {NavLink, useLocation} from "react-router-dom";
import Layout from "../../components/layout/Layout";
import "../css/Drafting1.css";
import RentAggrement from "../Samples/Rent_Agreement.pdf";

const Drafting1 = () => {
  const location = useLocation();
  console.log(location.pathname);


  return (
    <Layout title={"Drafting-1"}>
      <div className="container-sm">
        <div className="Div01 ">
          <p className="para">
            Unlock Legal Clarity: <br />
            <b>
              <span style={{ color: "#EB934F" }}>Sample, </span>
              <span>Customize, </span>
              <span style={{ color: "#EB934F" }}>Simplify.</span>
            </b>
          </p>
        </div>

        <div className="accordianDiv">
          <h2>
            <b>Select a Document</b>
          </h2>

          <div className="accordion accordion-flush" id="accordionExample">
            <div className="accordion-item border-bottom border-5" style={{border:"none"}}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Rent Agreement
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                  <div className="row">
                    <div className="col"><a href={RentAggrement} target="_blank" rel="noreferrer">View Sample</a></div>
                    <div className="col"><NavLink className={"link"} to={"/drafting/browse/generate"}>Generate Document</NavLink></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Consumer Court Complaint Format
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                  <div className="row">
                    <div className="col"><a href={"/"} target="_blank" rel="noreferrer">View Sample</a></div>
                    <div className="col"><a href={"/"} target="_blank" rel="noreferrer">Generate Document</a></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Employment Offer Letter
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Power of Attorny
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Loan Agreement
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Contract Termination
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseEleven"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            
            <div className="accordion-item border-bottom border-5">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwelve"
                  aria-expanded="false"
                  aria-controls="collapseTwelve"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwelve"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Simplify your lease with a clear, concise rental agreement.
                  Streamline terms and conditions for hassle-free renting,
                  ensuring a straightforward experience for both landlords and
                  tenants.
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Drafting1;
