import "../Css/AdvocatesElement.css";

const advocatesElement = (props) => {
  const { img,title,address,phone,types } = props;

  console.log(img, title, address, phone,types);

  return (
    <div className="advocateElement">
        <p className="name"><b>{title}</b></p>
        <div className="row">
      <div className="col-7">
        <img src={img} alt="img1.png" />
        <div>{phone}</div>
        {/* <div>{email}</div> */}
      </div>
      <div className="col-5 d-flex flex-column justify-content-between">
       <div>
        <h5><b>Types : </b></h5>
        <ul>
          {types.map((sk)=>(<li key={sk}>{sk}</li>))}
        </ul>
        </div> 
        <div className="address">{address}</div>
      </div>
      </div>
    </div>
  );
};

export default advocatesElement;
