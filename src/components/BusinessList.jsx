import React from "react";
import Business from "./Business";

const businesses = [
  {
    id: 1,
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  },
  {
    id: 2,
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "Pasta Palace",
    address: "456 Elm St",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    category: "Italian",
    rating: 4.7,
    reviewCount: 120,
  },
  {
    id: 3,
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "Sushi Spot",
    address: "789 Oak St",
    city: "San Francisco",
    state: "CA",
    zipCode: "94103",
    category: "Sushi",
    rating: 4.8,
    reviewCount: 200,
  },
];

function BusinessList() {
  return (
    <div>
      {businesses.map((business) => (
        <Business key={business.id} {...business} />
      ))}
    </div>
  );
}

export default BusinessList;
