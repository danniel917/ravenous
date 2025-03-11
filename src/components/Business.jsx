import React from "react";

function Business({ imageSrc, name, address, city, state, zipCode, category, rating, reviewCount }) {
  return (
    <div className="business">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <div className="business-info">
        <p>{address}</p>
        <p>
          {city}, {state} {zipCode}
        </p>
        <p className="category">{category}</p>
        <p className="rating">
          ⭐ {rating} ({reviewCount} reviews)
        </p>
      </div>
    </div>
  );
}

export default Business;
