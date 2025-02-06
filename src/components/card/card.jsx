

import "./card.css"


const Card = ({ title, price, description, icon }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={icon} alt={title} width="64" height="64" />
        <div className="card-title">
          <b>{title}</b>
          <p className="price">{price}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="card-footer">

    <div className="like">
        <img src="./assets/image/layk.png" alt="" />
        <img src="./assets/image/fayl.png" alt="" />
    </div>

    <button className="visit-btn">Visit</button>
      </div>
    </div>
  );
};

export default Card;

