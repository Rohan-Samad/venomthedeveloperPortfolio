import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import NoteState from "./contex/NoteState";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Service from "./Components/Service";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Alert message="how are you" />
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
