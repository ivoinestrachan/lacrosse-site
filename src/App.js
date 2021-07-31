import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing/";
import Event from "./components/Event/";
import Mission from "./components/Mission/";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Event />
      <Mission />
    </>
  );
};

export default App;
