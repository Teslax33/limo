import Button from "react-bootstrap/esm/Button";
import "./Service.css";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, img }) {
  return (
    <div className="service-card d-flex gap-4 w-100 h-100 rounded px-3 py-3 align-items-center">
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
        <Button
          variant="dark"
          as={Link}
          to="/blog"
          onClick={() => {
            window.screenTop(0, 0);
          }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
}
