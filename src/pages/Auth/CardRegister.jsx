import { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import "../Css/CardRegister.css";

const CardRegister = ({ name, idType,setLogin }) => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    answer: "",
    idNumber: "",
  });
  const { idNumber } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    // console.log(...formData)
    setFormData({ ...formData, [name]: value });
  };

  const handleValidate = async (e) => {
    e.preventDefault();
    try {
      const { idNumber } = await formData;
      const response = await axios.post(
        "http://localhost:7000/validate-id/panCard",
        {
          idType: idType,
          idNumber,
        }
      );
      setResult(response.data);
      console.log(response.data.result);
      alert(`${response.data.result===true?`Success : you have successfully login with ${name}`:`Error : Error in login with ${name}`}`)
      setLogin(response.data.result);
    } catch (error) {
      setResult({ error: "Error validating ID." });
      setLogin(false);
    }
  };

  return (
    <Layout title={`register - ${name}`}>
      <div className="regiDiv">
        <div className="container">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <center><label className="text">Enter Your {name} details</label></center>
              <input
                type="text"
                className="form-control"
                name="idNumber"
                id="idNumber"
                value={idNumber}
                onChange={onChange}
                placeholder={`Enter Your ${name} Number`}
                required
              />
            </div>
            <button type="submit"> SUBMIT </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CardRegister;
