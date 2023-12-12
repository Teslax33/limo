import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function PickCarBox({ data }) {
  return (
    <>
      {data.map((car, id) => {
        return (
          <div key={id} className="xs-pick-car">
            <Row className="text-center">
              <Col md="8">
                <div className="pick-car">
                  <img src={car.img} className="mw-100" alt={car.name} />
                </div>
              </Col>
              <Col md="4">
                <div className="pick-description w-100">
                  <div className="pick-description-price py-2">
                    <span>${car.price}</span>/ rent per day
                  </div>
                  <div className="pick-description-table">
                    <div className="pick-description-table-col">
                      <span>Model</span>
                      <span>{car.model}</span>
                    </div>

                    <div className="pick-description-table-col">
                      <span>Mark</span>
                      <span>{car.mark}</span>
                    </div>

                    <div className="pick-description-table-col">
                      <span>Year</span>
                      <span>{car.year}</span>
                    </div>

                    <div className="pick-description-table-col">
                      <span>Doors</span>
                      <span>{car.doors}</span>
                    </div>

                    <div className="pick-description-table-col">
                      <span>AC</span>
                      <span>{car.air}</span>
                    </div>

                    <div className="pick-description-table-col">
                      <span>Transmission</span>
                      <span>{car.transmission}</span>
                    </div>

                    <div className="pick-description-table-col">
                      <span>Fuel</span>
                      <span>{car.fuel}</span>
                    </div>
                  </div>
                  {/* btn cta */}
                  <a className="btn btn-dark w-100 rounded-0 mt-2" href="/">
                    Reserve Now
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </>
  );
}
