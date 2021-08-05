import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing/";
import Event from "./components/Event/";
import Mission from "./components/Mission/";
import Practice from "./components/Practice/";
import Register from "./components/Register";
import Team from "./components/Team";
// import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Event />
      <Mission />
      <Practice />
      <Register />
      <Team />
      {/* <Carousel /> */}
    </>
  );
};

export default App;
