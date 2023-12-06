import { useState, createContext } from "react";
import Home from "./pages/Home";

export const CarContext = createContext("");

export default function App() {
  const [show, setShow] = useState(false);
  const [isReserve, setIsReserve] = useState(false);

  return (
    <CarContext.Provider value={{ show, setShow, isReserve, setIsReserve }}>
      <Home />
    </CarContext.Provider>
  );
}
