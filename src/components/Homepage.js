import React from "react";
import Landing from "./Landing/";
import Event from "./Event/";
import Mission from "./Mission/";
import Practice from "./Practice/";
import Team from "./Team";
import Reg from "./RegButton/";

const LandingPage = () => {
  return (
    <>
      <Landing />
      <Event />
      <Mission />
      <Practice />
      <Reg />
      <Team />
    </>
  );
};

export default LandingPage;
