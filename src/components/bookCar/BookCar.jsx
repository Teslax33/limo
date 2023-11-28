import { Button } from "react-bootstrap";

export function BookCar() {
  return (
    <div
      className="book-car p-4 mt-4 align-self-end h-100 mw-100"
      style={{ backgroundColor: "#ffff", borderRadius: "20px" }}
    >
      <h3>pick car</h3>
      <form action="" className="d-flex flex-column gap-2">
        <select>
          <option>Select your car type</option>
          <option value="Audi A1 S-Line">Audi A1 S-Line</option>
          <option value="VW Golf 6">VW Golf 6</option>
          <option value="Toyota Camry">Toyota Camry</option>
          <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
          <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
          <option value="VW Passat CC">VW Passat CC</option>
        </select>
        <input
          type="text"
          className="rounded px-2 py-1"
          name="pickup"
          id=""
          placeholder="pick up location"
        />
        <input
          type="text"
          className="rounded px-2 px-1"
          name="dropup"
          id=""
          placeholder="drop off location"
        />
        <input type="date" name="pickup date" id="" />
        <Button variant="dark">Reserve</Button>
      </form>
    </div>
  );
}
