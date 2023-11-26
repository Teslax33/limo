import Button from "react-bootstrap/esm/Button";
import "./Service.css";

export default function ServiceCard({ title, description, img }) {
  return (
    <div className="service-card d-flex gap-4 w-100 rounded px-3 py-3 align-items-center">
      <div className="service-img  mw-100">
        <img
          src={img}
          alt="service card images"
          className="rounded"
          style={{ maxWidth: "260px" }}
        />
      </div>
      <div className="service-content">
        <h3 className="sub-heading fw-bold">{title}</h3>
        <p>{description}</p>
        <Button variant="dark">Read More</Button>
      </div>
    </div>
  );
}
