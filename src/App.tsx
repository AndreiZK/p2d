import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";

function App() {
  return (
    <>
      <Header />
      <div style={{ height: "200vh" }}>
        <Hero />
        <Solutions />
        <Form />
      </div>
    </>
  );
}

export default App;
