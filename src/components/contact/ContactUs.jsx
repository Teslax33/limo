import { Button, Col, Container, Row } from "react-bootstrap";
import { FiPhone, FiMail,FiNavigation  } from "react-icons/fi";

export default function ContactUs() {
  return (
    <>
      <Container>
        <Row className="contact-container">
          <Col lg={6}>
            <div className="contact-info p-5 mt-5">
              <h1 className="fw-bold">Need additional information?</h1>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <div className="contact-details d-flex flex-column gap-3">
                <span className="contact-phonenumber fw-bold">
                  {" "}
                  <FiPhone size={20} /> (123) 456-789{" "}
                </span>
                <span className="contact-email fw-bold">
                  {" "}
                  <FiMail size={20} /> limosrental@gmail.com
                </span>
                <span className="contact-address fw-bold">
                  {" "}
                  <FiNavigation size={20} /> Kathmandu, Nepal
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="contact-form p-md-5">
              <form className="d-flex flex-column gap-2 py-md-5">
                <label htmlFor="name">
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  className="bookcar-inputField border-0 p-2"
                  required
                  placeholder='Eg: "Joe Sama'
                />
                <label htmlFor="email">
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bookcar-inputField border-0 p-2"
                  placeholder="youremail@example.com"
                  required
                />
                <label htmlFor="comments">
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  name="comments"
                  id="comments"
                  cols="30"
                  rows="10"
                  className="bookcar-inputField border-0 p-2"
                ></textarea>
                <Button variant="dark" size="lg">
                  Send Message
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
