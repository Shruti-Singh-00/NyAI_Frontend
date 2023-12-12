import Layout from "../components/layout/Layout";
import AdvocatesElement from "./Advocates/AdvocatesElement.jsx";
import datas from "./advocates.json";
import "./Css/advocates.css";

const Advocates = () => {
  console.log(datas);
  return (
    <Layout title={"NyAi - Advocates"}>
      <div className="advocates container-fluid">
        <h1 className="h1">Advocates</h1>
        <div className="elements row">
          {datas.datas.map((data) => (
            <div className="advocateElements col-5"  key={data.index}>
              <AdvocatesElement
                img={data.img}
                name={data.name}
                phone={data.phone}
                email={data.email}
                address={data.address}
                skill={data.skill}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Advocates;
