import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
import { businesses } from "./helpers/businesses";


function App() {
  return (
    <>
      <h1 className="text-6xl text-center uppercase mb-2">Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
