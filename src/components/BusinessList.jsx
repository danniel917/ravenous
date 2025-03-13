import React from "react";
import Business from "./Business";

function BusinessList({ businesses}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-20 px-10 bg-gray-100">
      {businesses.map((business) => (
        <Business key={business.id} {...business} />
      ))}
    </div>
  );
}

export default BusinessList;
