import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import LandingPage from "./components/Homepage";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
// import Landing from "./components/Landing/";
// import Event from "./components/Event/";
// import Mission from "./components/Mission/";
// import Practice from "./components/Practice/";

// import Team from "./components/Team";
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default App;
