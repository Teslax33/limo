import { useState, createContext } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavbarNav from "./components/NavbarNav";
import Vehicles from "./pages/Vehicles";
import Newsletter from "./components/service/Newsletter";
import Contacts from "./pages/Contacts";

export const CarContext = createContext("");

export default function App() {
  const [show, setShow] = useState(false);
  const [isReserve, setIsReserve] = useState(false);

  return (
    <CarContext.Provider value={{ show, setShow, isReserve, setIsReserve }}>
    <NavbarNav />
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/vehicles" element={<Vehicles/>} />
      {/* <Route path="/blog" /> */}
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    <Newsletter />
    </CarContext.Provider>
  );
}
