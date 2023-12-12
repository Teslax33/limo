import { Container, Row, Col } from "react-bootstrap";
import NewsletterList from "./NewsletterList";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../../assets/Images/newslogo.png";
import {
  TiSocialYoutube,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Newsletter() {
  const topCites = ["New York", "London", "Berlin", "Los Angeles", "Paris"];
  const explore = [
    "Intercity rides",
    "Limousine service",
    "Chauffeur service",
    "Private car service",
    "Airport transfer",
  ];
  const intercityRides = [
    "East Hampton - New York",
    "New York - WashingTon",
    "New York - Philadelphia",
    "Abu Dhabi - Dubai",
    "London - Birmingham",
  ];

  return (
    <section className="newsletter py-5">
      <Container>
        <div className="newsletter-container p-5">
          <Row>
            <Col md="12" lg="3">
              <img src={Logo} alt="logo" style={{ maxWidth: "90px" }} />

              <div className="subscribe mt-5">
                <span>Subscribe to the newsletter</span>
                <div
                  className="newsletter-inputField position-relative my-2 "
                  style={{ maxWidth: "75%" }}
                >
                  <input
                    type="email"
                    name="email"
                    id="newsemail"
                    placeholder="Email.."
                    className="newsletter-input rounded border-0 py-2 px-3 w-100"
                  />
                  <button className="newsletter-btn position-absolute px-3 py-2 rounded border-0 h-100 top-0 end-0">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="3" sm="12">
              <NewsletterList title="Top cities" lists={topCites} />
            </Col>
            <Col lg="3">
              <NewsletterList title="Explore" lists={explore} />
            </Col>
            <Col>
              <NewsletterList title="Intercity Rides" lists={intercityRides} />
            </Col>
          </Row>
          <footer className="mt-5">
            <Row>
              <Col lg="2">
                <span>© 2023 Limos</span>
              </Col>
              <Col>
                <div className="footer-info">
                  <Row>
                    {/* terms and policy */}
                    <Col lg="8">
                      <div className="info d-flex gap-5 nl-text">
                        <span>Terms</span>
                        <span>Privacy Policy</span>
                        <span>Legal notice</span>
                        <span>Accesibility</span>
                      </div>
                    </Col>

                    <Col>
                      {/* social media section */}
                      <div
                        className="social-links d-flex gap-2"
                        style={{ fontSize: "1.5rem" }}
                      >
                        <TiSocialYoutube />
                        <TiSocialFacebook />
                        <TiSocialTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </footer>
        </div>
      </Container>
    </section>
  );
}
