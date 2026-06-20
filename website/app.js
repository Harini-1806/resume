import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Admissions from "./components/Admissions";
import Facilities from "./components/Facilities";
import Placements from "./components/Placements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Admissions />
      <Facilities />
      <Placements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;