import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import ServiceCard from "./ServiceCard";
import "./Service.css";

const Service = () => {
  return (
    <section className="service pt-5">
      <Container>
        <div className="service-heading d-flex align-items-center justify-content-center gap-4">
          <h1>Services</h1>
          <p>
            {" "}
            We invite you to try our services, and we personally guarantee that
            you will be completely satisfied.
          </p>
        </div>
        <Row className="gx-2 gy-4">
          <Col lg={6}>
            <ServiceCard />
          </Col>
          <Col lg={6}>
            <ServiceCard />
          </Col>
          <Col lg={6}>
            <ServiceCard />
          </Col>
          <Col lg={6}>
            <ServiceCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
