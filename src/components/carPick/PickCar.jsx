import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import PickCarBox from "./PickCarBox";
import { CAR_DATA } from "./CarData";
import { useState } from "react";

const PickCar = () => {
  const [index, setIndex] = useState(0);

  function handleClick(e) {
    const value = e.target.value;
    setIndex(value);
  }

  return (
    <section className="pick-car pt-5">
      <Container>
        <div className="pick-title text-center">
          <h3>Vehicle Models</h3>
          <h2>Our rental fleet</h2>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>

        <div className="car-content">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="car-pick-box d-flex flex-column gap-1 w-100">
                  <Button
                    size="lg"
                    className="pick-btn"
                    value={0}
                    onClick={handleClick}
                  >
                    VW Golf 6
                  </Button>
                  <Button
                    size="lg"
                    className="pick-btn"
                    value={1}
                    onClick={handleClick}
                  >
                    Audi A1 S-Line
                  </Button>
                  <Button
                    size="lg"
                    className="pick-btn"
                    value={2}
                    onClick={handleClick}
                  >
                    Toyota Camry
                  </Button>
                  <Button
                    size="lg"
                    className="pick-btn"
                    value={3}
                    onClick={handleClick}
                  >
                    BMW 320 ModernLine
                  </Button>
                  <Button
                    size="lg"
                    className="pick-btn"
                    value={4}
                    onClick={handleClick}
                  >
                    Mercedes-Benz GLK
                  </Button>
                  <Button
                    size="lg"
                    className="pick-btn"
                    value={5}
                    onClick={handleClick}
                  >
                    VW Passat CC
                  </Button>
                </div>
              </Col>
              <Col>
                <PickCarBox data={CAR_DATA[index]} id={index} />
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default PickCar;
