import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";

function App() {
  return (
    <>
      <h1 className="text-6xl text-orange-300">Ravenous</h1>
      <SearchBar />
      <BusinessList />
    </>
  );
}

export default App;
