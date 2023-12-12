import { IoIosArrowForward } from "react-icons/io";
import { services } from "../service/services";

export default function CategoriesList() {
  return (
    <ul className="categories-list list-unstyled w-100">
      {services.map((service) => (
        <li
          key={service.id}
          className="categories-title mb-4 d-flex justify-content-between border-bottom"
        >
          <p>
            <IoIosArrowForward />
            {service.title}
          </p>{" "}
          <span>({service.id})</span>
        </li>
      ))}
    </ul>
  );
}
