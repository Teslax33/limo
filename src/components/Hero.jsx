import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/Images/hero-img.jpg";
import "./Hero.css";
import BookCar from "./bookCar/BookCar";

export default function Hero() {
  return (
    <div className="hero py-5 w-100 h-100">
      <Container>
        <div className="background position-relative px-5 mt-4 w-100">
          <img
            src={backgroundImg}
            alt="hero image"
            className="background-img position-absolute mw-100 h-100"
          />
          <div className="content d-flex flex-column w-100 align-items-center p-3">
            <h1 className="fw-bold">Luxury Limo Hire</h1>
            <p className="text-center">
              We offer professional car rental and limousine services in <br />
              our range of high-end services
            </p>
            <Button
              variant="dark"
              as={Link}
              to="/vehicles"
              onClick={() => window.screenTop(0, 0)}
            >
              {" "}
              Open Fleet{" "}
            </Button>
            <BookCar />
          </div>
        </div>
      </Container>
    </div>
  );
}
