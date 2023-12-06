import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { CarContext } from "../../App";
import BookCarModal from "./BookCarModal";
import "./BookCarModal.css";
import { IoMdClose } from "react-icons/io";

export default function BookCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // destructuring state variables from Context API
  const { setShow, isReserve, setIsReserve } = useContext(CarContext);
  const [pickUpData, setPickUpData] = useState({});

  // store data validate from form and display modal
  const onSubmit = (data) => {
    setPickUpData(data);
    setShow(true);
  };

  return (
    <div
      className="book-car p-4 mt-4 align-self-end h-100 mw-100"
      style={{ backgroundColor: "#ffff", borderRadius: "20px" }}
    >
      <h3 className="fw-bold mb-4">Book a car</h3>
      {/* book car form */}
      <form
        key={1}
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-2"
      >
        {/* handle error of an inputField */}
        {(errors.carType ||
          errors.pickUp ||
          errors.dropOff ||
          errors.pickTime ||
          errors.dropTime) && (
          <span className="error-message border-1 px-2 py-1 rounded border border-white fw-bold">
            This field is required
          </span>
        )}

        {/* display sucess message on placing order on modal */}
        {isReserve && (
          <p className="p-2 bg-sucesss mb-0 rounded">
            Check your email to confirm an order.{" "}
            <IoMdClose onClick={() => setIsReserve(!isReserve)} />
          </p>
        )}
        <select
          {...register("carType", { required: true })}
          className="bookcar-inputField border-0 p-2 rounded"
        >
          <option value="">Select your car type</option>
          <option value="Audi A1 S-Line">Audi A1 S-Line</option>
          <option value="VW Golf 6">VW Golf 6</option>
          <option value="Toyota Camry">Toyota Camry</option>
          <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
          <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
          <option value="VW Passat CC">VW Passat CC</option>
        </select>

        <select
          {...register("pickUp", { required: true })}
          className="bookcar-inputField border-0 p-2 rounded"
        >
          <option value="">Select your pick up location</option>
          <option value="Belgrade">Belgrade</option>
          <option value="Novi Sad">Novi Sad</option>
          <option value="Nis">Nis</option>
          <option value="Kragujevac">Kragujevac</option>
          <option value="Subotica">Subotica</option>
        </select>

        <select
          {...register("dropOff", { required: true })}
          className="bookcar-inputField border-0 p-2 rounded"
        >
          <option value="">Select your drop off location</option>
          <option value="Novi Sad">Novi Sad</option>
          <option value="Kragujevac">Kragujevac</option>
          <option value="Nis">Nis</option>
          <option value="Belgrade">Belgrade</option>
          <option value="Subotica">Subotica</option>
        </select>
        {/* PickUp and drop off data */}
        <input
          type="date"
          {...register("pickTime", { required: true })}
          className="bookcar-inputField border-0 px-2 py-1"
        />
        <input
          type="date"
          {...register("dropTime", { required: true })}
          className="bookcar-inputField border-0 px-2 py-1"
        />
        <Button variant="dark" type="submit">
          Reserve
        </Button>
        <BookCarModal userData={pickUpData} />
      </form>
    </div>
  );
}
