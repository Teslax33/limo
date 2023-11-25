import { Button, Col, Container, Row } from "react-bootstrap";
import PricingImg from "../../assets/Images/pricingCar.png";

export default function Pricing() {
  return (
    <section className="pricing py-5">
      <Container>
        {/* pricing heading */}
        <div className="pricing-heading py-5 text-center">
          <h1 className="fw-bold">Only today $75/day</h1>
          <p className="w-50 mx-auto">
            Take advantage of our hot offers, saving a significant amount when
            renting a limousine
          </p>
        </div>

        {/* pricing main */}
        <div
          className="pricing-main p-5"
         
        >
          <Row>
            <Col lg="6">
              <div className="pricing-details">
                <h2 className="mb-4">Cadillac Escalade</h2>
                <div className="list">
                  <Row>
                    <Col lg="6">
                      <ul className="car-feature-list list-unstyled">
                        <li>
                          <span className="fw-bold">&#10003;</span> For Upto 8
                          Passengers
                        </li>
                        <li>
                          <span className="fw-bold">&#10003;</span> Incredible
                          Sound System
                        </li>
                        <li>
                          <span className="fw-bold">&#10003;</span> Fiber Optic
                          Lights
                        </li>
                        <li>
                          <span className="fw-bold">&#10003;</span> Bar Area
                          with Fridge
                        </li>
                      </ul>
                    </Col>

                    <Col lg="6">
                      <ul className="car-feature-list list-unstyled">
                        <li>
                          <span className="fw-bold">&#10003;</span> Tinted
                          Windows
                        </li>
                        <li>
                          <span className="fw-bold">&#10003;</span> Divider With
                          Premium Style
                        </li>
                        <li>
                          <span className="fw-bold">&#10003;</span> Multiporpose
                          Designed Limo
                        </li>
                        <li>
                          <span className="fw-bold">&#10003;</span> Chill Air
                          Conditioning
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Button variant="dark" size="md" className="mt-4">
                    Reserve Now
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <img
                src={PricingImg}
                alt=""
                className="pricing-car-img position-relative mw-100"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
