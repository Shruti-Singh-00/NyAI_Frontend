import Layout from "../components/layout/Layout";
import AdvocatesElement from "./Advocates/AdvocatesElement.jsx";
import "./Css/advocates.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Advocates = () => {
  const [advocates, setAdvocates] = useState([]);

  const lawyersNearby = async (latitude,longitude) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/lawyersNearby",
          {"coordinates": {
            latitude,
            longitude
          }}
      );
       setAdvocates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    lawyersNearby("28.679079", "77.06971");
  },[])

  return (
    <Layout title={"NyAi - Advocates"}>
      <div className="advocates container-fluid">
        
        <div className="firstDiv">
          <p className="p">
            <b>Advocates</b>
            <br />
            Nearby You With
            <br />
            <b>
              <span style={{ color: "#EB934F" }}>Ny</span>AI
            </b>
          </p>
          <h4 style={{ color: "rgba(71,119,105,0.6)" }}>All your document needs, all in one place</h4>
        </div>

          {/* <p>{JSON.stringify(advocates)}</p> */}
        <div className="elements row">
          {advocates.map((data) => (
            <div className="advocateElements col-5"  key={data.position}>
              <AdvocatesElement
                img={data.thumbnail}
                title={data.title}
                phone={data.phone}
                // email={data.email}
                address={data.address}
                types={data.types}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Advocates;
