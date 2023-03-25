import "./App.css";
import More from "./components/more/More";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";

function App() {
  return (
    <>
      <Navbar />
      <More />
      <Content />
      <Footer />
    </>
  );
}

export default App;
