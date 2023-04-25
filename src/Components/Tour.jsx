import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeItem }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <div>
        <img src={image} alt={name} className="img" />
        <span className="tour-price">${price}</span>
      </div>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read Less" : "Read more"}
          </button>
        </p>
      </div>
      <button
        onClick={() => removeItem(id)}
        className="btn btn-block delete-btn"
      >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;
