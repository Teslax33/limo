import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaCarSide, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function VehicleModal({
  img,
  name,
  price,
  model,
  doors,
  transmission,
  fuel,
}) {
  return (
    <Card className="vehicle-card mw-100 h-100" style={{ width: "18rem" }}>
      {/* vehicle card */}
      <Card.Img variant="top" src={img} className="h-100" />
      <Card.Body className="px-3">
        <Card.Title>
          <div className="car-model-title d-flex justify-content-between fw-bold">
            <p className="mb-0">{name}</p>
            <h5 className="mb-0 fw-bold">${price}</h5>
          </div>
        </Card.Title>
        <Card.Subtitle>
          <div className="d-flex justify-content-between">
            <span className="car-review">
              {[...Array(5)].map((star, index) => {
                return <FaRegStar key={index} size={15} />;
              })}
            </span>
            <p>per day</p>
          </div>
        </Card.Subtitle>
        <Card.Body className="p-0">
          <div className="car-model-content">
            <div className="car-model-details d-flex justify-content-between">
              <span>
                <FaCarSide /> {model}
              </span>
              <span>
                {doors} <FaCarSide />{" "}
              </span>
            </div>
            <div className="car-model-details-info d-flex justify-content-between">
              <span>
                <FaCarSide /> {transmission}
              </span>
              <span>{fuel}</span>
            </div>
          </div>
        </Card.Body>

        <Button type="button" variant="dark" className="mt-3" as={Link} to="/">
          Reserve now
        </Button>
      </Card.Body>
    </Card>
  );
}
