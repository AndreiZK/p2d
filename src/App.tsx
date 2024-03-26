import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowWorks from "./components/HowWorks";
import Solutions from "./components/Solutions";

function App() {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <Solutions />
        <Form />
        <HowWorks />
      </div>
    </>
  );
}

export default App;
