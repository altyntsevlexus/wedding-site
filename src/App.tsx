import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";
import Schedule from "./components/Schedule";
import DressCode from "./components/DressCode";
import DogFood from "./components/DogFood/DogFood";
import Invitation from "./components/Invitation/Invitation";
const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Carousel />
      <Invitation />
      <Schedule />
      <DressCode />
      <DogFood />
    </div>
  );
};

export default App;
