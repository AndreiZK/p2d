import ArrowUp from "./components/ArrowUp";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWorks from "./components/HowWorks";
import Scenarios from "./components/Scenarios";
import Solutions from "./components/Solutions";
import Webversion from "./components/Webversion";

function App() {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <Solutions />
        <Form />
        <HowWorks />
        <Scenarios />
        <Webversion />
        <Footer />
        <ArrowUp />
      </div>
    </>
  );
}

export default App;
