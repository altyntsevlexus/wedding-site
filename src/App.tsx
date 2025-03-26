import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Carousel from "./components/Carousel/Carousel";
import Schedule from "./components/Schedule";
import DressCode from "./components/DressCode";
import DogFood from "./components/DogFood/DogFood";
import Invitation from "./components/Invitation/Invitation";
import Payment from "./components/Payment/Payment";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Carousel />
      <Invitation />
      <Schedule />
      <DressCode />
      <DogFood />
      <Payment />
      <Footer />
    </div>
  );
};

export default App;
