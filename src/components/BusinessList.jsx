import React from "react";
import Business from "./Business";

function BusinessList({ businesses}) {
  return (
    <div>
      {businesses.map((business) => (
        <Business key={business.id} {...business} />
      ))}
    </div>
  );
}

export default BusinessList;
