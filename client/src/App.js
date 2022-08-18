import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import Champions from "./components/Champions";
import Summoners from "./components/Summoners";
import "./AppCSS.css";
//Import the elements of the "router" library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Auth";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />}>
            </Route>
            <Route path="/signup" element={<Signup/>}>
            </Route>
            <Route path="/signin" element={<Signin/>}>
            </Route>
            <Route path="/profile" element={<Profile />}>
            </Route>
            <Route path="/champions" element={<Champions/>}>
            </Route>
            <Route path="/summoners" element={<Summoners/>}>
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
