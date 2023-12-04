import { useState, createContext } from "react";
import Home from "./pages/Home";

export const CarContext = createContext("");

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <CarContext.Provider value={{ show, setShow }}>
      <Home />
    </CarContext.Provider>
  );
}
