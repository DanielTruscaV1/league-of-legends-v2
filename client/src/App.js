import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./AppCSS.css";
//Import the elements of the "router" library
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
