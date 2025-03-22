import React from "react";
import Business from "./Business";

function BusinessList( { businesses } ) {

  if (!businesses) {
    return <p>No results found</p>;
  } else if (businesses.length === 0) {
    return <p>Make a search...</p>;
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center py-20 px-10 bg-gray-100">
      {businesses.map((business, i) => (
        <Business key={i} {...business} />
      ))}
    </div>
  );
}

export default BusinessList;
