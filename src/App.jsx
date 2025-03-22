import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

function App() {
  const [businesses, setBusinesses] = useState([]);

  return (
    <>
      <h1 className="text-2xl md:text-6xl text-center uppercase md:mb-2">Ravenous</h1>
      <SearchBar setBusinesses={setBusinesses} />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
