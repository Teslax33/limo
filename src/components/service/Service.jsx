import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import { services } from "./services";

export default function Service() {
  return (
    <section className="service pt-5">
      <Container>
        <div className="service-heading d-flex align-items-center justify-content-center gap-4 mb-5">
          <h1>Services</h1>
          <p className="mb-0">
            {" "}
            We invite you to try our services, and we personally guarantee that
            you will be completely satisfied.
          </p>
        </div>
        <Row className="gx-2 gy-4">
          {services.map((service) => {
            return (
              <Col key={service.id} lg={6}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  img={service.img}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
