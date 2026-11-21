
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Veg from "./Vegitems";
import NonVeg from "./NonVegitems";
import AboutUs from "./AboutUs";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <div className="logo">
          <span>FOOD</span>IE.
        </div>

        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/veg">Veg Menu</Link>
          <Link to="/nonveg">Non-Veg Menu</Link>
          <Link to="/aboutus">About Us</Link>
        </div>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 FOODIE. All Rights Reserved.</p>
        <p>Made with ❤️ for Food Lovers</p>
      </footer>

    </BrowserRouter>
  );
}

export default App;
