import React from "react";

function Business({ imageSrc, name, address, city, state, zipCode, category, rating, reviewCount }) {
  return (
    <div className="flex gap-4 flex-col w-80 bg-white p-4 rounded-3xl shadow-lg">
      <img src={imageSrc} alt={name}
      className="rounded-2xl h-56 w-full object-cover"
      />
      <h2 className="text-2xl font-bold">{name}</h2>
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
