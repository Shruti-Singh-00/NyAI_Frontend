import "../Css/advocatesElement.css";

const advocatesElement = (props) => {
  const { img, name, phone, email, address, skill } = props;

  console.log(img, name, phone, email, address, skill);

  return (
    <div className="advocateElement row">
      <div className="col-6">
        <img src={img} alt="img1.png" />
        <div>{phone}</div>
        <div>{email}</div>
      </div>
      <div className="col-6 d-flex flex-column">
        <p className="name"><b>{name}</b></p>
        <ul>
          {skill.map((sk)=>(<li key={sk}>{sk}</li>))}
        </ul>
        <div className="address">{address}</div>
      </div>
    </div>
  );
};

export default advocatesElement;
