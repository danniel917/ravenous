import React from "react";

function Business({
  image_url,
  name,
  location,
  categories,
  rating,
  review_count,
}) {
  return (
    <div className="flex gap-4 flex-col w-80 bg-white p-4 rounded-3xl shadow-lg">
      <img
        src={image_url || "https://placehold.co/400"}
        alt={name}
        className="rounded-2xl h-56 w-full object-cover"
      />
      <h2 className="text-2xl font-bold">{name || "No name available"}</h2>
      <div className="business-info">
        <p>{location.address1}</p>
        <p>
          {location.city}, {location.state} {location.zip_code}
        </p>
        <p className="capitalize">
          {categories[0].alias || "Category is not available"}
        </p>
        <p className="rating">
          ⭐ {rating} {review_count === 0 ? "" : `(${review_count} reviews)`}
        </p>
      </div>
    </div>
  );
}

export default Business;
