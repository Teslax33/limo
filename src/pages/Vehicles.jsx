import { Col, Container, Row } from "react-bootstrap";
import VehicleModal from "../components/vehicle/VehicleModal";
import { CAR_DATA } from "../components/carPick/CarData";
import VehicleBanner from "../components/vehicle/VehicleBanner";

export default function Vehicles() {
  return (
    <section className="vehicles py-5">
      <Container>
        <Row className="vehicle-card-box gy-3 w-75 mx-auto" gap={5}>
          {CAR_DATA.map((car, index) => {
            return (
              <Col key={index} lg={4} md={6}>
                <VehicleModal
                  img={car[0].img2}
                  name={car[0].name}
                  price={car[0].price}
                  model={car[0].model}
                  doors={car[0].doors}
                  transmission={car[0].transmission}
                  fuel={car[0].fuel}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
        <VehicleBanner />
    </section>
  );
}
