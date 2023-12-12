import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarNav from "./components/NavbarNav";
import Newsletter from "./components/service/Newsletter";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";

export const CarContext = createContext("");

export default function App() {
  const [show, setShow] = useState(false);
  const [isReserve, setIsReserve] = useState(false);

  return (
    <CarContext.Provider value={{ show, setShow, isReserve, setIsReserve }}>
      <NavbarNav />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Newsletter />
    </CarContext.Provider>
  );
}
