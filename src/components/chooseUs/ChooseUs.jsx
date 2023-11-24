import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../assets/Images/chooseUs/icon.png";
import Icon2 from "../../assets/Images/chooseUs/icon2.png";
import Icon3 from "../../assets/Images/chooseUs/icon3.png";
import Icon4 from "../../assets/Images/chooseUs/icon4.png";
import ChooseUsBox from "./ChooseUsBox";
import "./ChooseUs.css";

export default function ChooseUs() {
  return (
    <section className="choose-us py-5">
      <Container>
        <div className="choose-us-heading text-center">
          <h1>Why Choose Us</h1>
          <p className="mb-0 w-50 mx-auto">
            At DIMOS we pride ourselves in delivering extensive services to
            fulfill all of your needs with first rate customer care
          </p>
        </div>

        <div className="choose-us-boxes pt-5">
          <Row>
            <Col md="3" sm="6" xs="6">
              <ChooseUsBox
                img={Icon}
                title="Easy Online Booking"
                bg={"choose-us-img-bg"}
              />
            </Col>
            <Col md="3" sm="6" xs="6">
              <ChooseUsBox
                img={Icon2}
                title="Professional Drivers"
                bg={"choose-us-img-bg2"}
              />
            </Col>
            <Col md="3" sm="6" xs="6">
              <ChooseUsBox
                img={Icon3}
                title="Variety of Cars Brands"
                bg={"choose-us-img-bg"}
              />
            </Col>
            <Col md="3" sm="6" xs="6">
              <ChooseUsBox
                img={Icon4}
                title="Online Payment"
                bg={"choose-us-img-bg2"}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
